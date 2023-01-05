import { bot } from './bot';
import { v4 as uuid } from 'uuid';

bot.start((ctx) => {
  ctx.reply('E ANCORA TOROOOOO E SEMPRE TOROOOOOOOOOOOOOOOOOOO');
});

bot.help((ctx) => {
  ctx.reply('Send /start to start the bot');
  ctx.reply('Send /keyboard to receive a message with a keyboard');
  ctx.reply('Send /quit to stop the bot');
});

bot.catch(async (error: unknown, ctx) => {
  console.log('Bot error', error);

  await ctx.reply('Sorry, something went wrong while handling your message.');
});
bot.command('granatismo', async (ctx) => {
  await ctx.reply(granatismo());
});

bot.command('home', async (ctx) => {
  // await ctx.sendChatAction('upload_photo');
  // await ctx.sendPhoto({ source: 'media/casa.jpg' }, { caption: 'Casa di Silvio Coggiola' });
  await ctx.sendMessage('Zio pera non funziona ancora...');
});
// il torino 2022/2023 sarà meno forte in valore assoluto, ma molto più completo e tecnico
bot.on('inline_query', async (ctx) => {
  await ctx.answerInlineQuery(
    [
      {
        type: 'article',
        id: uuid(),
        title: 'granatismo',
        description: 'quanto sei granata?',
        input_message_content: {
          message_text: granatismo(),
        },
      },
      {
        type: 'article',
        id: uuid(),
        title: 'il toro',
        description: 'il toro 2022/2023...',
        input_message_content: {
          message_text: 'il torino 2022/2023 sarà meno forte in valore assoluto, ma molto più completo e tecnico',
        },
      },
      {
        type: 'article',
        id: uuid(),
        title: 'OOOOOOOOOOOOOO',
        description: 'OOOOOOOOOOOO',
        input_message_content: {
          message_text:
            'OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO',
        },
      },
      // {
      //   type: 'photo',
      //   id: uuid(),
      //   title: 'casa',
      //   description: 'casa di...?',
      //   photo_url: 'media/casa.jpg',
      //   caption: 'Casa di Silvio Coggiola zio pera...',
      // },
    ],
    { is_personal: false, cache_time: 0 }
  );
});

bot.command('quit', (ctx) => ctx.leaveChat());

bot.launch();

console.log('bot online...');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

export function granatismo() {
  return 'Sei granata al ' + (Math.random() * 100).toFixed(2) + '%';
}
