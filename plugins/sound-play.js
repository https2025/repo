/* 
『WARNING』 WATERMARK INI TIDAK BOLEH DI HAPUS
* SCRIPT BY DEXZZ
* NAMA SCRIPT EMILIA-MD
* JANGAN DI HAPUS KONTOL
* FOLLOW SALURAN DEXZZ
https://whatsapp.com/channel/0029ValeNDG0LKZLbAQZNs0i
*/

import { youtube } from "@xct007/frieren-scraper";
let handler = async (
  m,
  { conn, text, isPrems, isOwner, usedPrefix, command },
) => {
  
  if (!text)
    return m.reply(
      `Masukan query! \n\nContoh: \n${usedPrefix + command} mantra hujan`,
    );
    if (/https/i.test(text)) return m.reply('Contoh mantra hujan')
  let { title, uploaded, duration, views, url, thumbnail } = (
    await youtube.search(text)
  )[0];
  let caption = `
*––––––『 Y T - P L A Y 』––––––*

🎧 *Title:* ${title}
📤 *Published:* ${uploaded}
⏰ *Duration:* ${duration}
👁️ *Views:* ${views}

🔗 *Url:* ${url}

*[ Usage ]*
> *Ketik 1 untuk audio*
> *Ketik 2 untuk video*

> *\`Note:\`* Reply pesan bot dan ketik angka 1 atau 2
`.trim();
  let buttonVideo = {
    display_text: "Video",
    id: `#ytmp4 ${url}`,
  };

  let buttonAudio = {
    display_text: "Audio",
    id: `#ytmp3 ${url}`,
  };

  /*conn.sendButtonImg(
    m.chat,
    thumbnail,
    "",
    caption,
    global.config.watermark,
    [
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify(buttonAudio),
      },
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify(buttonVideo),
      },
    ],
    m,
  );*/
  conn.sendAliasMessage(m.chat, { image: { url: thumbnail }, caption: caption }, [{
    alias: '1',
    response: `.ytmp3 ` + url
  },
  {
    alias: '2',
    response: `.ytmp4 ` + url
  }], m)
};
handler.help = ["play"];
handler.tags = ["sound"];
handler.command = /^play$/i;
handler.limit = false; handler.error = 0
export default handler;