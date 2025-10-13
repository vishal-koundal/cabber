import config from './config';

export const formatBookingMessage = (bookingData) => {
  const { bookingType, customerDetails, tripDetails } = bookingData;

  let message = `🚗 *New ${
    bookingType === 'cab' ? 'Cab' : 'Self-Drive'
  } Booking Request*\n\n`;

  // Customer Details
  message += `👤 *Customer Details:*\n`;
  message += `• Name: ${customerDetails.name}\n`;
  message += `• Email: ${customerDetails.email}\n`;
  message += `• Mobile: ${customerDetails.mobile}\n`;

  if (customerDetails.message) {
    message += `• Message: ${customerDetails.message}\n`;
  }

  message += `\n`;

  // Trip Details based on booking type
  if (bookingType === 'cab') {
    message += `🚕 *Cab Booking Details:*\n`;
    message += `• Pickup Location: ${tripDetails.pickupLocation}\n`;
    message += `• Drop Location: ${tripDetails.dropLocation}\n`;
    message += `• Trip Type: ${
      tripDetails.tripType === 'single' ? 'Single Trip' : 'Round Trip'
    }\n`;
  } else if (bookingType === 'self-drive') {
    message += `🚙 *Self-Drive Booking Details:*\n`;
    message += `• Days Required: ${tripDetails.daysRequired}\n`;
    message += `• Start Date: ${tripDetails.startDate}\n`;
    message += `• End Date: ${tripDetails.endDate}\n`;
  }

  message += `\n`;

  // Car Details (from BookingDetails component)
  message += `🚗 *Car Details:*\n`;
  message += `• Name: BMW 7 Series Sedan\n`;
  message += `• Seats: 4\n`;
  message += `• Fuel: Petrol\n`;
  message += `• Category: Luxury\n`;

  message += `\n`;

  // Fare Details
  message += `💰 *Fare Details:*\n`;
  message += `• Base fare: ${config.currency} 450\n`;
  message += `• Doorstep delivery & pickup: ${config.currency} 100\n`;
  message += `• Insurance & GST: ${config.currency} 80\n`;
  message += `• *Total: ${config.currency} 630*\n`;

  message += `\n`;
  message += `📝 *Additional Notes:*\n`;
  message += `• Fuel: Excluded\n`;
  message += `• Tolls, Parking & Inter-state taxes: To be paid by you\n`;

  message += `\n`;
  message += `⏰ *Booking Time:* ${new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })}`;

  return message;
};

export const formatBookingConfirmationMessage = (bookingData) => {
  const { customerDetails, bookingType } = bookingData;

  let message = `✅ *Booking Confirmation*\n\n`;
  message += `Dear ${customerDetails.name},\n\n`;
  message += `Thank you for choosing ${config.siteName}!\n\n`;
  message += `Your ${
    bookingType === 'cab' ? 'cab' : 'self-drive'
  } booking has been received and our team will contact you within 24 hours to confirm all details.\n\n`;
  message += `📞 Contact: ${config.telephone}\n`;
  message += `📧 Email: ${config.email}\n\n`;
  message += `We look forward to serving you!`;

  return message;
};
