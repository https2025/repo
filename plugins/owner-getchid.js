const handler = async (m, { conn }) => {
  if (!m.quoted) return m.reply('Reply pesan channel-nya saja');

  try {
    let quotedObj = await m.getQuotedObj();

    if (!quotedObj.msg.contextInfo || !quotedObj.msg.contextInfo.forwardedNewsletterMessageInfo) {
      return m.reply('Pesan yang di-reply bukan pesan channel');
    }

    let anu = quotedObj.msg.contextInfo.forwardedNewsletterMessageInfo;
    let tek = `*[ NewsletterId ]*\n\n> *\`Name:\`* ${anu.newsletterName}\n> *\`ID:\`* ${anu.newsletterJid}\n> *\`ServerMessageID:\`* ${anu.serverMessageId}`;

    await conn.sendCopy(m.chat, '', tek, wm, [['Copy Id', anu.newsletterJid]], m);
  } catch (err) {
    console.error(err);
    m.reply('Terjadi kesalahan saat mengambil data channel.');
  }
}

handler.command = handler.help = ['getchid'];
handler.tags = ['owner'];
handler.owner = true;
handler.error = 0;

export default handler;