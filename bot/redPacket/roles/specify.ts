import Fishpi, { IChatRoomMsg, IRedpacket } from "fishpi";

let loginUser: string | null = null;
export default {
  async exec({ content: redpack, userName, oId }: IChatRoomMsg<IRedpacket>, fishpi: Fishpi) {
    if (!loginUser) loginUser = await fishpi.account.info().then((data: any) => data.data.userName);
    if (redpack.money <= 0) return;
    if (!redpack.recivers?.includes(loginUser!)) return;
    setTimeout(() => {
      fishpi.chatroom.redpacket.open(oId);
    }, 3000)
  },
  enable: true,
}