import {
  createContact,
  updateContactTelegramStatus,
} from '../../../../lib/sanity';
import { sendTelegram } from '../../../../lib/telegram';
import config from '@/utils/config';

export async function POST(request) {
  try {
    const contactData = await request.json();

    // Validate required fields
    if (
      !contactData.name ||
      !contactData.email ||
      !contactData.telephone ||
      !contactData.message
    ) {
      return Response.json(
        { success: false, error: 'Missing required contact data' },
        { status: 400 }
      );
    }

    // Create contact in Sanity
    const sanityResult = await createContact(contactData);

    if (!sanityResult.success) {
      return Response.json(
        { success: false, error: sanityResult.error },
        { status: 500 }
      );
    }

    // Send Telegram notification
    let telegramResult = { success: false, messageId: null };
    try {
      const telegramMessage = `
        *New Contact Form Submission at ${config.siteName}*
👤 *Contact Details:*
• Name: ${contactData.name}
• Email: ${contactData.email}
• Phone: ${contactData.telephone}
• Subject: ${contactData.subject || 'Not specified'}

💬 *Message:* ${contactData.message}

⏰ *Time:* ${new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })}
      `;

      const telegramResponse = await sendTelegram(telegramMessage);

      telegramResult = {
        success: true,
        messageId: telegramResponse.id,
      };

      // Update contact with Telegram status
      await updateContactTelegramStatus(
        sanityResult.contactId,
        telegramResponse.id
      );
    } catch (telegramError) {
      console.error('Telegram notification failed:', telegramError);
      telegramResult = {
        success: false,
        error: telegramError.message,
      };
    }

    return Response.json({
      success: true,
      contactId: sanityResult.contactId,
      documentId: sanityResult.documentId,
      telegram: telegramResult,
    });
  } catch (error) {
    console.error('Contact creation error:', error);
    return Response.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// export async function GET() {
//   try {
//     const { getAllContacts } = await import('@/lib/sanity');
//     const contacts = await getAllContacts();

//     return Response.json({ success: true, contacts });
//   } catch (error) {
//     console.error('Error fetching contacts:', error);
//     return Response.json(
//       { success: false, error: 'Failed to fetch contacts' },
//       { status: 500 }
//     );
//   }
// }
