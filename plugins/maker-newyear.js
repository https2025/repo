let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    return m.reply(`Masukan Text Nya!\n\nContoh\n${usedPrefix + command} Tahun Baru`);
  let res = API("lol", "/api/textprome/newyearcard", { text: text }, "apikey");
  conn.sendFile(m.chat, res, "error.jpg", "Ini Dia Kak", m, false);
};
handler.help = ["newyear"];
handler.tags = ["maker"];
handler.command = /^(newyear)$/i;
handler.limit = true; handler.error = 0
export default handler;
