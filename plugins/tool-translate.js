import axios from "axios";
let handler = async (m, { conn, usedPrefix, command, args }) => {
  let err = `
Contoh:
${usedPrefix + command} <lang> <your message>
${usedPrefix + command} id Hello How Are You

Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim();
  if (!args[0]) throw err;
  let setting = global.db.data.settings[conn.user.jid];
  let txt = (args.length > 1 ? args.slice(1).join(" ") : "") || "";
  let msg = m.quoted ? m.quoted.text : txt;
  let result = await translate(msg, args[0]);
  m.reply(result, false, false, { smlcap: false });
};
handler.help = ["translate"];
handler.tags = ["tools"];
handler.command = /^(tr|translate)$/i;
handler.limit = true; handler.error = 0
export default handler;

async function translate(text, to) {
  return axios
    .get(API("lol", "/api/translate/auto/" + to, { text: text }, "apikey"))
    .then((v) => {
      return v.data.result.translated;
    });
}
