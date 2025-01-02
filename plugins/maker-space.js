let handler = async (m, { conn, args, usedPrefix, command }) => {
  let teks = args.join(" ").split("|");
  if (!teks[0] || !teks[1])
    return m.reply(`Masukan Text Nya!\n\nContoh\n${usedPrefix + command} Raja|Iblis`);
  let res = API(
    "lol",
    "/api/textprome2/space",
    { text1: teks[0], text2: teks[1] },
    "apikey",
  );
  conn.sendFile(m.chat, res, "error.jpg", "Ini Dia Kak", m);
};
handler.help = ["space"];
handler.tags = ["maker"];
handler.command = /^(space)$/i;
handler.limit = true; handler.error = 0
export default handler;
