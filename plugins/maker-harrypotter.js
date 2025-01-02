let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    return m.reply(`Masukan Text Nya!\n\nContoh\n${usedPrefix + command} Emilia`);
  let res = API("lol", "/api/photooxy1/harrypotter", { text: text }, "apikey");
  conn.sendFile(m.chat, res, "error.jpg", "Ini Dia Kak", m, false);
};
handler.help = ["harrypotter"];
handler.tags = ["maker"];
handler.command = /^(harrypotter)$/i;
handler.limit = true; handler.error = 0
export default handler;
