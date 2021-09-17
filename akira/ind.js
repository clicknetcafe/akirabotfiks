exports.wait = () => {
	return`*「 WAIT 」 DON'T SPAM*`
}

exports.succes = () => {
	return`*「 SUKSES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.baned = () => {
	return`*LU KE BAN NJIRR LU KEK KONTOL SI*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.err = () => {
	return`Terjadi kesalahan, coba lagi nanti.`
}

exports.errs = () => {
  return`*Error :* Cannot reach the server.`
}

exports.rama = () => {
	return`Features are locked because Ramadhan has come.`
}

exports.noneed = () => {
	return`Jangan tambahkan apapun pada command.`
}

exports.noregis = () => {
	return`*「 SABAR CUY 」*\n\nKetik *${prefix}verify* dulu.`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`yah gagal, coba ulangi beberapa saat lagi`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (prefix, namaUser, umurUser, serialUser, time, sender) => {
	return`*「 SELESAI DAFTAR 」*\n\n┏━➤Nomer\n┗➤wa.me/${sender.split("@")[0]}\n\n┏━➤Waktu Pendaftaran\n┗➤${time}\n\n┏━❉ *SERIAL NUMBER :* ❉━\n┗➤${serialUser}\n\nKetik *${prefix}menu* untuk melihat list command`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 NAIK LEVEL 」*
┏⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Role* : ${role}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Maaf kak ${pushname} limit habis*\nNOTE : untuk mendapatkan limit. Bisa lewat naik level atau *.buylimit*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT USER 」*
sisa limit anda : ${limitCounts}

🍻NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit🍻`
}

exports.satukos = () => {
	return`Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ *「 ATM 」* ━┓\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┗⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.bahasa = () => {
	return`
*List Bahasa :*\n
  *af:* Afrikaans
  *sq:* Albanian
  *ar:* Arabic
  *hy:* Armenian
  *ca:* Catalan
  *zh:* Chinese
  *zh-cn:* Chinese (Mandarin/China)
  *zh-tw:* Chinese (Mandarin/Taiwan)
  *zh-yue:* Chinese (Cantonese)
  *hr:* Croatian
  *cs:* Czech
  *da:* Danish
  *nl:* Dutch
  *en:* English
  *en-au:* English (Australia)
  *en-uk:* English (United Kingdom)
  *en-us:* English (United States)
  *eo:* Esperanto
  *fi:* Finnish
  *fr:* French
  *de:* German
  *el:* Greek
  *ht:* Haitian Creole
  *hi:* Hindi
  *hu:* Hungarian
  *is:* Icelandic
  *id:* Indonesian
  *it:* Italian
  *ja:* Japanese
  *ko:* Korean
  *la:* Latin
  *lv:* Latvian
  *mk:* Macedonian
  *no:* Norwegian
  *pl:* Polish
  *pt:* Portuguese
  *pt-br:* Portuguese (Brazil)
  *ro:* Romanian
  *ru:* Russian
  *sr:* Serbian
  *sk:* Slovak
  *es:* Spanish
  *es-es:* Spanish (Spain)
  *es-us:* Spanish (United States)
  *sw:* Swahili
  *sv:* Swedish
  *ta:* Tamil
  *th:* Thai
  *tr:* Turkish
  *vi:* Vietnamese
  *cy:* Welsh`
}