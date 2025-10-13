import {
  createBooking,
  updateBookingTelegramStatus,
} from '../../../../lib/sanity';
import { sendTelegram } from '@/lib/telegram';
import { formatBookingMessage } from '@/utils/telegramFormatter';

export async function POST(request) {
  try {
    const bookingData = await request.json();

    // Validate required fields
    if (
      !bookingData.bookingType ||
      !bookingData.customerDetails ||
      !bookingData.tripDetails
    ) {
      return Response.json(
        { success: false, error: 'Missing required booking data' },
        { status: 400 }
      );
    }

    // Create booking in Sanity
    const sanityResult = await createBooking(bookingData);

    if (!sanityResult.success) {
      return Response.json(
        { success: false, error: sanityResult.error },
        { status: 500 }
      );
    }

    // Send Telegram notification
    let telegramResult = { success: false, messageId: null };
    try {
      const adminMessage = formatBookingMessage(bookingData);
      const telegramResponse = await sendTelegram(adminMessage);

      telegramResult = {
        success: true,
        messageId: telegramResponse.id,
      };

      // Update booking with Telegram status
      await updateBookingTelegramStatus(
        sanityResult.bookingId,
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
      bookingId: sanityResult.bookingId,
      documentId: sanityResult.documentId,
      telegram: telegramResult,
    });
  } catch (error) {
    console.error('Booking creation error:', error);
    return Response.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// export async function GET() {
//   try {
//     const { getAllBookings } = await import('@/lib/sanity');
//     const bookings = await getAllBookings();

//     return Response.json({ success: true, bookings });
//   } catch (error) {
//     console.error('Error fetching bookings:', error);
//     return Response.json(
//       { success: false, error: 'Failed to fetch bookings' },
//       { status: 500 }
//     );
//   }
// }
