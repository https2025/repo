let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    return m.reply(`Masukan Text Nya!\n\nContoh\n${usedPrefix + command} Elaina`);
  let res = API("lol", "/api/textprome/icecold", { text: text }, "apikey");
  await conn.sendFile(m.chat, res, "error.jpg", "Ini Dia Kak", m, false);
};
handler.help = ["ice"];
handler.tags = ["maker"];
handler.command = /^(ice)$/i;
handler.limit = true; handler.error = 0
export default handler;
