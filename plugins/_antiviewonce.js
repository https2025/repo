/*
 * @Author: Cifumo
 * @Web: https://rest.cifumo.biz.id
 */

export async function before(m) {
  if (m.isBaileys && m.fromMe) return;
  let chat = global.db.data.chats[m.chat];
  if (chat.viewonce && m.isGroup && m.mtype == "viewOnceMessageV2") {
    let val = { ...m };
    let msg =
      val.message?.viewOnceMessage?.message ||
      val.message?.viewOnceMessageV2?.message;
    delete msg[Object.keys(msg)[0]].viewOnce;
    val.message = msg;
    await this.sendMessage(m.chat, { forward: val }, { quoted: m });
  }
  return !0;
}
