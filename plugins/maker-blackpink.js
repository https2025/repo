let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    return m.reply(`Masukan Text Nya!\n\nContoh\n${usedPrefix + command} Blackpink`);
  let res = API("lol", "/api/textprome/blackpink", { text: text }, "apikey");
  conn.sendFile(m.chat, res, "error.jpg", "Ini Dia Kak", m, false);
};
handler.help = ["blackpink"];
handler.tags = ["maker"];
handler.command = /^(blackpink)$/i;
handler.limit = true; handler.error = 0
export default handler;
