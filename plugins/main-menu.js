/* 
『WARNING』 WATERMARK INI TIDAK BOLEH DI HAPUS
* SCRIPT BY DEXZZ
* CODE BY DEXZZ
* JANGAN DI HAPUS KONTOL
* FOLLOW SALURAN DEXZZ
https://whatsapp.com/channel/0029ValeNDG0LKZLbAQZNs0i
*/
import fs from 'fs'
const handler = async (m, { conn }) => {
    const mentionedJid = m.mentionedJid?.[0] ?? (m.fromMe ? conn.user.jid : m.sender);
let fitur = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;    
    let tek = `> Hi @${mentionedJid.split('@')[0]}
> I am an automated system (WhatsApp Bot) that can help to do something, search and get data / information only through WhatsApp.

> ◎ *Library* : Baileys
> ◎ *TotalFitur* : ${fitur.length}
> ◎ *Version* : V1
> ◎ *Rest API* : https://api.xenzmyapi.my.id
> ◎ *Source* : https://github.com/XenzSenseiPedo/MiyakoTsukiyuki
> If you find an error or want to upgrade premium plan contact the owner.
> ›1. .aimenu
> ›2. .animemenu
> ›3. .downloadmenu
> ›4. .funmenu
> ›5. .gamemenu
> ›6. .groupmenu
> ›7. .infomenu
> ›8. .internetmenu
> ›9. .islamicmenu
> ›10. .mainmenu
> ›11. .makermenu
> ›12. .ownermenu
> ›13. .menuprem
> ›14. .quotesmenu
> ›15. .stikermenu
> ›16. .rpgmenu
> ›17. .toolsmenu`;

    const loadingStickerUrl = 'https://files.catbox.moe/l0d4s0.webp';
    const thumbnailUrl = 'https://pomf2.lain.la/f/qblsmgwh.jpg';

    try {
        await conn.sendFile(m.chat, loadingStickerUrl, 'loading_sticker.webp', '', m, { sendMediaAsSticker: true });

        await conn.sendAliasMessage(m.chat, {
            image: { url: thumbnailUrl },
            caption: tek,
            mentions: [mentionedJid] 
        }, [
            {
                alias: '1',
                response: '.aimenu'
            },
            {
                alias: '2',
                response: '.animemenu'
            },
            {
                alias: '3',
                response: '.downloadmenu'
            },
            {
                alias: '4',
                response: '.funmenu'
            },
            {
                alias: '5',
                response: '.gamemenu'
            },
            {
                alias: '6',
                response: '.groupmenu'
            },
            {
                alias: '7',
                response: '.infomenu'
            },
            {
                alias: '8',
                response: '.internetmenu'
            },
            {
                alias: '9',
                response: '.islamicmenu'
            },
            {
                alias: '10',
                response: '.mainmenu'
            },
            {
                alias: '11',
                response: '.makermenu'
            },
            {
                alias: '12',
                response: '.ownermenu'
            },
            {
                alias: '13',
                response: '.menuprem'
            },
            {
                alias: '14',
                response: '.quotesmenu'
            },
            {
                alias: '15',
                response: '.stikermenu'
            },
            {
                alias: '16',
                response: '.rpgmenu'
            },
            {
                alias: '17',
                response: '.toolsmenu'
            }
        ], m);

        await conn.sendFile(m.chat, 'https://files.catbox.moe/m09kgf.opus', 'tes.mp3', '', m, true);
    } catch (error) {
        console.error('Error sending messages:', error);
        await conn.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat mengirim pesan.' }, { quoted: m });
    }
};

handler.command = ['menu', 'help'];
handler.help = ['menu'];
handler.tags = ['main'];

export default handler;