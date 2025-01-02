import uploadImage from "../lib/uploadImage.js";

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m;
  let [username, birthday] = text.split("|");
  let mime = (q.msg || q).mimetype || "";
  if (!mime) return m.reply("Fotonya Mana? Reply gambar atau upload");
  if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`Tipe ${mime} tidak didukung!`);
  if (!(username || birthday))
    return m.reply(
      `Masukan Format Dengan Benar\n\nContoh :\n${usedPrefix + command} RyHar|20-1-2000`,
    );
  global.db.data.settings[conn.user.jid].loading
    ? await m.reply(global.config.loading)
    : false;
  let img = await q.download();
  let { files } = await uploadImage(img);
  let image = API(
    "https://some-random-api.com",
    "/canvas/misc/namecard",
    { avatar: files[0].url, birthday: birthday, username: username },
    false,
  );
  conn.sendFile(m.chat, image, username + ".jpeg", "Ini Dia Kak", m);
};
handler.help = ["namecard"];
handler.tags = ["genshin"];
handler.command = /^(namecard)$/i;

export default handler;