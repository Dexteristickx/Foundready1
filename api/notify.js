import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, data } = req.body;

  try {
    const subject = type === 'order' 
      ? `🚀 New Order: ${data.full_name} (${data.tier === 0 ? 'Essentials' : 'Pro'})`
      : `📅 New Consultation: ${data.full_name}`;

    const html = type === 'order' 
      ? `
        <h2>New Package Purchase</h2>
        <p><strong>Name:</strong> ${data.full_name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Tier:</strong> ${data.tier === 0 ? 'Essentials Pack' : 'Pro Pack'}</p>
        <p><strong>Company Choice 1:</strong> ${data.company_name1}</p>
        <p><strong>Sector:</strong> ${data.sector}</p>
        <p><strong>Notes:</strong> ${data.notes || 'None'}</p>
      `
      : `
        <h2>New Consultation Booking</h2>
        <p><strong>Name:</strong> ${data.full_name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Business:</strong> ${data.business_name || 'N/A'}</p>
        <p><strong>Duration:</strong> ${data.duration} mins</p>
        <p><strong>Price:</strong> ${data.price}</p>
        <p><strong>Notes:</strong> ${data.notes || 'None'}</p>
      `;

    await resend.emails.send({
      from: 'FoundReady <onboarding@resend.dev>',
      to: 'talk@aasecretaries.com.ng',
      subject: subject,
      html: html,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: error.message });
  }
}
