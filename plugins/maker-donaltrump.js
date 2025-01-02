let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    return m.reply(
      `Masukan Format Dengan Benar!\n\nExample\n${usedPrefix + command} Donal Trump`,
    );
  let res = API("lol", "/api/tweettrump", { text: text }, "apikey");
  conn.sendFile(m.chat, res, "error.jpg", "Ini Dia Kak", m, false);
};
handler.help = ["trumptweet"];
handler.tags = ["maker"];
handler.command = /^(donaldtrumptweet)$/i;
handler.limit = true; handler.error = 0
export default handler;
