let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukan Text Nya!\n\nContoh\n${usedPrefix + command} Alok`);
  let res = API("lol", "/api/ephoto1/freefire", { text: text }, "apikey");
  await conn.sendFile(m.chat, res, "error.jpg", "Ini Dia Kak", m, false);
};
handler.help = ["freefire"];
handler.tags = ["maker"];
handler.command = /^(freefire)$/i;
handler.limit = true; handler.error = 0
export default handler;