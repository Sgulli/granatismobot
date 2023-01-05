import { Context, Telegraf } from 'telegraf';
import { Update } from 'typegram';
import { TOKEN_BOT } from '../config';

export const bot: Telegraf<Context<Update>> = new Telegraf(TOKEN_BOT);
