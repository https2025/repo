/* 
『WARNING』 WATERMARK INI TIDAK BOLEH DI HAPUS
* SCRIPT BY DEXZZ
* NAMA SCRIPT EMILIA-MD
* JANGAN DI HAPUS KONTOL
* FOLLOW SALURAN DEXZZ
https://whatsapp.com/channel/0029ValeNDG0LKZLbAQZNs0i
*/
let handler = async (m) => {
  let user = global.db.data.users[m.sender];
  let time = user.lastmulung + 1800000;

  if (new Date() - user.lastmulung < 1800000)
    return m.reply(
      `Anda sudah lelah untuk mulung\nTunggu selama ${msToTime(time - new Date())} lagi`,
    );

  let botol = Math.floor(Math.random() * 1000);
  let kaleng = Math.floor(Math.random() * 1000);
  let kardus = Math.floor(Math.random() * 1000);
  let gelas = Math.floor(Math.random() * 1000);
  let plastik = Math.floor(Math.random() * 1000);

  user.botol += botol * 1;
  user.kaleng += kaleng * 1;
  user.kardus += kardus * 1;
  user.gelas += gelas * 1;
  user.plastik += plastik * 1;
  user.lastmulung = new Date() * 1;

  m.reply(
    `Selamat kamu mendapatkan : \n+${botol} Botol\n+${kaleng} Kaleng\n+${kardus} Kardus\n+${gelas} Gelas\n+${plastik} Plastik`,
  );
};
handler.help = ["mulung"];
handler.tags = ["rpg"];
handler.command = /^(mulung)$/i;

handler.register = true;
handler.group = true;
handler.rpg = true;

export default handler;

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + " jam " + minutes + " menit " + seconds + " detik";
}
