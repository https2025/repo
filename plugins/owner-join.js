let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i;

let handler = async (m, { conn, text, isOwner }) => {
  let [_, code, expired] = text.match(linkRegex) || [];
  if (!code) return m.reply("Link invalid");
  let res = await conn.groupAcceptInvite(code);
  expired = Math.floor(
    Math.min(
      9999,
      Math.max(1, isOwner ? (isNumber(expired) ? parseInt(expired) : 0) : 3),
    ),
  );
  await m.reply(
    `Berhasil join grup ${res}${expired ? ` selama ${expired} hari` : ""}`)
    await conn.reply(res, `Terikamasih sudah Menyewa  ${global.wm}, Aku akan disini selama ${expired} hari`)
  
  let chats = global.db.data.chats[res];
  if (!chats) chats = global.db.data.chats[res] = {};
  var jumlahHari = expired * 1000 * 60 * 60 * 24;
  var now = new Date() * 1;
  if (now < chats.expired) chats.expired += jumlahHari;
  else chats.expired = now + jumlahHari;
};
handler.help = ["ojoin"];
handler.tags = ["owner"];
handler.command = /^ojoin$/i;
handler.owner = true;

export default handler;

const isNumber = (x) => ((x = parseInt(x)), typeof x === "number" && !isNaN(x));

/*
 * @Author: Cifumo
 * @Web: https://rest.cifumo.biz.id
 */

/*let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i;

let handler = async (m, { conn, text, isOwner }) => {
  let [_, code, expired] = text.match(linkRegex) || [];
  if (!code) throw "Link invalid";
  let res = await conn.groupAcceptInvite(code);
  expired = Math.floor(
    Math.min(
      9999,
      Math.max(1, isOwner ? (isNumber(expired) ? parseInt(expired) : 0) : 3),
    ),
  );
  await m.reply(
    `Berhasil join grup ${res}${expired ? ` selama ${expired} hari` : ""}`,
  );
  await conn.reply(res, `Terikamasih sudah Menyewa  ${global.wm}, Aku akan disini selama ${expired}`, null)
  let gcJoinData = global.db.data.bots.gcJoin;
  let groupData = gcJoinData.find(g => g.id === res) || {};
  var jumlahHari = expired * 1000 * 60 * 60 * 24;
  var now = new Date() * 1;
  if (groupData.expired && now < groupData.expired) {
    groupData.expired += jumlahHari;
  } else {
    groupData.expired = now + jumlahHari;
  }
  if (!gcJoinData.includes(groupData)) {
    gcJoinData.push({ id: res, expired: groupData.expired });
  }
};

handler.help = ["ojoin"];
handler.tags = ["owner"];
handler.command = /^ojoin$/i;
handler.owner = true;

export default handler;

const isNumber = (x) => ((x = parseInt(x)), typeof x === "number" && !isNaN(x));*/