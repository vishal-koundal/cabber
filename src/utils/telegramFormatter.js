import config from './config';

export const formatBookingMessage = (bookingData) => {
  const {
    bookingType,
    customerDetails = {},
    tripDetails = {},
    carDetails = {},
    pricing = {},
  } = bookingData;

  const bookingTypeLabel =
    {
      cab: 'Cab',
      wedding: 'Wedding',
      'self-drive': 'Self-Drive',
    }[bookingType] || 'Booking';

  let message = `🚗 *New ${bookingTypeLabel} Booking Request*\n\n`;

  /* ---------------- Customer Details ---------------- */
  message += `👤 *Customer Details:*\n`;
  message += `• Name: ${customerDetails.name || '—'}\n`;
  message += `• Email: ${customerDetails.email || '—'}\n`;
  message += `• Mobile: ${customerDetails.mobile || '—'}\n`;

  if (customerDetails.message) {
    message += `• Message: ${customerDetails.message}\n`;
  }

  message += `\n`;

  /* ---------------- Trip Details ---------------- */
  if (bookingType === 'cab' || bookingType === 'wedding') {
    message += `🚕 *Trip Details:*\n`;
    message += `• Pickup: ${tripDetails.pickupLocation || '—'}\n`;
    message += `• Drop: ${tripDetails.dropLocation || '—'}\n`;
    message += `• Trip Type: ${
      tripDetails.tripType === 'round' ? 'Round Trip' : 'Single Trip'
    }\n`;
  }

  if (bookingType === 'self-drive') {
    message += `🚙 *Self-Drive Details:*\n`;
    message += `• Days Required: ${tripDetails.daysRequired || '—'}\n`;
    message += `• Start Date: ${tripDetails.startDate || '—'}\n`;
    message += `• End Date: ${tripDetails.endDate || '—'}\n`;
  }

  message += `\n`;

  /* ---------------- Car Details ---------------- */
  message += `🚗 *Car Details:*\n`;
  message += `• Name: ${carDetails.name || '—'}\n`;
  message += `• Seats: ${carDetails.seats || '—'}\n`;
  message += `• Fuel: ${
    carDetails.fuelType ? String(carDetails.fuelType).toUpperCase() : '—'
  }\n`;
  message += `• Category: ${carDetails.category || '—'}\n`;

  message += `\n`;

  /* ---------------- Fare Details ---------------- */
  message += `💰 *Fare Details:*\n`;
  message += `• Base Fare: ${pricing.currency || config.currency} ${
    pricing.baseFare ?? 0
  }\n`;
  message += `• Delivery & Pickup: ${pricing.currency || config.currency} ${
    pricing.deliveryPickup ?? 0
  }\n`;
  message += `• Insurance & GST: ${pricing.currency || config.currency} ${
    pricing.insuranceGst ?? 0
  }\n`;
  message += `• *Total: ${pricing.currency || config.currency} ${
    pricing.total ?? 0
  }*\n`;

  message += `\n`;

  /* ---------------- Booking Time ---------------- */
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
