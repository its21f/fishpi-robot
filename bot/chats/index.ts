import Fishpi, { IChatData } from "fishpi";
import roles from './roles'

export async function exec (fishpi: Fishpi) {
  fishpi.notice.addListener('newIdleChatMessage', async (msg) => {
    const chats = await fishpi.chat.channel(msg.senderUserName).get({ size: 2 });
    const data = chats?.find(chat => chat.preview == chat.preview);
    if (!data) return;
    for (let i = 0; i < roles.length; i++) {
      const { match, exec, enable } = roles[i];
      if (!enable) continue;
      if (!match.every(m => m.test(data.markdown))) continue;
      if (false === (await exec(data, fishpi))) break;
    }
  });
  
}

export { MsgRole, load } from './roles'; 