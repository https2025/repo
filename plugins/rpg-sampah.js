/* 
『WARNING』 WATERMARK INI TIDAK BOLEH DI HAPUS
* SCRIPT BY DEXZZ
* NAMA SCRIPT EMILIA-MD
* JANGAN DI HAPUS KONTOL
* FOLLOW SALURAN DEXZZ
https://whatsapp.com/channel/0029ValeNDG0LKZLbAQZNs0i
*/
const rewards = {
  exp: 500,
  money: 20999,
};
const cooldown = 2592000000;
let handler = async (m) => {
  let user = global.db.data.users[m.sender];
  if (new Date() - user.lastmonthly < cooldown)
    return m.reply(`You have already claimed this monthly claim, wait for *${(user.lastmonthly + cooldown - new Date()).toTimeString()}*`);
  let text = "";
  for (let reward of Object.keys(rewards))
    if (reward in user) {
      user[reward] += rewards[reward];
      text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`;
    }
  conn.reply(m.chat, "*––––––『 NYAMPAH 』––––––*\n" + text.trim(), null, m);
  user.lastmonthly = new Date() * 1;
};
handler.help = ["nyampah"];
handler.tags = ["rpg"];
handler.command = /^(nyampah)$/i;
handler.register = true;
handler.group = true;
handler.rpg = true;
export default handler;
