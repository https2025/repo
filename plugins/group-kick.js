import { areJidsSameUser } from "@adiwajshing/baileys";
let handler = async (m, { conn, participants, isOwner }) => {
  let usr = m.quoted ? [m.quoted.sender] : m.mentionedJid;
  let users = usr.filter((u) => !areJidsSameUser(u, conn.user.id));
  if (!(m.quoted || m.mentionedJid[0]))
    return m.reply("Tag atau reply orang yang mau dikick!");
  let kickedUser = [];
  for (let user of users)
    if (
      user.endsWith("@s.whatsapp.net") &&
      !(
        participants.find((v) => areJidsSameUser(v.id, user)) || { admin: true }
      ).admin
    ) {
      const res = await conn.groupParticipantsUpdate(m.chat, [user], "remove");
      kickedUser.concat(res);
      await delay(1 * 1000);
    }
  m.reply(
    `Telah Mengeluarkan Beban 🧸 ${kickedUser.map((v) => "@" + v.split("@")[0])}`,
    null,
    { mentions: kickedUser },
  );
};
handler.help = ["kick"];
handler.tags = ["group"];
handler.command = /^(kick)$/i;

handler.admin = true;
handler.group = true;
handler.botAdmin = true;

export default handler;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
