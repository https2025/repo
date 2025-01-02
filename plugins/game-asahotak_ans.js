import similarity from "similarity";
const threshold = 0.72;
export async function before(m) {
  let id = m.chat;
  if (
    !m.quoted ||
    !m.quoted.fromMe ||
    !m.quoted.isBaileys ||
    !m.text ||
    !/Ketik.*hotak|ᴋᴇᴛɪᴋ.*ʜᴏᴛᴀᴋ/i.test(m.quoted.text) ||
    /.*hotak|.*ʜᴏᴛᴀᴋ/i.test(m.text)
  )
    return !0;
  this.asahotak = this.asahotak ? this.asahotak : {};
  if (!(id in this.asahotak)) return m.reply("pertanyaan itu telah berakhir");
  if (m.quoted.id == this.asahotak[id][0].id) {
    let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text);
    if (isSurrender) {
      clearTimeout(this.asahotak[id][4]);
      delete this.asahotak[id];
      return m.reply("*Yah Menyerah :( !*");
    }
    let json = JSON.parse(JSON.stringify(this.asahotak[id][1]));
    if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
      global.db.data.users[m.sender].exp += this.asahotak[id][2];
      m.reply(`*Benar!*\n+${this.asahotak[id][2]} XP`);
      clearTimeout(this.asahotak[id][4]);
      delete this.asahotak[id];
    } else if (
      similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >=
      threshold
    ) {
      m.reply(`*Dikit Lagi!*`);
    } else if (--this.asahotak[id][3] == 0) {
      clearTimeout(this.asahotak[id][4]);
      delete this.asahotak[id];
      conn.reply(m.chat, `*Kesempatan habis!*\nJawaban: *${json.jawaban}*`, m);
    } else
      m.reply(`*Jawaban Salah!*\nMasih ada ${this.asahotak[id][3]} kesempatan`);
  }
  return !0;
}
export const exp = 0;
