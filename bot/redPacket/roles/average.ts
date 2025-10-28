import Fishpi, { IChatRoomMsg, IRedpacket } from "fishpi";

export default {
  exec({ content: redpack, userName, oId }: IChatRoomMsg<IRedpacket>, fishpi: Fishpi) {
    if (redpack.money <= 0) return;
    setTimeout(() => {
      fishpi.chatroom.redpacket.open(oId);
    }, 3000)
  },
  enable: true,
}