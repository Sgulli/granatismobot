"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const telegraf_1 = require("telegraf");
const config_1 = require("../config");
exports.bot = new telegraf_1.Telegraf(config_1.TOKEN_BOT);
