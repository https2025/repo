let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    return m.reply(`Masukan Text Nya!\n\nContoh\n${usedPrefix + command} Raja Iblis`);
  let res = API("lol", "/api/ephoto1/anonymhacker", { text: text }, "apikey");
  conn.sendFile(m.chat, res, "error.jpg", "Ini Dia Kak", m, false);
};
handler.help = ["logohacker"];
handler.tags = ["maker"];
handler.command = /^(logohacker)$/i;
handler.limit = true; handler.error = 0
export default handler;
