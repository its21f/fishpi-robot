import Fishpi, { IChatRoomMsg } from "fishpi";
import { getRecord } from "@lib/guess";

export default [{
  match: [/^赌狗记录/],
  exec: async ({ userName }: IChatRoomMsg, fishpi: Fishpi) => {
    const record = getRecord(userName);
    fishpi.chatroom.send(`【${userName}】 ${record.lost}胜:${record.zero}平:${record.win}负`);
  },
  enable: true,
}]