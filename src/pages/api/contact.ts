import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { createClient } from '@sanity/client';

export const POST: APIRoute = async ({ request }) => {
  const resendApiKey = 're_LzUx3e7N_NRvYS1mn6zRVnWz9Xxi8axDr';
  const sanityToken = 'skaKz4z3SL5MgCBk2oT7dGNxaQ3quvyuHnFCf0gKcyP0ujPDAoeRKXYqSMLGZ8RdvHJcNhaDLFfGq0kIQ14bVgJGWUrfyjrFt9m3P2ox6b72n9ptA8RpcvVtLjQh5OHtpWeDrNaUXILvoPlKDPLONHh7d4yxUBqw7CVa4JLqf00QdqLSYXUT';

  // Configure Sanity Write Client
  const sanity = createClient({
    projectId: 'z81qmmi3',
    dataset: 'production',
    apiVersion: '2025-01-28',
    token: sanityToken,
    useCdn: false,
  });

  if (!resendApiKey) {
    console.error('RESEND_API_KEY is missing.');
    return new Response(JSON.stringify({ message: 'Server configuration error' }), { status: 500 });
  }

  const resend = new Resend(resendApiKey);

  try {
    const data = await request.formData();
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const phone = data.get('phone') as string;
    const service = data.get('service') as string;
    const message = data.get('message') as string;

    if (!name || !email || !service) {
      return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
    }

    // 1. Save to Sanity
    try {
      await sanity.create({
        _type: 'contactEntry',
        name,
        email,
        phone,
        service,
        message,
        submittedAt: new Date().toISOString(),
        status: 'new',
      });
    } catch (sanityError) {
      console.error('Sanity creation failed:', sanityError);
      // We continue to send email even if Sanity fails, but we log it.
    }

    // 2. Send email via Resend
    const emailResponse = await resend.emails.send({
      from: 'Toddler\'s Infantry <onboarding@resend.dev>',
      to: 'info@chameleon-ideas.com',
      subject: `New Request: ${service} from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #6B7C67;">New Appointment Inquiry</h2>
          <p>You have received a new message from the <strong>Toddler's Infantry</strong> contact form.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
            <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
            <tr><td><strong>Phone:</strong></td><td>${phone || 'Not provided'}</td></tr>
            <tr><td><strong>Service:</strong></td><td>${service}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 5px;">
            <strong>Message:</strong><br/>${message || 'No additional message.'}
          </div>
        </div>
      `,
    });

    if (emailResponse.error) {
      return new Response(JSON.stringify({ message: 'Failed to send email', error: emailResponse.error }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Internal server error', error }), { status: 500 });
  }
};
