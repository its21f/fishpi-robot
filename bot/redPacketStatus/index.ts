import Fishpi, { IRedPacketStatusMsg } from "fishpi";
import roles from '@bot/redPacket/roles'

export async function exec(fishpi: Fishpi) {
  fishpi.chatroom.addListener('redPacketStatus', async (msg) => {
    Object.values(roles).forEach(({ update, enable }) => {
      if (!enable || !update) return;
      update(msg, fishpi);
    })
  });
}