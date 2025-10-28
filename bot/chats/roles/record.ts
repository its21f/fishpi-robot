import Fishpi, { IChatData } from "fishpi";

export default [{
  match: [/^开始游戏/],
  exec: async ({ markdown, senderUserName }: IChatData, fishpi: Fishpi) => {
    await fishpi.chat.channel(senderUserName).send(markdown + ': 游戏规则');
  },
  enable: true,
}]