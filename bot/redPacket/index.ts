import Fishpi, { IChatRoomMsg, IRedpacket } from "fishpi";
import roles from './roles'

export async function exec(fishpi: Fishpi) {
  fishpi.chatroom.addListener('redPacket', async (msg) => {
    let { content: redpack } = msg = msg as IChatRoomMsg<IRedpacket>
    redpack = redpack as IRedpacket;

    if (!roles[redpack.type]) return;

    let { enable, exec } = roles[redpack.type];
    if (!enable || !exec) return;

    exec(msg, fishpi);
  });
}

export { RedPackRole, load } from './roles';