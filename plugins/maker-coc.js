import axios from "axios";
import uploadImage from "../lib/uploadImage.js";

let handler = async (m, { conn, args }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";

  if (!mime) return m.reply("Fotonya Mana?\nContoh Penggunaan:\n.coc nama|universitas|jurusan|gpa1|gpa2|medal1|deskmedal1|medal2|descmedal2|\n\n> Note: tanda | sebagai pemisah");
  if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`_*Mime ${mime} tidak didukung!*_`);

  await m.reply("_In Progress Please Wait..._");

  let img = await q.download();
  let imgUrl = await uploadImage(img);
  let segs = await ToBuffer(`https://anabot.my.id/api/ai/removeBg?imageUrl=${imgUrl}&apikey=ReiiNt`);

  let response = args.join(" ").split("|");

  let anu = {
    apikey: 'ReiiNt',
    nama: response[0] || 'Cifumo',
    universitas: response[1] || 'High school dxd',
    jurusan: response[2] || 'Pemburu Loli',
    gpa1: response[3] || '1000',
    gpa2: response[4] || '10',
    medal1: response[5] || 'Gold Medal',
    desc1: response[6] || 'Ahli Menculik',
    medal2: response[7] || 'Silver Medal',
    desc2: response[8] || 'Sukses Memburu 1000+ Loli',
    photoBase64: segs.toString("base64"),
  };

  const { data } = await axios.post('https://anabot.my.id/api/maker/RuangGuruCOC', anu);

  await conn.sendFile(m.chat, data.result, "result.jpg", "Ini Dia Kak", m, false);
};

handler.help = ["coc"];
handler.tags = ["maker"];
handler.command = /^(coc)$/i;
handler.limit = true; handler.error = 0
export default handler;

async function ToBuffer(url) {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    return Buffer.from(response.data);
  } catch (error) {
    console.error('Error:', error);
    throw "Gagal mengambil gambar.";
  }
}