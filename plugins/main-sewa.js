import fs from "fs";
let handler = async (m, { conn }) => {
  let teks = `❏ *_Harga Sewa_*
❃ _1bulan Hari 15k / Group_
❃ _2bulan 25k / Group_
❃ _3bulan 50k / Group_
❃ _Permanen 100k / Group_

❏ *_Fitur_*
❃ _Antilink_
❃ _Welcome_
❃ _Enable_
❃ _Promote/Demote_
❃ _HideTag_
❃ _Dan Lain Lain_

Minat? Silahkan Chat Nomor Owner Dibawah
${global.config.owner
  .map(([jid, name]) => {
    return `
Name : ${name}
https://wa.me/${jid}
`.trim();
  })
  .join("\n\n")}
`.trim();
  await conn.adReply(
    m.chat,
    teks,
    "S E W A - B O T",
    "",
    fs.readFileSync("./media/thumbnail.jpg"),
    global.config.website,
    m,
  );
};
handler.help = ["sewabot"];
handler.tags = ["main"];
handler.command = /^sewa(bot)?$/i;

export default handler;
