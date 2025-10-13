# Integration Setup

This project includes Telegram notifications and Sanity CMS integration for booking requests and contact forms. Follow these steps to set up both integrations:

## 1. Create a Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Start a chat with BotFather
3. Send `/newbot` command
4. Follow the instructions to create your bot
5. Save the bot token you receive

## 2. Get Chat ID

1. Add your bot to a group or start a chat with it
2. Send a message to the bot
3. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
4. Look for the `chat.id` in the response
5. Save this chat ID

## 3. Sanity CMS Setup

1. Go to your Sanity project dashboard
2. Navigate to **API** section
3. Create a new **API token** with **Editor** permissions
4. Copy the token (you'll need this for write operations)

## 4. Environment Variables

Create a `.env.local` file in your project root with:

```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_API_TOKEN=your_sanity_api_token_here

# Telegram Bot Configuration
NEXT_PUBLIC_TELEGRAM_TOKEN=your_telegram_bot_token_here
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your_telegram_chat_id_here

# Optional: Customer notification chat ID
# NEXT_PUBLIC_CUSTOMER_TELEGRAM_CHAT_ID=your_customer_chat_id_here
```

## 5. Features

- **Database Persistence**: All bookings and contacts are saved to Sanity CMS
- **Admin Notifications**: When a customer submits a booking or contact form, you'll receive a formatted message with all details
- **Real-time Status**: Forms show loading state while saving and sending notifications
- **Error Handling**: If Sanity save or Telegram notification fails, the error is displayed to the user
- **Formatted Messages**: Rich, formatted messages with emojis and structured data
- **Unique IDs**: Each submission gets a unique ID for tracking

## 6. Message Format

The Telegram messages include:

- **Booking Form**: Customer details, booking type, trip details, car details, pricing, timestamp
- **Contact Form**: Contact details, subject, message, contact ID, timestamp

## 7. Testing

1. Set up your environment variables
2. Start the development server: `npm run dev`
3. Test booking form: Navigate to `/create-booking`
4. Test contact form: Navigate to `/contact`
5. Test integration: Visit `/test-telegram` or `/test-contact`
6. Check your Telegram chat for notifications
7. Check your Sanity Studio for saved data

## 8. Troubleshooting

### Telegram Issues

- **Bot not responding**: Check that the bot token is correct
- **No messages received**: Verify the chat ID is correct
- **Permission errors**: Make sure the bot is added to the chat/group
- **Network errors**: Check your internet connection and Telegram API status

### Sanity Issues

- **Write permission denied**: Check that your NEXT_PUBLIC_SANITY_API_TOKEN has Editor permissions
- **Project not found**: Verify NEXT_PUBLIC_SANITY_PROJECT_ID is correct
- **Dataset errors**: Ensure your dataset is named 'production'
- **Schema errors**: Make sure your Sanity schemas include 'booking' and 'contact' types
