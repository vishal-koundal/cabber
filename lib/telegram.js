import axios from 'axios';

export const sendTelegram = (
  message,
  chat = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID
) => {
  return new Promise((resolve, reject) => {
    const apiToken = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
    axios
      .post(`https://api.telegram.org/bot${apiToken}/sendMessage`, {
        parse_mode: 'Markdown',
        disable_web_page_preview: true,
        chat_id: chat,
        text: message,
      })
      .then((response) => {
        if (!response.data.ok) {
          reject(response.data.result);
        }

        resolve({
          id: response.data.result.message_id,
          status: response.data.ok,
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};
