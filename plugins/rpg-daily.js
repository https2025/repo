/* 
『WARNING』 WATERMARK INI TIDAK BOLEH DI HAPUS
* SCRIPT BY DEXZZ
* NAMA SCRIPT EMILIA-MD
* JANGAN DI HAPUS KONTOL
* FOLLOW SALURAN DEXZZ
https://whatsapp.com/channel/0029ValeNDG0LKZLbAQZNs0i
*/
const rewards = {
  exp: 9999,
  money: 4999,
  potion: 5,
};
const cooldown = 79200000;
let handler = async (m, { conn, usedPrefix }) => {
  let user = global.db.data.users[m.sender];
  if (new Date() - user.lastclaim < cooldown)
    return m.reply(
      `ʏᴏᴜ'ᴠᴇ ᴀʟʀᴇᴀᴅʏ ᴄʟᴀɪᴍᴇᴅ *ᴛᴏᴅᴀʏ ʀᴇᴡᴀʀᴅs*, ᴩʟᴇᴀsᴇ ᴡᴀɪᴛ ᴛɪʟʟ ᴄᴏᴏʟᴅᴏᴡɴ ғɪɴɪsʜ.

⏱️ ${(user.lastclaim + cooldown - new Date()).toTimeString()}`.trim(),
    );
  let text = "";
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue;
    user[reward] += rewards[reward];
    text += `➠ ${global.rpg.emoticon(reward)} ${reward}: ${rewards[reward]}\n`;
  }
  m.reply(
    `🔖 ᴅᴀɪʟʏ ʀᴇᴡᴀʀᴅ ʀᴇᴄᴇɪᴠᴇᴅ :
${text}`.trim(),
  );
  user.lastclaim = new Date() * 1;
};
handler.help = ["claim"];
handler.tags = ["xp"];
handler.command = /^(daily|claim)$/i;

handler.register = true;
handler.group = true;
handler.rpg = true;
export default handler;
