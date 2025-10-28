import Fishpi from 'fishpi';
import { domain } from '../config.json';
import fetch from 'node-fetch';
import { Robots } from '@bot/index';
import * as Schedule from '@schedule/index';

const fishpi = new Fishpi();
fishpi.setDomain(domain);
globalThis.fetch = fetch as any;

export default {
  async login(config: any) {
    if (config.token) await fishpi.setToken(config.token);
    else if (config.username && config.passwd) await fishpi.login(config);
    else throw new Error('请提供 token 或者用户名密码');

    const user = await fishpi.account.info().catch((err) => { throw new Error(`登录失败：${err.message}`); });
    console.log(`登录成功：${user.userName}`);
  },

  async listen(bots: Robots) {
    console.log('聊天室监听中...');
    
    // 监听聊天室消息
    Object.values(bots).forEach(async (bot) => {
      bot.exec && await bot.exec(fishpi);
    });

    Schedule.load(fishpi);
  }
}

