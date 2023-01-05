"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.granatismo = void 0;
const bot_1 = require("./bot");
const uuid_1 = require("uuid");
bot_1.bot.start((ctx) => {
    ctx.reply('E ANCORA TOROOOOO E SEMPRE TOROOOOOOOOOOOOOOOOOOO');
});
bot_1.bot.help((ctx) => {
    ctx.reply('Send /start to start the bot');
    ctx.reply('Send /keyboard to receive a message with a keyboard');
    ctx.reply('Send /quit to stop the bot');
});
bot_1.bot.catch((error, ctx) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Bot error', error);
    yield ctx.reply('Sorry, something went wrong while handling your message.');
}));
bot_1.bot.command('granatismo', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply(granatismo());
}));
bot_1.bot.command('home', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    // await ctx.sendChatAction('upload_photo');
    // await ctx.sendPhoto({ source: 'media/casa.jpg' }, { caption: 'Casa di Silvio Coggiola' });
    yield ctx.sendMessage('Zio pera non funziona ancora...');
}));
// il torino 2022/2023 sarà meno forte in valore assoluto, ma molto più completo e tecnico
bot_1.bot.on('inline_query', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.answerInlineQuery([
        {
            type: 'article',
            id: (0, uuid_1.v4)(),
            title: 'granatismo',
            description: 'quanto sei granata?',
            input_message_content: {
                message_text: granatismo(),
            },
        },
        {
            type: 'article',
            id: (0, uuid_1.v4)(),
            title: 'il toro',
            description: 'il toro 2022/2023...',
            input_message_content: {
                message_text: 'il torino 2022/2023 sarà meno forte in valore assoluto, ma molto più completo e tecnico',
            },
        },
        {
            type: 'article',
            id: (0, uuid_1.v4)(),
            title: 'OOOOOOOOOOOOOO',
            description: 'OOOOOOOOOOOO',
            input_message_content: {
                message_text: 'OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO',
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
    ], { is_personal: false, cache_time: 0 });
}));
bot_1.bot.command('quit', (ctx) => ctx.leaveChat());
bot_1.bot.launch();
console.log('bot online...');
process.once('SIGINT', () => bot_1.bot.stop('SIGINT'));
process.once('SIGTERM', () => bot_1.bot.stop('SIGTERM'));
function granatismo() {
    return 'Sei granata al ' + (Math.random() * 100).toFixed(2) + '%';
}
exports.granatismo = granatismo;
