let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    return m.reply('`Masukan Format Dengan Benar!\n\nContoh\n${usedPrefix + command} Raja Iblis`);
  let res = API("lol", "/api/ephoto1/wetglass", { text: text }, "apikey");
  conn.sendFile(m.chat, res, "glass.jpg", "Ini Dia Kak", m, false);
};
handler.help = ["glass"];
handler.tags = ["maker"];
handler.command = /^(glass)$/i;
handler.limit = true; handler.error = 0
export default handler;
