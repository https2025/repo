import uploadImage from "../lib/uploadImage.js";
import { sticker } from "../lib/sticker.js";
import { webp2png } from "../lib/webp2mp4.js";

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (!mime)
    return m.reply(`balas gambar dengan perintah\n\n${usedPrefix + command}`);
  if (!/image\/(jpe?g|png|webp)/.test(mime))
    return m.reply(`_*Mime ${mime} tidak didukung!*_`);
  
  global.db.data.settings[conn.user.jid].loading
    ? await m.reply(global.config.loading)
    : false;
  
  let img = await q.download();
  let apiUrl;

  // Jika mimetype adalah webp, konversi ke png dan langsung gunakan ke API
  if (/image\/webp/.test(mime)) {
    img = await webp2png(img);
    apiUrl = global.API(
      "https://some-random-api.com",
      "/canvas/overlay/triggered",
      { avatar: img },
    );
  } else {
    let anu = await uploadImage(img);
    apiUrl = global.API(
      "https://some-random-api.com",
      "/canvas/overlay/triggered",
      { avatar: anu },
    );
  }

  let stiker = await sticker(
    false,
    apiUrl,
    global.config.stickpack,
    global.config.stickauth,
  );
  conn.sendFile(m.chat, stiker, "", "", m);
};

handler.help = ["triggered"];
handler.tags = ["sticker"];
handler.command = /^(triggered)$/i;

export default handler;