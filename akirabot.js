//Credit By Akira
//LolHuman

//wa connection
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions, 
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const FormData = require('form-data')
const request = require('request')
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./akiraganz/color')
const { animesaran } = require('./akiraganz/animesaran')
const { animesaran2 } = require('./akiraganz/animesaran2')
//const { help } = require('./akiraganz/help')
const { rules } = require('./akiraganz/rules')
const { menus } = require('./akiraganz/menus')
const { menuanime } = require('./akiraganz/menuanime')
const { menuephoto } = require('./akiraganz/menuephoto')
const { menunsfw } = require('./akiraganz/menunsfw')
const { menuoxy } = require('./akiraganz/menuoxy')
const { menutextpro } = require('./akiraganz/menutextpro')
const { menueditor } = require('./akiraganz/menueditor')
const { menugenshin } = require('./akiraganz/menugenshin')
const { listsurah } = require('./akiraganz/listsurah')
const { donasi } = require('./akiraganz/donasi')
const { fetchJson } = require('./akiraganz/fetcher')
const { recognize } = require('./akiraganz/ocr')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./akiraganz/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const imgbb = require('imgbb-uploader')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./akira')

//apikey
const lol = 'cdbe77dbd7e0e2308f811cb7'

//Ubah
const namaowner = 'Z E R E N I T Y'
const namabot = 'BunnyWalker'

//kontak
const vcard = 'BEGIN:VCARD\n'  //Jangan diganti,Ntar error
            + 'VERSION:3.0\n'  //Jangan diganti,Ntar error
            + 'FN:Z E R E N I T Y\n'  // Ganti jadi namamu
            + 'ORG:Penganu BOT;\n'  // Ganti jadi namamu/Botmu
            + 'TEL;type=CELL;type=VOICE;waid=6282337245566:+62 823-3724-5566\n'  // Ganti jadi nomormu, tapi jangan ubah polanya
            + 'END:VCARD' // Jangan diganti,Ntar Error
            
//settings            
prefix = '.'
blocked = []   
limitawal = '40' //Terserah Mo Ganti apa kgk
memberlimit = 1 //Terserah Mo Ganti apa kgk
cr = '*BunnyWalker Studio*'
vr = '*BunnyWalker*'

namo = 'BunnyWalker'
ator = 'BOT'
nano = '1122@s.whatsapp.net'

//owner number
const ownerNumber = ["6282337245566@s.whatsapp.net"]  //Ganti Jadi Nomormu
const bowoNumber = ["3197005033513@s.whatsapp.net"]

//file json
const _truth = JSON.parse(fs.readFileSync('./database/truth.json'));
const _dare = JSON.parse(fs.readFileSync('./database/dare.json'));
const tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
const akinator = JSON.parse(fs.readFileSync('./database/akinator.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const isBanned = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const main = JSON.parse(fs.readFileSync('./database/group/main.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'))

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//function
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        
        const getLimit = (sender) => {
        	let position = false
              Object.keys(limit).forEach ((i) => {
              	if (limit[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
            const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }

        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

function addMetadata(packname, author) {    
    if (!packname) packname = 'WABot'; if (!author) author = 'Bot'; 
    author = author.replace(/[^a-zA-Z0-9]/g, '');   
    let name = `${author}_${packname}`
    if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
    const json = {  
        "sticker-pack-name": packname,
        "sticker-pack-publisher": author,
    }
    const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])  
    const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]  

    let len = JSON.stringify(json).length   
    let last    

    if (len > 256) {    
        len = len - 256 
        bytes.unshift(0x01) 
    } else {    
        bytes.unshift(0x00) 
    }   

    if (len < 16) { 
        last = len.toString(16) 
        last = "0" + len    
    } else {    
        last = len.toString(16) 
    }   

    const buf2 = Buffer.from(last, "hex")   
    const buf3 = Buffer.from(bytes) 
    const buf4 = Buffer.from(JSON.stringify(json))  

    const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])  

    fs.writeFile(`./${name}.exif`, buffer, (err) => {   
        return `./${name}.exif` 
    })  

}
/********** FUNCTION ***************/

const akira = new WAConnection()
//WWEB
akira.version = [2,2119,6] //Fix Bug
   akira.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','aqua'),color('PoKO','white'),color(']','aqua'),color('SQAN QR CODE DI WHATSAPP WEB!!','aqua'),color('You','white'),color('Tube','red'),color('PoKO','yellow'))
}) 

akira.on('credentials-updated', () => {
	const authInfo = akira.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./akirabot.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./akirabot.json') && akira.loadAuthInfo('./akirabot.json')
akira.connect();


akira.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await akira.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
					pp_user = 'https://i.ibb.co/2ZhLgWQ/tetot.jpg'
				teks = `
ʜᴀʟʟᴏ
@${num.split('@')[0]}
👋\nꜱᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ɢʀᴏᴜᴘ 
*${mdata.subject}*
┏━━━━━━━━━━━━━━━
┃────「 *_ɪɴᴛʀᴏ_* 」────
┃━━━━━━━━━━━━━━━
┠⊷️ *ɴᴀᴍᴀ* :
┠⊷️ *ᴜᴍᴜʀ* :
┠⊷️ *ɢᴇɴᴅᴇʀ* :
┠⊷️ *ᴀꜱᴀʟ ᴋᴏᴛᴀ* :
┗━━━━━━━━━━━━━━━`
				let buff = await getBuffer(pp_user)
				akira.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
					pp_user = 'https://i.ibb.co/2MJfpv0/Sayonara-no-Asa.jpg'
				teks = `
Menyerah pada rindu karena tidak mungkin mengembalikan waktu.
*Sayonara 👋🏻* @${num.split('@')[0]} 🍻`
				let buff = await getBuffer(pp_user)
				akira.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	akira.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	akira.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
            const tescuk2 = ["6282337245566@s.whatsapp.net","6285845982858@s.whatsapp.net","6285719022825@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = akira.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = akira.contacts[sender] != undefined ? akira.contacts[sender].vname || akira.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await akira.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
            const isMain = isGroup ? main.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
            const isAntiVirtex= isGroup ? antivirtex.includes(from) : false
			const isBanned = ban.includes(sender)
			const isOwner = ownerNumber.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				akira.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				akira.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? akira.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : akira.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    akira.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			akira.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    akira.sendMessage(from, audio, mp3, {quoted:mek})
		    }
	        /*****************END SCURITY FEATURE ********/
	//Role Bot
	const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Legends 忍'
        } else if (levelRole <= 2000) {
            role = 'Legends 忍'
        } else if (levelRole <= 3000) {
            role = 'Legends 忍'
        } else if (levelRole <= 4000) {
            role = 'Legends 忍'
        } else if (levelRole <= 5000) {
            role = 'Legends 忍'
        } else if (levelRole <= 6000) {
            role = 'Legends 忍'
        } else if (levelRole <= 7000) {
            role = 'Legends 忍'
        } else if (levelRole <= 8000) {
            role = 'Legends 忍'
        } else if (levelRole <= 9000) {
            role = 'Legends 忍'
        } else if (levelRole <= 10000) {
            role = 'Legends 忍'
           
           var prema = 'Free'
			if (!isAdmin) {
				prema = 'Adminban'
			}
			if (!isPremium) {
				prema = 'Premium'
			} 
			if (!isOwner) {
				prema = 'Owner'
			}
	}
	
	  //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
        
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return akira.sendMessage(from,`Limit request anda sudah habis.\n\n_beli limit dengan cara_ *.buylimit*`, text,{ quoted: mek})
                            akira.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        akira.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    akira.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
      
            //function balance
            if (isRegistered && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
          
// ANTI LINK GRUP
                if (mesejAnti.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Admin Grup Mah Bebas:D')
		        akira.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes(".izinkak")) return reply("Iya kak jangan spam ya")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf kak ${sender.split("@")[0]} Grup ini anti link group, siap siap kamu di kick`)
		        setTimeout( () => {
			        akira.groupRemove(from, [kic]).catch((e)=>{reply(`*${namabot} HARUS JADI ADMINâ—*`)})
		        }, 3000)
		        setTimeout( () => {
			        akira.updatePresence(from, Presence.composing)
			        reply("ShenraTensei 🌪️")
		        }, 2000)
		        setTimeout( () => {
			        akira.updatePresence(from, Presence.composing)
			        reply("Isi Cakraa ☁️")
		        }, 1000)
		        setTimeout( () => {
			        akira.updatePresence(from, Presence.composing)
			        reply("Ready?...")
		        }, 0)
		  }
		  
//ANTI VIRTEX 
        if (mesejAnti.includes("๒๒") || mesejAnti.includes("🧙‍♂️𝐀𝐥𝐚𝐤𝐚𝐳𝐚𝐦🔮") || mesejAnti.includes("𝐗-𝐕𝐢𝐫𝐮𝐬") || mesejAnti.includes("*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ") || mesejAnti.includes("𝐂𝐎𝐋𝐎𝐒𝐒𝐀𝐋 𝐓𝐈𝐓𝐀𝐍") || mesejAnti.includes("♚㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ㜸ཽཽཽ͢͢͢♚")){
		if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return reply('ADMIN GRUP MAH BEBAS 😁')
		akira.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`VIRTEX TERDETEKSI!!! MAAF ${sender.split("@")[0]} ANDA AKAN DI KICK DARI GRUP DALAM WAKTU 5 DETIK`)
		setTimeout( () => {
			akira.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			akira.updatePresence(from, Presence.composing)
			reply("ShenraTensei🌪️")
		}, 4000)
		setTimeout( () => {
			akira.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 3000)
		setTimeout( () => {
			akira.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 2000)
		setTimeout( () => {
			akira.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 1000)
		setTimeout( () => {
			akira.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 0)
	}
	
	
		  if (isGroup) {
					try {
						const getmemex = groupMembers.length	
					    if (getmemex <= memberlimit) {
						reply(`hmmm...`)
						setTimeout( () => {
 	                           akira.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								akira.updatePresence(from, Presence.composing)
								reply("byee")
							}, 4000)
								setTimeout( () => {
								akira.updatePresence(from, Presence.composing)
								reply("awokaowkaowk")
							}, 3000)
								setTimeout( () => {
								akira.updatePresence(from, Presence.composing)
								reply("semoga emak lu sehat")
							}, 2000)
								setTimeout( () => {
								akira.updatePresence(from, Presence.composing)
								reply("gw keluar ye")
							}, 1000)
								setTimeout( () => {
								akira.updatePresence(from, Presence.composing)
								reply(`sorry ngab member minimal ${memberlimit}`)
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }
 
        if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    return reply("JAGA UCAPAN DONG!! 😠")
                        .then(() => akira.groupRemove(from, sender))
                        .then(() => {
                            akira.sendMessage(from, `*「 ANTI BADWORD 」*\nKamu dikick karena berkata kasar!`, text ,{quoted: mek})
                        }).catch(() => akira.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
                } else {
                    return reply( "Tolong Jaga Ucapan Min 😇")
                }
            }
        }

           		  //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
            const isMediaStik = (type === 'stickerMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;32mPRIVATE\x1b[1;37m]=', color([command]), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;31mLOL\x1b[1;37m]=', ('[\x1b[1;31mEMROR\x1b[1;37m]'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;32mGROUP\x1b[1;37m]=', color([command]), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;31mLOL\x1b[1;37m]=', ('[\x1b[1;31mEMROR\x1b[1;37m]'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
            var kuis = false

			// Tebak Gambar
            /*if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd && budy.match(/[1-9]{1}/)) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Jawaban Anda Benar!")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Anda Salah!")
                }
            }*/

            // Akinator
            // Premium / VIP apikey only
            if (akinator.hasOwnProperty(sender.split('@')[0]) && !isCmd && ["0", "1", "2", "3", "4", "5"].includes(body)) {
                kuis = true
                var { server, frontaddr, session, signature, question, step } = akinator[sender.split('@')[0]]
                if (step == "0" && budy == "5") return reply("Maaf Anda telah mencapai pertanyaan pertama")
                var ini_url = `https://api.lolhuman.xyz/api/akinator/answer?apikey=${lol}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
                var get_result = await fetchJson(ini_url)
                var get_result = get_result.result
                if (get_result.hasOwnProperty("name")) {
                    var ini_name = get_result.name
                    var description = get_result.description
                    var ini_image = get_result.image
                    var ini_image = await getBuffer(ini_image)
                    ini_txt = `${ini_name} - ${description}\n\n`
                    ini_txt += "Sekian dan terima kasih"
                    await akira.sendMessage(from, ini_image, image, { quoted: mek, caption: ini_txt }).then(() => {
                        delete akinator[sender.split('@')[0]]
                        fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
                    })
                    return
                }
                var { question, _, step } = get_result
                ini_txt = `${question}\n\n`
                ini_txt += "0 - Ya\n"
                ini_txt += "1 - Tidak\n"
                ini_txt += "2 - Saya Tidak Tau\n"
                ini_txt += "3 - Mungkin\n"
                ini_txt += "4 - Mungkin Tidak\n"
                ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
                if (budy == "5") {
                    var ini_url = `https://api.lolhuman.xyz/api/akinator/back?apikey=${lol}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
                    var get_result = await fetchJson(ini_url)
                    var get_result = get_result.result
                    var { question, _, step } = get_result
                    ini_txt = `${question}\n\n`
                    ini_txt += "0 - Ya\n"
                    ini_txt += "1 - Tidak\n"
                    ini_txt += "2 - Saya Tidak Tau\n"
                    ini_txt += "3 - Mungkin\n"
                    ini_txt += "4 - Mungkin Tidak"
                    ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
                }
                await akira.sendMessage(from, ini_txt, text, { quoted: mek }).then(() => {
                    const data_ = akinator[sender.split('@')[0]]
                    data_["question"] = question
                    data_["step"] = step
                    akinator[sender.split('@')[0]] = data_
                    fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
                })
            }

            switch(command) {
                // islami
                case 'listsurah':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lol}`)
                        if (get_result.status == '200') {
                            get_result = get_result.result
                            ini_txt = '*List Surah :*\n\n'
                            for (var x in get_result) {
                                ini_txt += `${x}. ${get_result[x]}\n`
                            }
                            reply(ini_txt)
                            await limitAdd(sender)
                        } else {
                            reply(ind.err())
                        }
                    } catch {
                        reply(ind.errs())
                    }
                    break
                case 'alquran':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (args.length < 1) return reply(`Example: *${prefix + command} 18* or *${prefix + command} 18/10* or *${prefix + command} 18/1-10*`)
                    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lol}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    if (quran.status == '200') {
                        ayat = result.ayat
                        ini_txt = `*QS. ${result.surah} : 1-${ayat.length}*\n\n`
                        for (var x of ayat) {
                            arab = x.arab
                            nomor = x.ayat
                            latin = x.latin
                            indo = x.indonesia
                            ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                        }
                        ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                        ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                        ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'alquranaudio':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lol}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                        await limitAdd(sender)
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'asmaulhusna':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `*No : ${get_result.index}*\n\n`
                        ini_txt += `Latin: ${get_result.latin}\n`
                        ini_txt += `Arab : *${get_result.ar}*\n\n`
                        ini_txt += `Indonesia : ${get_result.id}\n`
                        ini_txt += `English : ${get_result.en}`
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'kisahnabi':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    try {
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lol}`)
                        if (get_result.status == '200') {
                            get_result = get_result.result
                            ini_txt = `*Nama : ${get_result.name}*\n\n`
                            ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                            ini_txt += `Umur : ${get_result.age}\n`
                            ini_txt += `Tempat : ${get_result.place}\n\n`
                            ini_txt += `Story : \n${get_result.story}`
                            reply(ini_txt)
                            await limitAdd(sender)                        
                        } else {
                            reply(get_result.message)
                        }
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'jadwalsholat':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `*Wilayah : ${get_result.wilayah}*\n\n`
                        ini_txt += `Tanggal : ${get_result.tanggal}\n\n`
                        ini_txt += `Sahur : ${get_result.sahur}\n`
                        ini_txt += `Imsak : ${get_result.imsak}\n`
                        ini_txt += `Subuh : ${get_result.subuh}\n`
                        ini_txt += `Terbit : ${get_result.terbit}\n`
                        ini_txt += `Dhuha : ${get_result.dhuha}\n`
                        ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                        ini_txt += `Ashar : ${get_result.ashar}\n`
                        ini_txt += `Maghrib : ${get_result.imsak}\n`
                        ini_txt += `Isya : ${get_result.isya}`
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break

                    // Movie & Story
                case 'lk21':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${lol}&query=${query}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `*Title : ${get_result.title}*\n\n`
                        ini_txt += `Link Download : ${get_result.link_dl}\n\n`
                        ini_txt += `*Genre :* ${get_result.genre}\n`
                        ini_txt += `*Views :* ${get_result.views}\n`
                        ini_txt += `*Duration :* ${get_result.duration}\n`
                        ini_txt += `*Tahun :* ${get_result.tahun}\n`
                        ini_txt += `*Rating : ${get_result.rating}*\n\n`
                        ini_txt += `*Desc :*\n${get_result.desc}\n\n`
                        ini_txt += `*Actors :*\n${get_result.actors.join(", ")}\n\n`
                        ini_txt += `Location : ${get_result.location}\n`
                        ini_txt += `Date Release : ${get_result.date_release}\n`
                        ini_txt += `Language : ${get_result.language}\n`
                        
                        thumbnail = await getBuffer(get_result.thumbnail)
                        await akira.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                        await limitAdd(sender)
                    } else {
                        try {
                            reply(get_result.message)
                        } catch {
                            reply(ind.err())
                        }
                    }
                    break
                case 'drakorongoing':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = "*Ongoing Drakor :*\n\n"
                        for (var x of get_result) {
                            ini_txt += `*${x.title}*\n`
                            ini_txt += `Link : ${x.link}\n`
                            ini_txt += `Thumbnail : ${x.thumbnail}\n`
                            ini_txt += `Year : ${x.year}\n`
                            ini_txt += `Total Episode : ${x.total_episode}\n`
                            ini_txt += `Genre : ${x.genre.join(", ")}\n`
                            ini_txt += `───────────────────\n\n`
                        }
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }                    
                    break
                case 'wattpad':
                case 'watpad':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    if (!q.includes('wattpad.com')) return reply('Bukan situs wattpad deh kayaknya itu sob')
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=${lol}&url=${ini_url}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `*${get_result.title}*\n\n`
                        ini_txt += `Rating : ${get_result.rating}\n`
                        ini_txt += `Motify date : ${get_result.modifyDate}\n`
                        ini_txt += `Create date: ${get_result.createDate}\n`
                        ini_txt += `Word : ${get_result.word}\n`
                        ini_txt += `Comment : ${get_result.comment}\n`
                        ini_txt += `Vote : ${get_result.vote}\n`
                        ini_txt += `Reader : ${get_result.reader}\n`
                        ini_txt += `Pages : ${get_result.pages}\n\n`
                        ini_txt += `*Description :*\n${get_result.desc}\n\n`
                        ini_txt += `*Story :*\n${get_result.story}`
                        thumbnail = await getBuffer(get_result.photo)
                        await akira.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'wattpadsearch':
                case 'watpadsearch':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${lol}&query=${query}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = "*Wattpad Seach :*\n\n"
                        for (var x of get_result) {
                            ini_txt += `Title : *${x.title}*\n`
                            ini_txt += `Url : ${x.url}\n`
                            ini_txt += `Part : ${x.parts}\n`
                            ini_txt += `Motify date : ${x.modifyDate}\n`
                            ini_txt += `Create date: ${x.createDate}\n`
                            ini_txt += `Coment count: ${x.commentCount}\n`
                            ini_txt += `───────────────────\n\n`
                        }
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'cerpen':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `*Title : ${get_result.title}*\n`
                        ini_txt += `Creator : ${get_result.creator}\n\n`
                        ini_txt += `*Story :*\n${get_result.cerpen.replace("Cerpen Karangan", "\nCerpen Karangan")}`
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'ceritahoror':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `*Title : ${get_result.title}*\n\n`
                        ini_txt += `*Desc :* ${get_result.desc}\n\n`
                        ini_txt += `*Story :*\n${get_result.story}\n`
                        thumbnail = await getBuffer(get_result.thumbnail)
                        await akira.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break

                    // Searching
                case 'gimage':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${lol}&query=${query}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'gimage2':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gimage2?apikey=${lol}&query=${query}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        for (var x = 0; x <= 5; x++) {
                            var ini_buffer = await getBuffer(get_result[x])
                            await akira.sendMessage(from, ini_buffer, image)
                        }
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'konachan':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (body.slice(10).includes(' ')) return reply(`_(query pake underscore sob)_\n\nContoh: *${prefix + command} azur_lane*`)
                    if (args.length == 0) return reply(`Contoh: *${prefix + command} azur_lane*\n_(pake underscore, jangan spasi)_`)
                    query = args.join(" ")
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/konachan?apikey=${lol}&query=${query}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply('image not found.')
                    }
                    break
                case 'wallpapersearch':
                case 'wpsearch':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${lol}&query=${query}`)
                    if (get_result.status == '200') {
                        ini_buffer = await getBuffer(get_result.result)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)                        
                    } else {
                        try {
                            reply('image not found.')
                        } catch {
                            reply(ind.err())
                        }
                    }
                    break
                case 'wallpapersearch2':
                case 'wpsearch2':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper2?apikey=${lol}&query=${query}`)
                    if (get_result.status == '200') {
                        ini_buffer = await getBuffer(get_result.result)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)
                    } else {
                        try {
                            reply('image not found.')
                        } catch {
                            reply(ind.err())
                        }
                    }
                    break
                case 'playstore':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${lol}&query=${query}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = '*Play Store Search :*\n\n'
                        for (var x of get_result) {
                            ini_txt += `App : *${x.title}*\n`
                            ini_txt += `ID : ${x.appId}\n`
                            ini_txt += `Developer : ${x.developer}\n`
                            ini_txt += `Link : ${x.url}\n`
                            ini_txt += `Price : ${x.priceText}\n`
                            ini_txt += `Price : ${x.price}\n`
                            ini_txt += `───────────────────\n\n`
                        }
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'shopee':
                case 'shoope':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=${lol}&query=${query}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = '*Shopee Search :*\n\n'
                        for (var x of get_result) {
                            ini_txt += `Name : *${x.name}*\n`
                            ini_txt += `Terjual : ${x.sold}\n`
                            ini_txt += `Stock : ${x.stock}\n`
                            ini_txt += `Lokasi : ${x.shop_loc}\n`
                            ini_txt += `Link : ${x.link_produk}\n`
                            ini_txt += `───────────────────\n\n`
                        }
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'google':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${lol}&query=${query}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = '*Google Search :*\n\n'
                        for (var x of get_result) {
                            ini_txt += `Title : ${x.title}\n`
                            ini_txt += `Link : ${x.link}\n`
                            ini_txt += `Desc : ${x.desc}\n`
                            ini_txt += `───────────────────\n\n`
                        }
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'stickerwa':
                case 'stikerwa':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lol}&query=${query}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result[0].stickers
                        get_result = get_result.slice(0, 8)
                        for (var x of get_result) {
                            ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lol}&img=${x}`)
                            await akira.sendMessage(from, ini_buffer, sticker)
                        }
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break

                    // Random Text //
                case 'quotes':
                case 'quote':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lol}`)
                    if (quotes.status == '200') {
                        quotes = quotes.result
                        author = quotes.by
                        quotes = quotes.quote
                        reply(`_${quotes}_\n\n*― ${author}*`)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'quotesanime':
                case 'quotesnime':
                case 'quotenime':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lol}`)
                    if (quotes.status == '200') {
                        quotes = quotes.result
                        quote = quotes.quote
                        char = quotes.character
                        anime = quotes.anime
                        episode = quotes.episode
                        reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'quotesdilan':
                case 'quotedilan':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lol}`)
                    if (quotedilan.status == '200') {
                        reply(quotedilan.result)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'quotesimage':
                case 'quoteimage':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/quotesimage?apikey=${lol}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, get_result, image, { quotes: mek })
                        await limitAdd(sender)
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lol}`)
                    if (get_result.status == '200') {
                        reply(get_result.result)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'randomnama':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${lol}`)
                    if (anu.status == '200') {
                        reply(anu.result)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break

                    // Information //
                case 'heroml':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
                    hero = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/heroml/${hero}?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `*Name : ${get_result.hero_name}*\n`
                        ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n\n`
                        ini_txt += `*Role : ${get_result.detail.role}*\n\n`
                        ini_txt += `Specialty : ${get_result.detail.specialty}\n`
                        ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
                        ini_txt += `Release : ${get_result.detail.release_date}\n\n`
                        ini_txt += `*Details :*\n`
                        ini_txt += `Movement Speed : ${get_result.attr.movement_speed}\n`
                        ini_txt += `Physical Attack : ${get_result.attr.physical_attack}\n`
                        ini_txt += `Magic Power : ${get_result.attr.magic_power}\n`
                        ini_txt += `Attack Speed : ${get_result.attr.attack_speed}\n`
                        ini_txt += `Physical Defense : ${get_result.attr.physical_defense}\n`
                        ini_txt += `Magic Defense : ${get_result.attr.magic_defense}\n`
                        ini_txt += `Critical Rate : ${get_result.attr.basic_atk_crit_rate}\n`
                        ini_txt += `Hp : ${get_result.attr.hp}\n`
                        ini_txt += `Mana : ${get_result.attr.mana}\n`
                        ini_txt += `Ability Crit. Rate : ${get_result.attr.ability_crit_rate}\n`
                        ini_txt += `HP Regen : ${get_result.attr.hp_regen}\n`
                        ini_txt += `Mana Regen : ${get_result.attr.mana_regen}\n`
                        ini_icon = await getBuffer(get_result.icon)
                        await akira.sendMessage(from, ini_icon, image, { quoted: mek, caption: ini_txt })
                        await limitAdd(sender)
                    } else {
                        try {
                            reply(get_result.message)
                        } catch {
                            reply(ind.err())
                        }
                    }
                    break
                case 'mlstalk':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 84830127/2169`)
                    if (!q.includes('/')) return reply(ind.wrongf())
                    ini_nama = args.join(" ").split("/")
                    txt1 = ini_nama[0].trim()
                    txt2 = ini_nama[1].trim()
                    if (isNaN(txt1) || txt1.length == 0) return reply('Invalid ID')
                    if (isNaN(txt2) || txt2.length == 0) return reply('Invalid Server')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${txt1}/${txt2}?apikey=${lol}`)
                    if (get_result.status == '200') {
                        reply(`Nickname :\n*${get_result.result}*`)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                /*case 'genshin':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} jean`)
                    hero = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/genshin/${hero}?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `*Name : ${get_result.title}*\n\n`
                        ini_txt += `*Intro :* ${get_result.intro}\n\n`
                        ini_txt += `_Voice Actors :_\n`
                        ini_txt += `───────────────────\n`
                        ini_txt += `[JP] *${get_result.cv[0].name}*\n`
                        ini_txt += `[EN] *${get_result.cv[1].name}*\n`
                        ini_icon = await getBuffer(get_result.cover1)
                        await akira.sendMessage(from, ini_icon, image, { quoted: mek, caption: ini_txt })
                        ini_voice = await getBuffer(get_result.cv[0].audio[0])
                        await akira.sendMessage(from, ini_voice, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                        await limitAdd(sender)
                    } else {
                        try {
                            reply(get_result.message)
                        } catch {
                            reply(ind.err())
                        }
                    }
                    break*/
                case 'superhero':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} batman`)
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/superhero?apikey=${lol}&query=${body.slice(11)}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        txt = `*Full Name : ${get_result.biography["full-name"]}* - ${get_result.biography["alter-egos"]}\n\n`
                        txt += `*Series :* ${get_result.biography.aliases[0]}, ${get_result.biography.aliases[1]}, ,${get_result.biography.aliases[2]}, ${get_result.biography.aliases[3]}, ${get_result.biography.aliases[4]}\n\n`
                        txt += `Place of Birth : ${get_result.biography["place-of-birth"]}\n`
                        txt += `First Appearance : ${get_result.biography["first-appearance"]}\n`
                        txt += `publisher : ${get_result.biography.publisher}\n`
                        txt += `Rating : ${get_result.biography.alignment}\n`
                        txt += `Gender : ${get_result.appearance.gender}\n`
                        txt += `Race : ${get_result.appearance.race}\n\n`
                        txt += `Height : ${get_result.appearance.height}\n`
                        txt += `Eye Color : ${get_result.appearance["eye-color"]}\n`
                        txt += `Hair Color : ${get_result.appearance["hair-color"]}\n`
                        txt += `*Work :*\n- ${get_result.work.occupation}\n- ${get_result.work.base}\n\n*Connections :*\n*Affiliation :* ${get_result.connections["group-affiliation"]}\n*Relatives :* ${get_result.connections.relatives}`
                        buffer = await getBuffer(get_result.image.url)
                        akira.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
                        await limitAdd(sender)
                    } else {
                        try {
                            reply(get_result.message)
                        } catch {
                            reply(ind.err())
                        }
                    }
                    break
                case 'osuplayer':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Usage : ${prefix + command} username\n\nExample: *${prefix + command} xxhonorxx*`)
                    try {
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/osuname/${body.slice(11)}?apikey=${lol}`)
                        if (get_result.status == '200') {
                            get_result = get_result.result
                            txt = `User ID : ${get_result.user_id} - ${get_result.country}\n`
                            txt += `Username : *${get_result.username}*\n`
                            txt += `Join Date : ${get_result.join_date}\n\n`
                            txt += `count300 : ${get_result.count300}\n`
                            txt += `count100 : ${get_result.count100}\n`
                            txt += `count50 : ${get_result.count50}\n\n`
                            txt += `playcount : ${get_result.playcount}\n`
                            txt += `Ranked Score : ${get_result.ranked_score}\n\n`
                            txt += `Total Score : ${get_result.total_score}\n`
                            txt += `PP Rank : ${get_result.pp_rank}\n`
                            txt += `Level : *${get_result.level}*\n`
                            txt += `PP Raw : *${get_result.pp_raw}*\n`
                            txt += `Accuracy : *${get_result.accuracy}*\n\n`
                            txt += `count_rank_ss : *${get_result.count_rank_ss}*\n`
                            txt += `count_rank_ssh : *${get_result.count_rank_ssh}*\n`
                            txt += `count_rank_s : *${get_result.count_rank_s}*\n`
                            txt += `count_rank_sh : *${get_result.count_rank_sh}*\n`
                            txt += `count_rank_a : *${get_result.count_rank_a}*\n`
                            txt += `total_sec_played : *${get_result.total_seconds_played}*\n`
                            txt += `pp_country_rank : *${get_result.pp_country_rank}*\n`
                            reply(txt)
                            await limitAdd(sender)
                        } else {
                            reply('Username not found.')
                        }
                    } catch {
                        reply(ind.errs())
                    }
                    break
                case 'qrreader':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await akira.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/read-qr?apikey=${lol}`, {...options })
                        if (get_result.status == '200') {
                            fs.unlinkSync(filePath)
                            reply("*Result :* " + get_result.result)
                            await limitAdd(sender)
                        } else {
                            reply(ind.err())
                        }
                    } else {
                        reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'wikipedia':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${lol}&query=${query}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        reply(get_result)
                        await limitAdd(sender)
                    } else {
                        try {
                            reply(get_result.message)
                        } catch {
                            reply(ind.err())
                        }
                    }
                    break
                case 'translate':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Penggunaan: ${prefix + command} kode_negara|teks\n\nContoh: *${prefix + command} en|Tahu Bacem*`)
                    if (!q.includes('|')) return reply(ind.wrongf())
                    ini_nama = args.join(" ").split("|")
                    kode_negara = ini_nama[0].trim()
                    ini_txt = ini_nama[1].trim()
                    if (ini_txt.length == 0) return reply('teks yang pengen ditranslate mana cuy')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lol}&text=${ini_txt}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        init_txt = `From *${get_result.from}* >> to *${get_result.to}*\n\n`
                        init_txt += `*Original :* ${get_result.original}\n`
                        init_txt += `*Translated :* ${get_result.translated}\n\n`
                        init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                        reply(init_txt)
                        await limitAdd(sender)
                    } else {
                        try {
                            reply(`*kode bahasa salah / teks gak valid*\n\nketik *${prefix}kodebahasa* untuk melihat list`)
                        } catch {
                            reply(ind.err())
                        }
                    }
                    break
                case 'brainly':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Soekarno adalah`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=${lol}&query=${query}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = "*Result :*\n\n"
                        for (var x of get_result) {
                            ini_txt += `${x.title}\n`
                            ini_txt += `${x.url}\n`
                            ini_txt += `───────────────────\n\n`
                        }
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'jadwaltv':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
                    channel = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `*Jadwal TV ${channel.toUpperCase()}*\n\n`
                        for (var x in get_result) {
                            ini_txt += `${x} - ${get_result[x]}\n`
                        }
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        try {
                            reply(get_result.message)
                        } catch {
                            reply(ind.err())
                        }
                    }
                    break
                case 'jadwaltvnow':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `*Jadwal TV Now :*\n\n`
                        for (var x in get_result) {
                            ini_txt += `${x.toUpperCase()}${get_result[x]}\n───────────────────\n\n`
                        }
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'newsinfo':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = "*Result :*\n\n"
                        for (var x of get_result) {
                            ini_txt += `*Title :* ${x.title}\n`
                            ini_txt += `*Author :* ${x.author}\n`
                            ini_txt += `*Source :* ${x.source.name}\n`
                            ini_txt += `*Url :* ${x.url}\n`
                            ini_txt += `*Published :* ${x.publishedAt}\n`
                            ini_txt += `*Description :* ${x.description}\n`
                            ini_txt += `───────────────────\n\n`
                        }
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'cnnindonesia':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = "*Result :*\n\n"
                        for (var x of get_result) {
                            ini_txt += `*Judul :* ${x.judul}\n`
                            ini_txt += `Link : ${x.link}\n`
                            ini_txt += `Tipe : *${x.tipe}*\n`
                            ini_txt += `Published : ${x.waktu}\n`
                            ini_txt += `───────────────────\n\n`
                        }
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'cnnnasional':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = "*Result :*\n\n"
                        for (var x of get_result) {
                            ini_txt += `*Judul :* ${x.judul}\n`
                            ini_txt += `Link : ${x.link}\n`
                            ini_txt += `Tipe : *${x.tipe}*\n`
                            ini_txt += `Published : ${x.waktu}\n`
                            ini_txt += `───────────────────\n\n`
                        }
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'cnninternasional':
                case 'cnninternational':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = "*Result :*\n\n"
                        for (var x of get_result) {
                            ini_txt += `*Judul :* ${x.judul}\n`
                            ini_txt += `Link : ${x.link}\n`
                            ini_txt += `Tipe : *${x.tipe}*\n`
                            ini_txt += `Published : ${x.waktu}\n`
                            ini_txt += `───────────────────\n\n`
                        }
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'infogempa':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `*${get_result.lokasi}*\n\n`
                        ini_txt += `Waktu : ${get_result.waktu}\n`
                        ini_txt += `Potensi : *${get_result.potensi}*\n\n`
                        ini_txt += `Magnitude : ${get_result.magnitude}\n`
                        ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                        ini_txt += `Koordinat : ${get_result.koordinat}`
                        get_buffer = await getBuffer(get_result.map)
                        await akira.sendMessage(from, get_buffer, image, { quoted: mek, caption: ini_txt })
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'lirik':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${lol}&query=${query}`)
                    if (get_result.status == '200') {
                        reply(get_result.result)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'chord':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/chord?apikey=${lol}&query=${query}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `\n*${get_result.title.replace("&#8211;", "-")}*\n\n`
                        ini_txt += `*Chord :*\n${get_result.chord}`
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'cuaca':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Samarinda`)
                    daerah = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `*Tempat : ${get_result.tempat}*\n\n`
                        ini_txt += `Cuaca : ${get_result.cuaca}\n`
                        ini_txt += `Angin : ${get_result.angin}\n`
                        ini_txt += `Description : ${get_result.description}\n`
                        ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                        ini_txt += `Suhu : ${get_result.suhu}\n`
                        ini_txt += `Udara : ${get_result.udara}\n`
                        ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                        await akira.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek })
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'covidindo':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `Positif : *${get_result.positif}*\n`
                        ini_txt += `Sembuh : *${get_result.sembuh}*\n\n`
                        ini_txt += `Dirawat : *${get_result.dirawat}*\n`
                        ini_txt += `Meninggal : *${get_result.meninggal}*`
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'covidglobal':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `Positif : *${get_result.positif}*\n`
                        ini_txt += `Sembuh : *${get_result.sembuh}*\n\n`
                        ini_txt += `Dirawat : *${get_result.dirawat}*\n`
                        ini_txt += `Meninggal : *${get_result.meninggal}*`
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'kodepos':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=${lol}&query=${daerah}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = "*Result :*\n\n"
                        for (var x of get_result) {
                            ini_txt += `Provinsi : ${x.province}\n`
                            ini_txt += `Kabupaten : ${x.city}\n`
                            ini_txt += `Kecamatan : ${x.subdistrict}\n`
                            ini_txt += `Kelurahan : ${x.urban}\n\n`
                            ini_txt += `*Kode Pos : ${x.postalcode}*\n`
                            ini_txt += `───────────────────\n\n`
                        }
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'jadwalbola':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = "*Jadwal Bola :*\n\n"
                        for (var x of get_result) {
                            ini_txt += `Hari : ${x.hari}\n`
                            ini_txt += `Jam : ${x.jam}\n`
                            ini_txt += `Event : ${x.event}\n`
                            ini_txt += `Match : *${x.match}*\n`
                            ini_txt += `TV : ${x.tv}\n`
                            ini_txt += `───────────────────\n\n`
                        }
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'indbeasiswa':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = '*Info Beasiswa :*\n\n'
                        for (var x of get_result) {
                            ini_txt += `Title : ${x.title}\n`
                            ini_txt += `Link : ${x.link}\n`
                            ini_txt += `───────────────────\n\n`
                        }
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'hoax':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = '*Info Hoax :*\n\n'
                        for (var x of get_result) {
                            ini_txt += `Title : *${x.title}*\n`
                            ini_txt += `Link : ${x.link}\n`
                            ini_txt += `Posted : ${x.posted}\n`
                            ini_txt += `Description : ${x.desc}\n`
                            ini_txt += `───────────────────\n\n`
                        }
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'nsfwcheck':
                case 'nsfwcek':
                case 'ceknsfw':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        var filePath = await akira.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        var form = new FormData();
                        var stats = fs.statSync(filePath);
                        var fileSizeInBytes = stats.size;
                        var fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        var options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/nsfwcheck?apikey=${lol}`, {...options })
                        if (get_result.status == '200') {
                            fs.unlinkSync(filePath)
                            get_result = get_result.result
                            is_nsfw = "No"
                            if (Number(get_result.replace("%", "")) >= 50) is_nsfw = "Yes"
                            reply(`Is NSFW? *${is_nsfw}*\n\nNSFW Score : *${get_result}*`)
                            await limitAdd(sender)
                        } else {
                            reply(ind.err())
                        }
                    } else {
                        reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'ocr':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        var filePath = await akira.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        var form = new FormData();
                        var stats = fs.statSync(filePath);
                        var fileSizeInBytes = stats.size;
                        var fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        var options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/ocr?apikey=${lol}`, {...options })
                        if (get_result.status == '200') {
                            fs.unlinkSync(filePath)
                            get_result = get_result.result
                            reply(`*Result :*\n${get_result}`)
                            await limitAdd(sender)
                        } else {
                            reply(ind.err())
                        }
                    } else {
                        reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
                    }
                    break

                    // Entertainment
                case 'asupan':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${lol}`, {method: 'get'})
                    /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                    if (get_result.status == '200') {
                        ini_buffer = await getBuffer(get_result.result)
                        await akira.sendMessage(from, ini_buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    } else {
                        reply(ind.err())
                    }
                    break
                case '1cak':
                case 'wancak':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/onecak?apikey=${lol}`)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'meme':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        ini_buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/meme/memeindo?apikey=${lol}`)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'meme2':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        ini_buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/meme?apikey=${lol}`)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'darkjoke':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        ini_buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=${lol}`)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)
                    } catch {
                        reply(ind.err())
                    }
                    break
                /*case 'darkjoke2':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    memein = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`)
                    try {
                        buffer = await getBuffer(memein.result)
                        akira.sendMessage(from, buffer, image, {quoted: mek})
                        await limitAdd(sender)
                    } catch {
                        reply(ind.err())
                    }
                    break*/
                case 'tebakgambar': // case by piyo-chan
                    if (tebakgambar.hasOwnProperty(nano.split('@')[0])) return reply("Antri dulu, tunggu yang lain selesai")
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/gambar2?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_image = get_result.image
                        jawaban = get_result.answer
                        ini_buffer = await getBuffer(ini_image)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek, caption: "Jawab gk? Jawab lahhh, masa enggak. 40 detik cukup kan? gk cukup pulang aja" }).then(() => {
                            tebakgambar[nano.split('@')[0]] = jawaban.toLowerCase()
                            fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                        })
                        await sleep(40000)
                        if (tebakgambar.hasOwnProperty(nano.split('@')[0])) {
                            reply("Jawaban: *" + jawaban + "*")
                            delete tebakgambar[nano.split('@')[0]]
                            fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                        }
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'tebakbendera': // case by piyo-chan
                    if (tebakgambar.hasOwnProperty(nano.split('@')[0])) return reply("Antri dulu, tunggu yang lain selesai")
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/bendera?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        tebakbender = `*Bendera apa ini?* ${get_result.flag}\n\nSisa waktu : _30 Detik lagi_ …`
                        jawaban = get_result.name
                        await akira.sendMessage(from, tebakbender, text, { quoted: mek }).then(() => {
                            tebakgambar[nano.split('@')[0]] = jawaban.toLowerCase()
                            fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                        })
                        await sleep(30000)
                        if (tebakgambar.hasOwnProperty(nano.split('@')[0])) {
                            reply("Jawaban: *" + jawaban + "*")
                            delete tebakgambar[nano.split('@')[0]]
                            fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                        }
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'tebakjenaka':
                    if (tebakgambar.hasOwnProperty(nano.split('@')[0])) return reply("Antri dulu, tunggu yang lain selesai")
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/jenaka?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        tebakbender = `*${get_result.question}*\n\nSisa waktu : _20 Detik lagi_ …`
                        jawaban = get_result.answer
                        await akira.sendMessage(from, tebakbender, text, { quoted: mek }).then(() => {
                            tebakgambar[nano.split('@')[0]] = jawaban.toLowerCase()
                            fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                        })
                        await sleep(20000)
                        if (tebakgambar.hasOwnProperty(nano.split('@')[0])) {
                            reply("Jawaban: *" + jawaban + "*")
                            delete tebakgambar[nano.split('@')[0]]
                            fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                        }
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'tebakchara':
                    if (tebakgambar.hasOwnProperty(nano.split('@')[0])) return reply("Antri dulu, tunggu yang lain selesai")
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakchara?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        thumbnail = await getBuffer(get_result.image)
                        tebakchara = `*Siapa nama karakter ini?*\n\nSisa waktu : _20 Detik lagi_ …`
                        jawaban = get_result.name
                        await akira.sendMessage(from, thumbnail, image, { quoted: mek, caption: tebakchara }).then(() => {
                            tebakgambar[nano.split('@')[0]] = jawaban.toLowerCase()
                            fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                        })
                        await sleep(20000)
                        if (tebakgambar.hasOwnProperty(nano.split('@')[0])) {
                            reply("Nama Karakter :\n*" + jawaban + "*")
                            delete tebakgambar[nano.split('@')[0]]
                            fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                        }
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'siapaaku':
                    if (tebakgambar.hasOwnProperty(nano.split('@')[0])) return reply("Antri dulu, tunggu yang lain selesai")
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        tebakbender = `*${get_result.question}*\n\nSisa waktu : _25 Detik lagi_ …`
                        jawaban = get_result.answer
                        await akira.sendMessage(from, tebakbender, text, { quoted: mek }).then(() => {
                            tebakgambar[nano.split('@')[0]] = jawaban.toLowerCase()
                            fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                        })
                        await sleep(25000)
                        if (tebakgambar.hasOwnProperty(nano.split('@')[0])) {
                            reply(get_result.question + "\n\nJawaban: *" + jawaban + "*")
                            delete tebakgambar[nano.split('@')[0]]
                            fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                        }
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'asahotak':
                    if (tebakgambar.hasOwnProperty(nano.split('@')[0])) return reply("Antri dulu, tunggu yang lain selesai")
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/asahotak?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        tebakbender = `*${get_result.pertanyaan}*\n\nSisa waktu : _20 Detik lagi_ …`
                        jawaban = get_result.jawaban
                        await akira.sendMessage(from, tebakbender, text, { quoted: mek }).then(() => {
                            tebakgambar[nano.split('@')[0]] = jawaban.toLowerCase()
                            fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                        })
                        await sleep(20000)
                        if (tebakgambar.hasOwnProperty(nano.split('@')[0])) {
                            reply("Jawaban: *" + jawaban + "*")
                            delete tebakgambar[nano.split('@')[0]]
                            fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                        }
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'caklontong': // case by piyo-chan
                    if (tebakgambar.hasOwnProperty(nano.split('@')[0])) return reply("Antri dulu, tunggu yang lain selesai")
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/caklontong2?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        cak = `*${get_result.question}*\n\nSisa waktu : _30 Detik lagi_ …`
                        cok = get_result.question
                        jawaban = get_result.answer
                        infor = get_result.information
                        await akira.sendMessage(from, cak, text, { quoted: mek }).then(() => {
                            tebakgambar[nano.split('@')[0]] = jawaban.toLowerCase()
                            fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                        })
                        await sleep(30000)
                        if (tebakgambar.hasOwnProperty(nano.split('@')[0])) {
                            reply(cok + "\n➸ Jawaban: *" + jawaban + "*\n\nPenjelasan : " + infor)
                            delete tebakgambar[nano.split('@')[0]]
                            fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                        }
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'susunkata': 
                    if (tebakgambar.hasOwnProperty(nano.split('@')[0])) return reply("Antri dulu, tunggu yang lain selesai")
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        cak = `*${get_result.pertanyaan}*\n\nSisa waktu : _10 Detik lagi_ …`
                        cok = get_result.pertanyaan
                        jawaban = get_result.jawaban
                        await akira.sendMessage(from, cak, text, { quoted: mek }).then(() => {
                            tebakgambar[nano.split('@')[0]] = jawaban.toLowerCase()
                            fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                        })
                        await sleep(10000)
                        if (tebakgambar.hasOwnProperty(nano.split('@')[0])) {
                            reply(cok + "\n➸ Jawaban: *" + jawaban + "*")
                            delete tebakgambar[nano.split('@')[0]]
                            fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                        }
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'batal':
                case 'cancel':
                    if (!isOwner) return reply(ind.ownerb())
                    if (!tebakgambar.hasOwnProperty(nano.split('@')[0])) return reply("Tidak ada permainan sebelumnya")
                    delete tebakgambar[nano.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    reply("*Sukses mereset permainan!*")
                    break

                    // menu editor //
                case 'triggered':
                case 'trigger':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        try {
                            var imgbb = require('imgbb-uploader')
                            ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                            owgi = await akira.downloadAndSaveMediaMessage(ger)
                            anu = await imgbb("9bb7a4816f7f1cf09e3acd7730af3d90", owgi)
                            teks = `${anu.display_url}`
                            ranp = getRandom('.gif')
                            rano = getRandom('.webp')
                            buffer = `https://api.lolhuman.xyz/api/creator1/trigger?apikey=${lol}&img=${teks}`
                            exec(`wget "${buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                fs.unlinkSync(ranp)
                                buff = fs.readFileSync(rano)
                                akira.sendMessage(from, buff, sticker, { quoted: mek })
                                fs.unlinkSync(rano)
                            })
                            await limitAdd(sender)
                        } catch {
                            reply(ind.err())
                        }
                    } else {
                        reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'tosmile':
                case 'pencil':
                case 'wasted':
                case 'fisheye':
                case 'skullmask':
                case 'alien':
                case 'invert':
                case 'pixelate':
                case 'deepfry':
                case 'imagecolor':
                case 'rotate':
                case 'flip':
                case 'grayscale':
                case 'roundimage':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
                        owgi = await akira.downloadAndSaveMediaMessage(ted)
                        anu = await imgbb("9bb7a4816f7f1cf09e3acd7730af3d90", owgi)
                        try {
                            hehe = await getBuffer(`https://api.lolhuman.xyz/api/editor/${command}?apikey=${lol}&img=${anu.display_url}`)
                            /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                            akira.sendMessage(from, hehe, image, {quoted: mek})
                            await limitAdd(sender)
                        } catch {
                            reply(ind.err())
                        }
                    } else {
                        reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'beautiful':
                case 'facepalm':
                case 'hitler':
                case 'jail':
                case 'rainbow':
                case 'rip':
                case 'trash':
                case 'wanted':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
                        owgi = await akira.downloadAndSaveMediaMessage(ted)
                        anu = await imgbb("9bb7a4816f7f1cf09e3acd7730af3d90", owgi)
                        try {
                            hehe = await getBuffer(`https://api.lolhuman.xyz/api/creator1/${command}?apikey=${lol}&img=${anu.display_url}`)
                            /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                            akira.sendMessage(from, hehe, image, {quoted: mek})
                            await limitAdd(sender)
                        } catch {
                            reply(ind.err())
                        }
                    } else {
                        reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
                    }
                    break

                    // Creator
                case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Ram Rem`)
                    ini_txt = args.join(" ")
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lol}&text=${ini_txt}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                        await limitAdd(sender)
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'smoji':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${lol}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                        await limitAdd(sender)
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'fakedonald':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Ram Rem`)
                    ini_txt = args.join(" ")
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/tweettrump?apikey=${lol}&text=${ini_txt}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)
                    } catch {
                        reply(ind.err())
                    }
                    break

                    // Primbon
                case 'artinama':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Ram Rem`)
                    ini_nama = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${lol}&nama=${ini_nama}`)
                    if (get_result.status == '200') {
                        reply(get_result.result)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'jodoh':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu|Bacem`)
                    if (!q.includes('|')) return reply(ind.wrongf())
                    ini_nama = args.join(" ").split("|")
                    nama1 = ini_nama[0].trim()
                    nama2 = ini_nama[1].trim()
                    if (nama1.length == 0) return reply('input nama1')
                    if (nama2.length == 0) return reply('input nama2')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `*Positif :* ${get_result.positif}\n`
                        ini_txt += `*Negatif :* ${get_result.negatif}\n\n`
                        ini_txt += `*Deskripsi :*\n${get_result.deskripsi}`
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'weton':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Usage : ${prefix + command} tgl|bln|tahun\n\nExample: *${prefix + command} 26|12|2020*`)
                    if (!q.includes('|')) return reply(ind.wrongf())
                    ini_nama = args.join(" ").split("|")
                    txt1 = ini_nama[0].trim()
                    txt2 = ini_nama[1].trim()
                    txt3 = ini_nama[2].trim()
                    if (isNaN(txt1) || txt1.length == 0) return reply('Isi tanggal sesuai format')
                    if (isNaN(txt2) || txt2.length == 0) return reply('Isi bulan sesuai format')
                    if (isNaN(txt3) || txt3.length == 0) return reply('Isi tahun sesuai format')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/weton/${txt1}/${txt2}/${txt3}?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `*${get_result.weton}*\n\n`
                        ini_txt += `*Pekerjaan :* ${get_result.pekerjaan}\n\n`
                        ini_txt += `*Rejeki :* ${get_result.rejeki}\n\n`
                        ini_txt += `*Jodoh :* ${get_result.jodoh}`
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'jadian':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Usage : ${prefix + command} tgl|bln|tahun\n\nExample: *${prefix + command} 26|12|2020*`)
                    if (!q.includes('|')) return reply(ind.wrongf())
                    ini_nama = args.join(" ").split("|")
                    txt1 = ini_nama[0].trim()
                    txt2 = ini_nama[1].trim()
                    txt3 = ini_nama[2].trim()
                    if (isNaN(txt1) || txt1.length == 0) return reply('Isi tanggal sesuai format')
                    if (isNaN(txt2) || txt2.length == 0) return reply('Isi bulan sesuai format')
                    if (isNaN(txt3) || txt3.length == 0) return reply('Isi tahun sesuai format')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${txt1}/${txt2}/${txt3}?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `*Karakteristik :* ${get_result.karakteristik}\n\n`
                        ini_txt += `*Deskripsi :* ${get_result.deskripsi}`
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'tebakumur':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Ram Rem`)
                    ini_name = args.join(" ")
                    if (args.length == 0) return reply(`Example: ${prefix + command} Ram Rem`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=${lol}&name=${ini_name}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `Nama : ${get_result.name}\n`
                        ini_txt += `Umur : ${get_result.age}`
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break

                    // AniManga //
                case 'character':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lol}&query=${query}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `Id : ${get_result.id}\n\n`
                        ini_txt += `Name : *${get_result.name.full}*\n`
                        ini_txt += `Native : *${get_result.name.native}*\n`
                        ini_txt += `Favorites : ${get_result.favourites}\n\n`
                        ini_txt += `*Media :*\n`
                        ini_media = get_result.media.nodes
                        for (var x of ini_media) {
                            ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                        }
                        ini_txt += `\n*Description :*\n${get_result.description.replace(/__/g, "_")}`
                        thumbnail = await getBuffer(get_result.image.large)
                        await akira.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                        await limitAdd(sender)
                    } else {
                        try {
                            reply(get_result.message)
                        } catch {
                            reply(ind.err())
                        }
                    }
                    break
                case 'manga':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lol}&query=${query}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `Id : ${get_result.id}\n`
                        ini_txt += `Id MAL : ${get_result.idMal}\n\n`
                        ini_txt += `Title : *${get_result.title.romaji}*\n`
                        ini_txt += `English : *${get_result.title.english}*\n`
                        ini_txt += `Native : *${get_result.title.native}*\n\n`
                        ini_txt += `Format : ${get_result.format}\n`
                        ini_txt += `Chapters : ${get_result.chapters}\n`
                        ini_txt += `Volume : ${get_result.volumes}\n`
                        ini_txt += `Status : ${get_result.status}\n`
                        ini_txt += `Source : ${get_result.source}\n`
                        ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                        ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                        ini_txt += `*Genre : ${get_result.genres.join(", ")}*\n\n`
                        ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                        ini_txt += `*Score : ${get_result.averageScore}%*\n\n`
                        ini_txt += `*Characters :*\n`
                        ini_character = get_result.characters.nodes
                        for (var x of ini_character) {
                            ini_txt += `- ${x.name.full} (${x.name.native})\n`
                        }
                        ini_txt += `\n*Description :*\n${get_result.description}`
                        thumbnail = await getBuffer(get_result.coverImage.large)
                        await akira.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                        await limitAdd(sender)
                    } else {
                        try {
                            akira.sendMessage(from, `${get_result.message}`, text, {quoted: mek})
                        } catch {
                            reply(ind.err())
                        }
                    }
                    break
                case 'anime':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lol}&query=${query}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `Title : *${get_result.title.romaji}*\n`
                        ini_txt += `English : *${get_result.title.english}*\n`
                        ini_txt += `Native : *${get_result.title.native}*\n\n`
                        ini_txt += `Format : ${get_result.format}\n`
                        ini_txt += `Episodes : ${get_result.episodes}\n`
                        ini_txt += `Duration : ${get_result.duration} mins.\n`
                        ini_txt += `Status : ${get_result.status}\n`
                        ini_txt += `Season : ${get_result.season}\n`
                        ini_txt += `Season Year : ${get_result.seasonYear}\n`
                        ini_txt += `Source : ${get_result.source}\n`
                        ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                        ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                        ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                        ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                        ini_txt += `*Score : ${get_result.averageScore}%*\n\n`
                        ini_txt += `*Characters :*\n`
                        ini_character = get_result.characters.nodes
                        for (var x of ini_character) {
                            ini_txt += `- ${x.name.full} (${x.name.native})\n`
                        }
                        ini_txt += `\n*Description :*\n${get_result.description}`
                        thumbnail = await getBuffer(get_result.coverImage.large)
                        await akira.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                        await limitAdd(sender)
                    } else {
                        try {
                            akira.sendMessage(from, `${get_result.message}`, text, {quoted: mek})
                        } catch {
                            reply(ind.err())
                        }
                    }
                    break
                case 'wait2': // case without apikey
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                            /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                            media = await akira.downloadMediaMessage(encmedia)
                            await wait(media).then(res => {
                                akira.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
                            }).catch(err => {
                                reply(err)
                            })
                        } else {
                            reply('anime not found.')
                        }
                        await limitAdd(sender)
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'wait':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        var filePath = await akira.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        var form = new FormData();
                        var stats = fs.statSync(filePath);
                        var fileSizeInBytes = stats.size;
                        var fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        var  options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        try {
                            get_result = await fetchJson(`https://api.lolhuman.xyz/api/wait?apikey=${lol}`, {...options })
                            fs.unlinkSync(filePath)
                            if (get_result.status == '200') {
                                get_result = get_result.result
                                ini_video = await getBuffer(get_result.video)
                                ini_txt = `Anilist id : ${get_result.anilist_id}\n`
                                ini_txt += `MAL id : ${get_result.mal_id}\n\n`
                                ini_txt += `Title : *${get_result.title_romaji}*\n`
                                ini_txt += `Native : *${get_result.title_native}*\n`
                                ini_txt += `English : *${get_result.title_english}*\n\n`
                                ini_txt += `at : ${get_result.at}\n`
                                ini_txt += `Episode : ${get_result.episode}\n`
                                ini_txt += `*Similarity : ${get_result.similarity}*`
                                await akira.sendMessage(from, ini_video, video, { quoted: mek, caption: ini_txt })
                                await limitAdd(sender)
                            } else {
                                reply('Anime not found.')
                            }
                        } catch {
                            reply(ind.errs())
                        }
                    } else {
                        reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'whatmanga':
                case 'wutmanga':
                case 'wmit':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await akira.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        try {
                            get_result = await fetchJson(`https://api.lolhuman.xyz/api/wmit?apikey=${lol}`, {...options })
                            fs.unlinkSync(filePath)
                            if (get_result.status == '200') {
                                get_result = get_result.result[0]
                                ini_txt = `Title : *${get_result.title}*\n`
                                ini_txt += `Part : *${get_result.part.replace(' - ', '- ')}*\n\n`
                                ini_txt += `URLs :\n${get_result.urls[0]}\n${get_result.urls[1]}\n${get_result.urls[2]}\n\n`
                                ini_txt += `*Similarity : ${get_result.similarity}*`
                                reply(ini_txt)
                                await limitAdd(sender)
                            } else {
                                reply('Manga not found.')
                            }
                        } catch {
                            reply(ind.errs())
                        }
                    } else {
                        reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'kusonimeweb':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!q.includes('http') || args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    if (!q.includes('kusonime.com')) return reply('Bukan web kusonime itu bre')
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonime?apikey=${lol}&url=${ini_url}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `*${get_result.title}*\n\n`
                        ini_txt += `Japanese : *${get_result.japanese}*\n`
                        ini_txt += `Genre : ${get_result.genre}\n`
                        ini_txt += `Seasons : ${get_result.seasons}\n`
                        ini_txt += `Producers : ${get_result.producers}\n\n`
                        ini_txt += `*Type :* ${get_result.type}\n`
                        ini_txt += `Status : ${get_result.status}\n`
                        ini_txt += `Total Episode : ${get_result.total_episode}\n`
                        ini_txt += `*Score : ${get_result.score}*\n`
                        ini_txt += `Duration : ${get_result.duration}\n`
                        ini_txt += `Released On : ${get_result.released_on}\n\n`
                        ini_txt += `*Desc :* ${get_result.desc}\n`
                        link_dl = get_result.link_dl
                        for (var x in link_dl) {
                            ini_txt += `\n${x}\n`
                            for (var y in link_dl[x]) {
                                ini_txt += `${y} - ${link_dl[x][y]}\n───────────────────\n`
                            }
                        }
                        ini_buffer = await getBuffer(get_result.thumbnail)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'kusonime':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lol}&query=${query}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `*${get_result.title}*\n\n`
                        ini_txt += `Japanese : *${get_result.japanese}*\n`
                        ini_txt += `Genre : ${get_result.genre}\n`
                        ini_txt += `Seasons : ${get_result.seasons}\n`
                        ini_txt += `Producers : ${get_result.producers}\n`
                        ini_txt += `Type : ${get_result.type}\n`
                        ini_txt += `Status : ${get_result.status}\n`
                        ini_txt += `Total Episode : ${get_result.total_episode}\n`
                        ini_txt += `*Score : ${get_result.score}*\n`
                        ini_txt += `Duration : ${get_result.duration}\n`
                        ini_txt += `Released On : ${get_result.released_on}\n`
                        ini_txt += `Desc : ${get_result.desc}\n`
                        link_dl = get_result.link_dl
                        for (var x in link_dl) {
                            ini_txt += `\n${x}\n`
                            for (var y in link_dl[x]) {
                                ini_txt += `${y} - ${link_dl[x][y]}\n───────────────────\n`
                            }
                        }
                        ini_buffer = await getBuffer(get_result.thumbnail)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'otakudesuweb':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!q.includes('http') || args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    if (!q.includes('otakudesu.tv')) return reply('Itu web otakudesu bukan?')
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesu?apikey=${lol}&url=${ini_url}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `*${get_result.title}*\n\n`
                        ini_txt += `Japanese : *${get_result.japanese}*\n`
                        ini_txt += `Judul : ${get_result.judul}\n`
                        ini_txt += `Type : ${get_result.type}\n`
                        ini_txt += `Episode : ${get_result.episodes}\n`
                        ini_txt += `Aired : ${get_result.aired}\n`
                        ini_txt += `Producers : ${get_result.producers}\n`
                        ini_txt += `Genre : ${get_result.genres}\n`
                        ini_txt += `Duration : ${get_result.duration}\n`
                        ini_txt += `Studios : ${get_result.status}\n`
                        ini_txt += `*Rating : ${get_result.rating}*\n`
                        ini_txt += `Credit : ${get_result.credit}\n`
                        get_link = get_result.link_dl
                        for (var x in get_link) {
                            ini_txt += `\n\n*${get_link[x].title}*\n`
                            for (var y in get_link[x].link_dl) {
                                ini_info = get_link[x].link_dl[y]
                                ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                                ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                                ini_txt += `\`\`\`Link : \`\`\`\n`
                                down_link = ini_info.link_dl
                                for (var z in down_link) {
                                    ini_txt += `${z} - ${down_link[z]}\n───────────────────\n`
                                }
                            }
                        }
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break
                case 'otakudesu':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lol}&query=${query}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        ini_txt = `*${get_result.title}*\n\n`
                        ini_txt += `Japanese : *${get_result.japanese}*\n`
                        ini_txt += `Judul : ${get_result.judul}\n`
                        ini_txt += `Type : ${get_result.type}\n`
                        ini_txt += `Episode : ${get_result.episodes}\n`
                        ini_txt += `Aired : ${get_result.aired}\n`
                        ini_txt += `Producers : ${get_result.producers}\n`
                        ini_txt += `Genre : ${get_result.genres}\n`
                        ini_txt += `Duration : ${get_result.duration}\n`
                        ini_txt += `Studios : ${get_result.status}\n`
                        ini_txt += `*Rating : ${get_result.rating}*\n`
                        ini_txt += `Credit : ${get_result.credit}\n`
                        get_link = get_result.link_dl
                        for (var x in get_link) {
                            ini_txt += `\n\n*${get_link[x].title}*\n`
                            for (var y in get_link[x].link_dl) {
                                ini_info = get_link[x].link_dl[y]
                                ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                                ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                                ini_txt += `\`\`\`Link : \`\`\`\n`
                                down_link = ini_info.link_dl
                                for (var z in down_link) {
                                    ini_txt += `${z} - ${down_link[z]}\n───────────────────\n`
                                }
                            }
                        }
                        reply(ini_txt)
                        await limitAdd(sender)
                    } else {
                        reply(ind.err())
                    }
                    break

                    // NSFW AREA //
                case 'cersex':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length != 0) return reply(ind.noneed())
                    get_result = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`)
                    try {
                        get_result = get_result.result
                        ini_txt = `*Title : ${get_result.judul}*\n\n`
                        ini_txt += `*Story :*\n${get_result.cersex}\n`
                        thumbnail = await getBuffer(get_result.img)
                        await akira.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                        await limitAdd(sender)
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'nhentai':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    if (isNaN(args[0]) || q.includes('-') || q.includes('+')) return reply('Kode nuklir salah.')
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        thumbnail = await getBuffer(get_result.image[0])
                        ini_txt = `Romaji : *${get_result.title_romaji}*\n`
                        ini_txt += `Native : *${get_result.title_native}*\n`
                        get_info = get_result.info
                        ini_txt += `Parodies : *${get_info.parodies}*\n\n`
                        try {
                            ini_txt += `*Character :* ${get_info.characters.join(", ")}\n`
                        } catch {
                            ini_txt += `*Character :* ${get_info.characters}\n`
                        }
                        try {
                            ini_txt += `*Tags :* ${get_info.tags.join(", ")}\n\n`
                        } catch {
                            ini_txt += `*Tags :* ${get_info.tags}\n\n`
                        }
                        ini_txt += `Artist : *${get_info.artists}*\n`
                        ini_txt += `Group : *${get_info.groups}*\n`
                        try {
                            ini_txt += `Languages : *${get_info.languages.join(", ")}*\n`
                        } catch {
                            ini_txt += `Languages : *${get_info.languages}*\n`
                        }
                        ini_txt += `Categories : *${get_info.categories}*\n`
                        ini_txt += `*Pages : ${get_info.pages}*\n`
                        ini_txt += `*Uploaded : ${get_info.uploaded}*\n`
                        akira.sendMessage(from, thumbnail, image, {quoted: mek, caption: ini_txt})
                        await limitAdd(sender)
                    } else {
                        try {
                            akira.sendMessage(from, `${get_result.message}`, text, {quoted: mek})
                        } catch {
                            reply(ind.err())
                        }
                    }
                    break
                case 'nhentaipdf':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    try {
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lol}`)
                        if (get_result.status == '200') {
                            /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                            get_result = get_result.result
                            ini_buffer = await getBuffer(get_result)
                            try {
                                await akira.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                            } catch {
                                reply('[!] Failed to load PDF Document')
                            }
                            await limitAdd(sender)
                        } else {
                            reply('doujin not found')
                        }
                    } catch {
                        reply(ind.errs())
                    }
                    break
                case 'nhentaiweb':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    try {
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lol}&query=${query}`)
                        if (get_result.status == '200' && get_result.result != "") {
                            get_result = get_result.result
                            ini_txt = "*Result :*\n\n"
                            for (var x of get_result) {
                                ini_txt += `Kode Nuklir : *${x.id}*\n`
                                ini_txt += `English : *${x.title_english}*\n`
                                ini_txt += `Japanese : *${x.title_japanese}*\n`
                                ini_txt += `Native : *${x.title_native}*\n`
                                ini_txt += `Upload : ${x.date_upload}\n`
                                ini_txt += `Page : ${x.page}\n`
                                ini_txt += `Favourite : ${x.favourite}\n`
                                ini_txt += `───────────────────\n\n`
                            }
                            reply(ini_txt)
                            await limitAdd(sender)
                        } else if (get_result.status == '200' && get_result.result == "") {
                            reply('0 Result.')
                        } else {
                            reply('doujin not found.')
                        }
                    } catch {
                        reply(ind.errs())
                    }
                    break
                case 'nekopoiweb':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length == 0) return reply(`Usage : ${prefix + command} _nekopoi_site_\n\nExample: ${prefix + command} https://cutt.ly/iv7Zsem`)
                    if (!q.includes('nekopoi.care')) return reply('Web kucing apa bukan itu oi..')
                    ini_url = args[0]
                    try {
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${lol}&url=${ini_url}`)
                        if (get_result.status == '200') {
                            get_result = get_result.result
                            ini_txt = `*${get_result.anime}*\n\n`
                            ini_txt += `Porducers : *${get_result.producers}*\n`
                            ini_txt += `Duration : ${get_result.duration}\n`
                            ini_txt += `Size : ${get_result.size}\n\n`
                            ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
                            link = get_result.link
                            for (var x in link) {
                                ini_txt += `\n${link[x].name}\n`
                                link_dl = link[x].link
                                for (var y in link_dl) {
                                    ini_txt += `${y} - ${link_dl[y]}\n`
                                }
                            }
                            ini_buffer = await getBuffer(get_result.thumb)
                            await akira.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                            await limitAdd(sender)
                        } else {
                            reply('0 Result.')
                        }
                    } catch {
                        reply(ind.errs())
                    }
                    break
                case 'nekopoi':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                    query = args.join(" ")
                    try {
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lol}&query=${query}`)
                        if (get_result.status == '200') {
                            get_result = get_result.result
                            ini_txt = ""
                            for (var x of get_result) {
                                ini_txt += `*Title :* ${x.title}\n`
                                ini_txt += `*Link :* ${x.link}\n`
                                ini_txt += `*Thumbnail :* ${x.thumbnail}\n`
                                ini_txt += `───────────────────\n\n`
                            }
                            ini_buffer = await getBuffer(get_result[0].thumbnail)
                            await akira.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                            await limitAdd(sender)
                        } else {
                            reply('Anime not found.')
                        }
                    } catch {
                        reply(ind.errs())
                    }
                    break
                case 'xhamster':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    try {
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamstersearch?apikey=${lol}&query=${query}`)
                        if (get_result.status == '200') {
                            get_result = get_result.result
                            ini_txt = ""
                            for (var x of get_result) {
                                ini_txt += `Title : ${x.title}\n`
                                ini_txt += `Views : ${x.views}\n`
                                ini_txt += `Duration : ${x.duration}\n`
                                ini_txt += `Link : ${x.link}\n`
                                ini_txt += `───────────────────\n\n`
                            }
                            reply(ini_txt)
                            await limitAdd(sender)
                        } else {
                            reply(ind.err())
                        }
                    } catch {
                        reply(ind.errs())
                    }
                    break
                case 'xhamsterweb':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length == 0) return reply(`Usage : ${prefix + command} _xhamster_site_\n\nExample: ${prefix + command} https://cutt.ly/Sv7fsJX`)
                    if (!q.includes('xhofficial5.com')) return reply('Bukan website xhamster itu tod')
                    query = args.join(" ")
                    try {
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamster?apikey=${lol}&url=${query}`)
                        if (get_result.status == '200') {
                            get_result = get_result.result
                            ini_txt = `*${get_result.title}*\n\n`
                            ini_txt += `Duration : ${get_result.duration}\n`
                            ini_txt += `Uploader : ${get_result.author}\n`
                            ini_txt += `Upload : ${get_result.upload}\n`
                            ini_txt += `View : ${get_result.views}\n`
                            ini_txt += `*Rating : ${get_result.rating}*\n\n`
                            ini_txt += `Like : ${get_result.likes}\n`
                            ini_txt += `Dislike : ${get_result.dislikes}\n`
                            ini_txt += `Comment : ${get_result.comments}\n\n`
                            ini_txt += "*Link :* \n"
                            link = get_result.link
                            for (var x of link) {
                                ini_txt += `${x.type} - ${x.link}\n\n`
                            }
                            thumbnail = await getBuffer(get_result.thumbnail)
                            akira.sendMessage(from, thumbnail, image, { quoted: lol, caption: ini_txt })
                            await limitAdd(sender)
                        } else {
                            reply(ind.err())
                        }
                    } catch {
                        reply(ind.errs())
                    }
                    break
                case 'xnxx':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    try {
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=${lol}&query=${query}`)
                        if (get_result.status == '200') {
                            get_result = get_result.result
                            ini_txt = ""
                            for (var x of get_result) {
                                ini_txt += `Title : *${x.title}*\n`
                                ini_txt += `Views : ${x.views}\n`
                                ini_txt += `Duration : ${x.duration}\n`
                                ini_txt += `Uploader : ${x.uploader}\n`
                                ini_txt += `Link : ${x.link}\n`
                                ini_txt += `Thumbnail : ${x.thumbnail}\n`
                                ini_txt += `───────────────────\n\n`
                            }
                            reply(ini_txt)
                            await limitAdd(sender)
                        } else {
                            reply(ind.err())
                        }
                    } catch {
                        reply(ind.errs())
                    }
                    break
                case 'xnxxweb':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length == 0) return reply(`Usage : ${prefix + command} _xnxx_site_\n\nExample: ${prefix + command} https://cutt.ly/Sv7fsJX`)
                    if (!q.includes('xnxx.com')) return reply('Gapernah main ke xnxx ya?')
                    query = args.join(" ")
                    try {
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lol}&url=${query}`)
                        if (get_result.status == '200') {
                            get_result = get_result.result
                            ini_txt = `*${get_result.title}*\n\n`
                            ini_txt += `Duration : ${get_result.duration}\n`
                            ini_txt += `View : ${get_result.view}\n`
                            ini_txt += `*Rating : ${get_result.rating}*\n\n`
                            ini_txt += `Like : ${get_result.like}\n`
                            ini_txt += `Dislike : ${get_result.dislike}\n`
                            ini_txt += `Comment : ${get_result.comment}\n\n`
                            try {
                                ini_txt += `*Tags :* ${get_result.tag.join(", ")}\n\n`
                            } catch {
                                ini_txt += `*Tags :* ${get_result.tag}\n\n`
                            }
                            ini_txt += `*Description :*\n${get_result.description}\n\n`
                            ini_txt += "*Link :* \n"
                            link = get_result.link
                            for (var x of link) {
                                ini_txt += `${x.type} - ${x.link}\n\n`
                            }
                            thumbnail = await getBuffer(get_result.thumbnail)
                            akira.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                            await limitAdd(sender)
                        } else {
                            reply(ind.err())
                        }
                    } catch {
                        reply(ind.errs())
                    }
                    break
                case 'pornhub':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length == 0) return reply(`Example: ${prefix + command} step sister`)
                    query = args.join(" ")
                    try {
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/pornhubsearch?apikey=${lol}&query=${query}`)
                        if (get_result.status == '200') {
                            get_result = get_result.result
                            ini_txt = ""
                            for (var x of get_result) {
                                ini_txt += `Title : *${x.title}*\n`
                                ini_txt += `Views : ${x.views}\n`
                                ini_txt += `Duration : ${x.duration}\n`
                                ini_txt += `Uploader : ${x.uploader}\n`
                                ini_txt += `Views : ${x.views}\n`
                                ini_txt += `Rating : ${x.rating}\n`
                                ini_txt += `Link : ${x.link}\n`
                                ini_txt += `Thumbnail : ${x.thumbnail}\n`
                                ini_txt += `───────────────────\n\n`
                            }
                            reply(ini_txt)
                            await limitAdd(sender)
                        } else {
                            reply(ind.err())
                        }
                    } catch {
                        reply(ind.errs())
                    }
                    break
                case 'pornhubweb':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length == 0) return reply(`Usage : ${prefix + command} _pornhub_site_\n\nExample: ${prefix + command} https://cutt.ly/Sv7fsJX`)
                    if (!q.includes('pornhub.com')) return reply('Situs apa itu ngab?')
                    query = args.join(" ")
                    try {
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/pornhub?apikey=${lol}&url=${query}`)
                        if (get_result.status == '200') {
                            get_result = get_result.result
                            ini_txt = `*${get_result.title}*\n\n`
                            ini_txt += `Duration : ${get_result.duration}\n`
                            ini_txt += `View : ${get_result.view}\n`
                            ini_txt += `Geo : *${get_result.geo}*\n\n`
                            ini_txt += `Like : ${get_result.like}\n`
                            ini_txt += `Dislike : ${get_result.dislike}\n`
                            ini_txt += `Upload : ${get_result.upload}\n\n`
                            /*try {
                                ini_txt += `*Tags :* ${get_result.tag.join(", ")}\n\n`
                            } catch {
                                ini_txt += `*Tags :* ${get_result.tag}\n\n`
                            }
                            ini_txt += `*Description :*\n${get_result.description}\n\n`*/
                            ini_txt += "*Link :* \n"
                            ini_txt = ""
                            get_media = get_result.media
                            for (var x of get_media) {
                                ini_txt += `*Default Quality :* ${x.defaultQuality}\n`
                                ini_txt += `*${x.quality} - ${x.format}*\n`
                                ini_txt += `*Link :* ${x.videoUrl}\n`
                                ini_txt += `*Remote :* ${x.remote}\n`
                                ini_txt += `───────────────────\n\n`
                            }
                            thumbnail = await getBuffer(get_result.thumb)
                            akira.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                            await limitAdd(sender)
                        } else {
                            reply(ind.err())
                        }
                    } catch {
                        reply(ind.errs())
                    }
                    break

                    // Random Anime Image //
                case 'bts':
                case 'exo':
                case 'cecan':
                case 'cogan':
                case 'blackpink':
                case 'elf':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'kanna':
                case 'megumin':
                case 'wallnime':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lol}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'waifu2':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    memein = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
                    try {
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        buffer = await getBuffer(memein.url)
                        akira.sendMessage(from, buffer, image, {quoted: mek})
                        await limitAdd(sender)
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'neko2':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/neko?apikey=${lol}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'holo':
                case 'kemonomimi':
                case 'fox_girl':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lol}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'feed':
                case 'poke':
                case 'kiss':
                case 'smug':
                case 'baka':
                case 'tickle':
                case 'cuddle':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        ini_buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${lol}`
                        exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            buff = fs.readFileSync(rano)
                            akira.sendMessage(from, buff, sticker, { quoted: mek })
                            fs.unlinkSync(rano)
                        })
                        await limitAdd(sender)
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'cry':
                case 'hug':
                case 'lick':
                case 'pat':
                case 'bonk':
                case 'blush':
                case 'handhold':
                case 'bite':
                case 'dance':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        ini_buffer = `https://api.lolhuman.xyz/api/random/${command}?apikey=${lol}`
                        exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            buff = fs.readFileSync(rano)
                            akira.sendMessage(from, buff, sticker, { quoted: mek })
                            fs.unlinkSync(rano)
                        })
                        await limitAdd(sender)
                    } catch {
                        reply(ind.err())
                    }
                    break

                    // Random NSFW Image //
                case 'loli':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=${lol}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'loli2':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/chiisaihentai?apikey=${lol}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'waifunsfw':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/waifu?apikey=${lol}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'waifunsfw2':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length != 0) return reply(ind.noneed())
                    memein = await fetchJson(`https://api.waifu.pics/nsfw/waifu`)
                    try {
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        buffer = await getBuffer(memein.url)
                        akira.sendMessage(from, buffer, image, {quoted: mek})
                        await limitAdd(sender)
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'nekonsfw':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/neko?apikey=${lol}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'hentaiparadise':
                case 'hentaifemdom':
                case 'hentai4everyone':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lol}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'bigtiddies':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/biganimetiddies?apikey=${lol}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'feets':
                case 'booty':
                case 'thighss':
                case 'armpits':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/anime${command}?apikey=${lol}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'trap2':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/trap?apikey=${lol}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'blowjob2':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/blowjob?apikey=${lol}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'hentai2':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/hentai?apikey=${lol}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'hololewd2':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/hololewd?apikey=${lol}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'les':
                case 'feet':
                case 'yuri':
                case 'lewd':
                case 'eron':
                case 'solo':
                case 'anal':
                case 'keta':
                case 'tits':
                case 'kuni':
                case 'erok':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'pussy':
                case 'femdom':
                case 'eroyuri':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'futanari':
                case 'lewdkemo':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lol}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'nsfw_neko_gif':
                case 'random_hentai_gif':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length != 0) return reply(ind.noneed())
                    try {
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        ini_buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${lol}`
                        exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            buff = fs.readFileSync(rano)
                            akira.sendMessage(from, buff, sticker, { quoted: mek })
                            fs.unlinkSync(rano)
                        })
                        await limitAdd(sender)
                    } catch {
                        reply(ind.err())
                    }
                    break

                    // Textprome //
                case 'neon':
                case 'greenneon':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Shiro Neko`)
                    ini_txt = args.join(" ")
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lol}&text=${ini_txt}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Shiro|Neko`)
                    if (!q.includes('|')) return reply(ind.wrongf())
                    ini_nama = args.join(" ").split("|")
                    txt1 = ini_nama[0].trim()
                    txt2 = ini_nama[1].trim()
                    if (txt1.length == 0) return reply('Teks pertama tidak boleh kosong')
                    if (txt2.length == 0) return reply('Teks kedua tidak boleh kosong')
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lol}&text1=${txt1}&text2=${txt2}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'phub':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Shiro|Neko`)
                    if (!q.includes('|')) return reply(ind.wrongf())
                    ini_nama = args.join(" ").split("|")
                    txt1 = ini_nama[0].trim()
                    txt2 = ini_nama[1].trim()
                    if (txt1.length == 0) return reply('Teks pertama tidak boleh kosong')
                    if (txt2.length == 0) return reply('Teks kedua tidak boleh kosong')
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/pornhub?apikey=${lol}&text1=${txt1}&text2=${txt2}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'bpink':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Shiro Neko`)
                    ini_txt = args.join(" ")
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome/blackpink?apikey=${lol}&text=${ini_txt}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)
                    } catch {
                        reply(ind.err())
                    }
                    break

                    // Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Shiro Neko`)
                    ini_txt = args.join(" ")
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lol}&text=${ini_txt}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)
                    } catch {
                        reply(ind.err())
                    }
                    break
                case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Shiro|Neko`)
                    if (!q.includes('|')) return reply(ind.wrongf())
                    ini_nama = args.join(" ").split("|")
                    txt1 = ini_nama[0].trim()
                    txt2 = ini_nama[1].trim()
                    if (txt1.length == 0) return reply('Teks pertama tidak boleh kosong')
                    if (txt2.length == 0) return reply('Teks kedua tidak boleh kosong')
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lol}&text1=${txt1}&text2=${txt2}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply(ind.err())
                    }
                    break

                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Shiro Neko`)
                    ini_txt = args.join(" ")
                    try {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lol}&text=${ini_txt}`)
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await akira.sendMessage(from, ini_buffer, image, { quoted: mek })
                        await limitAdd(sender)   
                    } catch {
                        reply(ind.err())
                    }
                    break

                // Genshin DEV API
                case 'giartifact':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} berserker`)
                    query = args.join(" ")
                    try {
                        get_result = await fetchJson(`https://api.genshin.dev/artifacts/${query}`)
                        ini_list = await fetchJson(`https://api.genshin.dev/artifacts`)
                        if (get_result.name != undefined) {
                            ini_txt = `*Name : ${get_result.name}*\n\n`
                            ini_txt += `*Max Rarity :* ${get_result.max_rarity}\n\n`
                            ini_txt += `*2-pcs bonus :*\n${get_result["2-piece_bonus"]}\n`
                            ini_txt += `*4-pcs bonus :*\n${get_result["4-piece_bonus"]}\n`
                            await reply(ini_txt)
                        } else {
                            try {
                                ini_txt = `*Not Found*\n\n*Available artifacts :*\n${ini_list.join(", ")}`
                                await reply(ini_txt)
                            } catch {
                                reply(ind.err())
                            }
                        }
                    } catch {
                        reply(ind.errs())
                    }
                    break
                case 'gichara':
                case 'genshin':
                case 'gi':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} ganyu`)
                    query = args.join(" ")
                    try {
                        get_result = await fetchJson(`https://api.genshin.dev/characters/${query}`)
                        get_list = await fetchJson(`https://api.genshin.dev/characters`)
                        try {
                            thumbnail = fs.readFileSync(`./genshin/${query}.jpg`)
                        } catch {
                            thumbnail = fs.readFileSync(`./genshin/paimon.jpg`)
                        }
                        if (get_result.name != undefined) {
                            ini_txt = `_‟${get_result.description}”_\n\n`
                            ini_txt += `*Name : ${get_result.name}*\n`
                            if (get_result.title != undefined) {
                                ini_txt += `*Title :* ${get_result.title}\n`
                            } else {
                                ini_txt += `*Title : -*\n`
                            }
                            ini_txt += `*Vision :* ${get_result.vision}\n`
                            ini_txt += `*Weapon :* ${get_result.weapon}\n\n`
                            if (get_result.gender != undefined) {
                                ini_txt += `*Gender :* ${get_result.gender}\n`
                            } else {
                                ini_txt += `*Gender :*\n`
                            }
                            ini_txt += `*Nation :* ${get_result.nation}\n`
                            ini_txt += `*Affiliation : ${get_result.affiliation}*\n\n`
                            if (get_result.specialDish != undefined) {
                                ini_txt += `*Special Dish :* ${get_result.specialDish}\n`
                            } else {
                                ini_txt += `*Special Dish : -*\n`
                            }
                            ini_txt += `*Rarity : ${get_result.rarity}*\n`
                            ini_txt += `*Constellation : ${get_result.constellation}*\n`
                            ini_txt += `*Birthday :* ${get_result.birthday}`
                            //await reply(ini_txt)
                            await akira.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                            try {
                                get_voice = await fetchJson(`https://api.lolhuman.xyz/api/genshin/${query}?apikey=${lol}`)
                                ini_voice = await getBuffer(get_voice.result.cv[0].audio[0])
                                await akira.sendMessage(from, ini_voice, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                            } catch (e) {
                                console.log('Error cuk :', color(e, 'red'))
                            }
                        } else {
                            try {
                                ini_txt = `*Not Found*\n\n*Available characters is :*\n${get_list.join(", ")}`
                                await reply(ini_txt)
                            } catch {
                                reply(ind.err())
                            }
                        }
                    } catch {
                        reply(ind.errs())
                    }
                    break
                case 'giconsumable':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} food`)
                    query = args.join(" ")
                    try {
                        get_result = await fetchJson(`https://api.genshin.dev/consumables/${query}`)
                        get_list = await fetchJson(`https://api.genshin.dev/consumables`)
                        if (get_result.name != undefined) {
                            ini_txt = `‟${get_result.description}”\n\n`
                            ini_txt += `*Name : ${get_result.name}*\n`
                            await reply(ini_txt)
                        } else {
                            try {
                                ini_txt = `*Development in Progress...*\n\n*Available items is :*\n${get_list.join(", ")}`
                                await reply(ini_txt)
                            } catch {
                                reply(ind.err())
                            }
                        }
                    } catch {
                        reply(ind.errs())
                    }
                    break
                case 'gidomain':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} cecilia-garden`)
                    query = args.join(" ")
                    try {
                        get_result = await fetchJson(`https://api.genshin.dev/domains/${query}`)
                        get_list = await fetchJson(`https://api.genshin.dev/domains`)
                        if (get_result.name != undefined) {
                            ini_txt = `_${get_result.description}_\n\n`
                            ini_txt += `*Name : ${get_result.name}*\n`
                            ini_txt += `*Type :* ${get_result.type}\n`
                            ini_txt += `*Location:* ${get_result.location}\n`
                            ini_txt += `*Nation :* ${get_result.nation}\n`
                            await reply(ini_txt)
                        } else {
                            try {
                                ini_txt = `*Not Found*\n\n*Available domains :*\n${get_list.join(", ")}`
                                await reply(ini_txt)
                            } catch {
                                reply(ind.err())
                            }
                        }
                    } catch {
                        reply(ind.errs())
                    }
                    break
                case 'gielement':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} anemo`)
                    query = args.join(" ")
                    try {
                        get_result = await fetchJson(`https://api.genshin.dev/elements/${query}`)
                        get_list = await fetchJson(`https://api.genshin.dev/elements`)
                        if (get_result.name != undefined) {
                            ini_txt = `*Name : ${get_result.name}*\n\n`
                            ini_txt += `*Key :* ${get_result.key}`
                            await reply(ini_txt)
                        } else {
                            try {
                                ini_txt = `*Not Found*\n\n*Available elements :*\n${get_list.join(", ")}`
                                await reply(ini_txt)
                            } catch {
                                reply(ind.err())
                            }
                        }
                    } catch {
                        reply(ind.errs())
                    }
                    break
                case 'gienemy':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} hilichurl`)
                    query = args.join(" ")
                    try {
                        get_result = await fetchJson(`https://api.genshin.dev/enemies/${query}`)
                        get_list = await fetchJson(`https://api.genshin.dev/enemies`)
                        if (get_result.name != undefined) {
                            ini_txt = `_${get_result.description}_\n\n`
                            ini_txt += `*Name : ${get_result.name}*\n`
                            ini_txt += `*Region :* ${get_result.region}\n`
                            ini_txt += `*Type :* ${get_result.type}\n`
                            ini_txt += `*Family :* ${get_result.family}`
                            await reply(ini_txt)
                        } else {
                            try {
                                ini_txt = `*Not Found*\n\n*Available enemies :*\n${get_list.join(", ")}`
                                await reply(ini_txt)
                            } catch {
                                reply(ind.err())
                            }
                        }
                    } catch {
                        reply(ind.errs())
                    }
                    break
                case 'gimaterial':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} talent-book`)
                    query = args.join(" ")
                    try {
                        get_result = await fetchJson(`https://api.genshin.dev/materials/${query}`)
                        get_list = await fetchJson(`https://api.genshin.dev/materials`)
                        if (get_result.freedom != undefined) {
                            ini_txt = `*Characters :*\n${get_result.freedom.characters.join(", ")}\n\n`
                            ini_txt += `*Availability :*\n${get_result.freedom.availability.join(", ")}\n\n`
                            ini_txt += `*Source :*\n${get_result.freedom.source}`
                            await reply(ini_txt)
                        } else {
                            try {
                                ini_txt = `*Not Found*\n\n*Available materials :*\n${get_list.join(", ")}`
                                await reply(ini_txt)
                            } catch {
                                reply(ind.err())
                            }
                        }
                    } catch {
                        reply(ind.errs())
                    }
                    break
                case 'gination':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} liyue`)
                    query = args.join(" ")
                    try {
                        get_result = await fetchJson(`https://api.genshin.dev/nations/${query}`)
                        get_list = await fetchJson(`https://api.genshin.dev/nations`)
                        if (get_result.name != undefined) {
                            ini_txt = `*Name : ${get_result.name}*\n\n`
                            ini_txt += `*Element :* ${get_result.element}\n`
                            ini_txt += `*Archon :* ${get_result.element}\n`
                            ini_txt += `*ControllingEntity : ${get_result.controllingEntity}*`
                            await reply(ini_txt)
                        } else {
                            try {
                                ini_txt = `*Not Found*\n\n*Available nations :*\n${get_list.join(", ")}`
                                await reply(ini_txt)
                            } catch {
                                reply(ind.err())
                            }
                        }
                    } catch {
                        reply(ind.errs())
                    }
                    break
                case 'giweapon':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} amos-bow`)
                    query = args.join(" ")
                    try {
                        get_result = await fetchJson(`https://api.genshin.dev/weapons/${query}`)
                        get_list = await fetchJson(`https://api.genshin.dev/weapons`)
                        if (get_result.name != undefined) {
                            ini_txt = `*${get_result.name}*\n`
                            ini_txt += `*Obtained From :* ${get_result.location}\n\n`
                            ini_txt += `*Type :* ${get_result.type}\n`
                            ini_txt += `*Rarity :* ${get_result.rarity}\n`
                            ini_txt += `*Base ATK* : ${get_result.baseAttack}\n`
                            ini_txt += `*SubStat : ${get_result.subStat}*\n\n`
                            ini_txt += `*Passive : ${get_result.passiveName}*\n`
                            ini_txt += `${get_result.passiveDesc}`
                            await reply(ini_txt)
                        } else {
                            try {
                                ini_txt = `*Not Found*\n\n*Available weapons :*\n${get_list.join(", ")}`
                                await reply(ini_txt)
                            } catch {
                                reply(ind.err())
                            }
                        }
                    } catch {
                        reply(ind.errs())
                    }
                    break

				// New Fiture
				case 'tagsticker':
                case 'tagstiker':
                    if (!isOwner) return reply(ind.ownerb())
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await akira.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await akira.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        akira.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag sticker yang sudah dikirim`)
                    }
                    break
				
				case 'apikeycek':
				case 'cekapikey':
            		if (!isRegistered) return reply(ind.noregis())
                    if (!isOwner) return reply(ind.ownerb())
            		apiKey = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/checkapikey?apikey=${lol}`)
                    if (get_result.status == '200') {
                        get_result = get_result.result
                        txt = `User : ${get_result.username}\n`
                        txt += `Req : ${get_result.requests}\n`
                        txt += `Limit : ${get_result.today}\n`
                        txt += `Type : ${get_result.account_type}\n\n`
                        txt += `Expired : ${get_result.expired}\n\n`
                    reply(txt)
                    } else {
                        try {
                            akira.sendMessage(from, `${get_result.message}`, text, {quoted: mek})
                        } catch {
                            reply(ind.err())
                        }
                    }
                    break

                    // LAIN LAIN //
                case 'spamcall':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: *${prefix + command} 823xxxxxxxx*`)
                    if (isNaN(args[0])) return reply('Format Salah! ...')
                    call = body.slice(10)
                    if (call == "82337245566" || call == "85845982858") return reply('*Yahahaha Sekip :v*')
                    try {
                        anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/spamcall?no=${call}`, {method: 'get'})
                        if (anu.status == "200") {
                            akira.sendMessage(from, `${anu.logs}`, text, {quoted: mek})
                            await limitAdd(sender) 
                        } else if (anu.status != "200") {
                            akira.sendMessage(from, `${anu.msg}`, text, {quoted: mek})
                            await limitAdd(sender) 
                        } else {
                            reply(ind.err())
                        }
                    } catch {
                        reply(ind.errs())
                    }
                    break
                /*case 'spamemail':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} email|subjek|pesan`)
                    if (!q.includes('|')) return reply(ind.wrongf())
                    ini_nama = args.join(" ").split("|")
                    txt1 = ini_nama[0].trim()
                    txt2 = ini_nama[1].trim()
                    txt3 = ini_nama[2].trim()
                    if (txt1.length == 0) return reply('Email tidak boleh kosong')
                    if (txt2.length == 0) return reply('Isi dulu subjek nya')
                    if (txt3.length == 0) return reply('Pesannya apa?')
                    anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${txt1}&subjek=${txt2}&pesan=${txt3}`, {method: 'get'})
                    try {
                        if (anu.result.status == "200") {
                            akira.sendMessage(from, `${anu.result.log_lengkap}`, text, {quoted: mek})
                            await limitAdd(sender) 
                        } else {
                            akira.sendMessage(from, `${anu.result.pesan}`, text, {quoted: mek})
                        }
                    } catch {
                        reply(ind.err())
                    }
                    break*/
                /*case 'infonomor':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: *${prefix + command} 0823xxxxxxxx*`)
                    if (isNaN(args[0])) return reply('Nomer telpon sayang...')
                    call = body.slice(11)
                    if (call == "82337245566" || call == "082337245566") return reply('*Tanyain Sendiri :v*')
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${call}`, {method: 'get'})
                    try {
                        ini_txt = `*Nomor >> ${anu.nomor}*\n\n`
                        ini_txt += `Operator : *${anu.op}*`
                        reply(ini_txt)
                        await limitAdd(sender)
                    } catch {
                        reply(ind.err())
                    }
                    break*/
                   
                    // BOT CASE //
				case 'dompet':
    				if (isBanned) return reply(ind.baned())
    				if (!isRegistered) return reply(ind.noregis())
                    if (args.length != 0) return reply(ind.noneed())
    				const kantong = checkATMuser(sender)
    				reply(ind.uangkau(pushname, sender, kantong))
    				break

				    
                case 'wame':
  					 // Fix Bug By AKIRA				
                    if (!isRegistered) return reply( ind.noregis())
                    if (args.length != 0) return reply(ind.noneed())
  					if (isLimit(sender)) return reply(ind.limitend(pusname))
  					akira.updatePresence(from, Presence.composing) 
  					options = {
  					text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
  					contextInfo: { mentionedJid: [sender] }
  					}
  					akira.sendMessage(from, options, text, { quoted: mek } )
  					break
  					if (data.error) return reply(data.error)
  					reply(data.result)
					await limitAdd(sender)
                    break
                /*case 'ganteng':
					if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (args.length != 0) return reply(ind.noneed())
					membr = []
					const nus = groupMembers
					const msl = groupMembers
					const siapss = nus[Math.floor(Math.random() * nus.length)]
					const sipss = pushname[Math.floor(Math.random() * msl.length)]
					teks = `Yang paling Ganteng disini Adalah : @${siapss.jid.split('@')[0]}`
					membr.push(siapss.jid)
					mentions(teks, membr, true)
					break
                case 'beban':
					if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (args.length != 0) return reply(ind.noneed())
					membr = []
					const met = groupMembers
					const msd = groupMembers
					const siapsa = met[Math.floor(Math.random() * met.length)]
					const sipsd = pushname[Math.floor(Math.random() * msd.length)]
					teks = `Yang paling Beban disini Adalah : @${siapsa.jid.split('@')[0]}`
					membr.push(siapsa.jid)
					mentions(teks, membr, true)
					break
                case 'cantik':
					if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (args.length != 0) return reply(ind.noneed())
					membr = []
					const meo = groupMembers
					const msk = groupMembers
					const siaps = meo[Math.floor(Math.random() * meo.length)]
					const sips = pushname[Math.floor(Math.random() * msk.length)]
					teks = `Yang paling Cantik disini Adalah : @${siaps.jid.split('@')[0]}`
					membr.push(siaps.jid)
					mentions(teks, membr, true)
					break*/
                case 'buylimit':
				    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (args.length < 1) return reply(`Example: ${prefix + command} 2`)
                    if (q.includes('-') || q.includes('+')) return reply('Nominal Invalid...')
                    if (isNaN(args[0])) return reply('limit harus angka')
    				payout = body.slice(10)
                    if (payout == "0") return reply('Nominal Invalid...')
    				const koinPerlimit = 1000
    				const total = koinPerlimit * payout
    				if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
    				if ( checkATMuser(sender) >= total ) {
    					confirmATM(sender, total)
    					bayarLimit(sender, payout)
    					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Admin\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout}\n\n*Harga Limit* : ${koinPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran :\n*${createSerial(15)}*`)
    				} 
    				break

                    //CASE BADWORD
                 case 'addbadword':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix + command} [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    try {
                        bad.splice(dbw)
                        fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                        reply('Success Menghapus BAD WORD!')
                    } catch {
                        reply(`${dbw} Tidak ada dalam database ${prefix}listbadword`)
                    }
                    break 
                case 'listbadword':
                case 'badwordlist':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break
                case 'nobadword':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
					if (!isOwner) return reply(ind.ownerb())
					if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply('lel🗿')
                    if (args[0] === 'enable') {
                        if (isBadWord) return reply('*fitur BadWord sudah aktif tadi!!*')
                     	badword.push(from)
                     	fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                        reply(`badword is enable`)
                        } else if (args[0] === 'disable') {
                            badword.splice(from, 1)
                            fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                            reply(`badword is disable`)
                    } else {
                        reply(ind.satukos())
                	}
                    break
		//rules
                case 'rules':
                case 'rule':
                    if (args.length != 0) return reply(ind.noneed())
                    costum( rules(prefix), text, tescuk, cr)
                    break
                case 'menuanime':
                case 'animemenu':
                    if (args.length != 0) return reply(ind.noneed())
                    costum( menuanime(prefix, namabot), text, tescuk, cr)
                    break
                case 'menunsfw':
                case 'nsfwmenu':
                    if (args.length != 0) return reply(ind.noneed())
                    costum( menunsfw(prefix, namabot), text, tescuk, cr)
                    break
                case 'menuephoto':
                case 'ephotomenu':
                    if (args.length != 0) return reply(ind.noneed())
                    costum( menuephoto(prefix, namabot), text, tescuk, cr)
                    break
                case 'menuoxy':
                case 'oxymenu':
                    if (args.length != 0) return reply(ind.noneed())
                    costum( menuoxy(prefix, namabot), text, tescuk, cr)
                    break
                case 'menutextpro':
                case 'textpromenu':
                    if (args.length != 0) return reply(ind.noneed())
                    costum( menutextpro(prefix, namabot), text, tescuk, cr)
                    break
                case 'menueditor':
                case 'editormenu':
                    if (args.length != 0) return reply(ind.noneed())
                    costum( menueditor(prefix, namabot), text, tescuk, cr)
                    break
                case 'genshinmenu':
                case 'menugenshin':
                    if (args.length != 0) return reply(ind.noneed())
                    costum( menugenshin(prefix, namabot), text, tescuk, cr)
                    break
                case 'kodebahasa':
                case 'listbahasa':
                    if (args.length != 0) return reply(ind.noneed())
                    reply(ind.bahasa())
                    break

        		case 'delete':
        		case 'del':
        		case 'd':
                    if (!isGroup) return reply(ind.groupo())
                    if (!isBotGroupAdmins) return reply(ind.badmin())
                    if (args.length != 0) return reply(ind.noneed())
                    akira.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
                    break
				case 'transfer':
    				if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} @tag|nominal`)
    				if (!q.includes('|')) return reply(ind.wrongf())
                    const tujuan = q.substring(0, q.indexOf('|') - 1)
                    const jumblah = q.substring(q.lastIndexOf('|') + 1)
                    if (jumblah.includes('-') || jumblah.includes('+') || jumblah.length == 0) return reply('Nominal Invalid...')
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag orang yang mau ditransfer')
                    if(isNaN(jumblah)) return await reply('Jumlah harus berupa angka!!')
                    if (jumblah < 100 ) return reply(`minimal transfer 100`)
                    if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                    const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                    //fee = 0.005 *  jumblah
                    fee = 0
                    hasiltf = jumblah - fee
                    addKoinUser(tujuantf, hasiltf)
                    confirmATM(sender, jumblah)
                    addKoinUser('6282337245566@s.whatsapp.net', fee)
                    reply(`*「 SUKSES 」*\n\n*Pengirim :* +${sender.split("@")[0]}\n*Ke :* +${tujuan}\n\n*Jumlah :* ${jumblah}\n*Pajak :* ${fee}`)
                    break
				case 'limit':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (args.length != 0) return reply(ind.noneed())
                    checkLimit(sender)
					break
                case 'antilink':
                    if (!isGroup) return reply(ind.groupo())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (!isBotGroupAdmins) return reply(ind.badmin())                  
                    if (args.length < 1) return reply('Usage : .antilink 1')
                    if (Number(args[0]) === 1) {
                        if (isAntiLink) return reply('UDAH NYALA KAK')
                        antilink.push(from)
                        fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
                        reply('SUKSES MENGAKTIFKAN ANTI LINK GROUP')
                        akira.sendMessage(from,`*ALLERT!!!*\n\nJika bukan admin, akan di kick apabila mengirim link grup`, text)
                    } else if (Number(args[0]) === 0) {
                        if (!isAntiLink) return reply('EMANG AKTIF?')
                        antilink.splice(from, 1)
                        fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
                        reply('SUKSES MEMATIKAN ANTI LINK GROUP')
                    } else {
                        reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
                    }
                    break
                case 'nsfw':
                    if (!isGroup) return reply(ind.groupo())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (!isBotGroupAdmins) return reply(ind.badmin())                   
                    if (args.length < 1) return reply('Usage : .nsfw 1')
                    if (Number(args[0]) === 1) {
                        if (isNsfw) return reply('UDAH NYALA KAK')
                        nsfw.push(from)
                        fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
                        reply('SUKSES MENGAKTIFKAN NSFW GROUP')
                        akira.sendMessage(from,`*LEWD TIME!!!*`, text)
                    } else if (Number(args[0]) === 0) {
                        if (!isNsfw) return reply('EMANG AKTIF?')
                        nsfw.splice(from, 1)
                        fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
                        reply('SUKSES MEMATIKAN NSFW GROUP')
                    } else {
                        reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
                    }
                    break
				case 'setbotpp':
					if (!isOwner) return reply(ind.ownerb())
                    if (args.length != 0) return reply(ind.noneed())
				    akira.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await akira.downloadAndSaveMediaMessage(enmedia)
					await akira.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya,Wangy sekali😗')
					break
				case 'bcgc':
				    if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await akira.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							akira.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break
                case 'kickall':
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					akira.groupRemove(from, members_id)
					break 
				case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
                    			akira.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
				case 'blocklist':
                    if (args.length != 0) return reply(ind.noneed())
					teks = 'List Beban Kontak :\n'
					for (let block of blocked) {
						teks += `➢ @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					akira.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
        		case 'daftar':
                case 'verify':
                    if (isRegistered) return reply(ind.rediregis())
                    if (args.length != 0) return reply(ind.noneed())
                    const namaUser = "User"
                    const umurUser = "20"
                    const serialUser = createSerial(20)
                    pp_user = await getBuffer(`https://i.ibb.co/nnj9r41/866.jpg`)
                    veri = sender
                    if (isGroup) {
                        addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                        await akira.sendMessage(from, pp_user, image, {quoted: mek, caption: ind.registered(prefix, namaUser, umurUser, serialUser, time, sender)})
                        //reply('Terima Kasih Sudah Absen')
                        addATM(sender)
                        addLevelingId(sender)
                        console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                    } else {
                        addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                        await akira.sendMessage(from, pp_user, image, {quoted: mek, caption: ind.registered(prefix, namaUser, umurUser, serialUser, time, sender)})
                        //reply('Terima Kasih Sudah Daftar')
                        addATM(sender)
                        addLevelingId(sender)
                        console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                    }
    				break
            	case 'mining':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    if (!isEventon) return reply(`Maaf kak *${pushname}*, event mining tidak di aktifkan oleh Owner`)
                    if (isOwner) {
                        const one = 999999999
                        addLevelingXp(sender, one)
                        addLevelingLevel(sender, 99)
                        reply(`Nih Untukmu Owner♥ ${one}Xp `)
                    } else {
                        const mining = Math.ceil(Math.random() * 10000)
                        addLevelingXp(sender, mining)
                        await reply(`*Selamat* ${pushname}, kamu mendapatkan *${mining} XP*`)
                    }
                    await limitAdd(sender)
					break
				case 'bisakah':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					akira.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					break
                case 'kapankah':
                case 'kapan':
				    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					kapankah = body.slice(1)
					const kapan =["Besok","Lusa","Tadi","4 Hari Lagi","5 Hari Lagi","6 Hari Lagi","1 Minggu Lagi","2 Minggu Lagi","3 Minggu Lagi","1 Bulan Lagi","2 Bulan Lagi","3 Bulan Lagi","4 Bulan Lagi","5 Bulan Lagi","6 Bulan Lagi","1 Tahun Lagi","2 Tahun Lagi","3 Tahun Lagi","4 Tahun Lagi","5 Tahun Lagi","6 Tahun Lagi","1 Abad lagi","3 Hari Lagi","Tidak Akan Pernah"]
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					akira.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					break
                case 'apakah':
                case 'apa':
         			if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					apakah = body.slice(1)
					const apa =["Iya","Tidak","Bisa Jadi","Gatau","Ga mungkin","Coba Ulangi"]
					const kah = apa[Math.floor(Math.random() * apa.length)]
					akira.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					break
                case 'readmore':
                case 'more':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Hai beb|an keluarga`)
                    if (!q.includes('|')) return reply(ind.wrongf())
                    ini_nama = args.join(" ").split("|")
                    txt1 = ini_nama[0].trim()
                    txt2 = ini_nama[1].trim()
                    if (txt1.length == 0) return reply('Teks pertama tidak boleh kosong')
                    if (txt2.length == 0) return reply('Teks kedua tidak boleh kosong')
                    const more = String.fromCharCode(8206)
                    const readmore = more.repeat(4001)
                    reply( txt1 + readmore + txt2)
                    break
				case 'pbucin':
				    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
           			if (isLimit(sender)) return reply(ind.limitend(pusname))
    				if (args.length < 1) return reply('Mana Nama?')
    				rate = body.slice(8)
    				const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)]
    				akira.sendMessage(from, 'Persen Bucin Kak: *'+rate+'*\n\nJawaban : '+ pbucin +'', text, { quoted: mek })
    				break

                case 'ping':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    //await akira.sendMessage(from, `Pong!!!!\nSpeed: ${processTime(time, moment())} _Second_`)
                    await akira.sendMessage(from, 'Pong!!!!', text, {quoted:mek})
                    break 
               	case 'help': 
               	case 'menu':
                    if (!isRegistered) return reply( ind.noregis())
				    if (isBanned) return reply(ind.baned())
                    if (args.length != 0) return reply(ind.noneed())
					const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					const uangku = checkATMuser(sender)
                    wew = fs.readFileSync(`./akiraganz/logo.jpg`)
                    uptime = process.uptime()
		            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                    myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
                    var tgl = new Date();
                    detik = tgl.getSeconds();
                    menit = tgl.getMinutes();
                    jam = tgl.getHours();
                    var ampm = jam >= 12 ? 'PM' : 'AM';
                    var day = tgl.getDate()
                    bulan = tgl.getMonth()
                    var thisDay = tgl.getDay(),
                    thisDay = myDays[thisDay];
                    var yy = tgl.getYear()
                    var year = (yy < 1000) ? yy + 1900 : yy;
                    const tanggal = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
                    // const ramadhan = await axios.get('https://xinzbot-api.herokuapp.com/api/hitungmundur?apikey=XinzBot&tanggal=12&bulan=4')
                    // const ucapan = await axios.get('https://xinzbot-api.herokuapp.com/api/ucapan?apikey=XinzBot&timeZone=Asia/Jakarta')
                    databaseuhy = `
╔═══ *「 ${namabot} 」* 
║
║⸨ *ᴘʀᴇғɪx sᴀᴀᴛ ɪɴɪ : ${prefix}* ⸩
║▬▭▬▭▬▭▬▭▬▭
║⧐ ⸨ *${prefix}owner* ⸩
║⧐ ⸨ *${prefix}info* ⸩
║⧐ ⸨ *${prefix}rules* ⸩
║▬▭▬▭▬▭▬▭▬▭
╠═════════════════❍
║⧐ *Registered User : ${_registered.length}*
╚═════════════════════

╭───「 *PROFILMU* 」
├ • Nama  : ${pushname}
├ • Nomor : @${sender.split('@')[0]}
├ • Uang  : Rp${uangku}
├ • Role  : ${role}
├ • Level : ${getLevelingLevel(sender)}
├ • XP    : ${getLevelingXp(sender)}
│
├──「 ▶️ *SUB MENU* 」 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
${menus(prefix, namabot)}
` 
                    akira.sendMessage(from, databaseuhy, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "BunnyWalker Bot", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('akiraganz/fake.jpg')} } }})
					break
				case 'donasi':
				case 'donate':
    				if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
					akira.sendMessage(from, donasi(), text)
					break
                case 'level':
                case 'lvl':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (!isLevelingOn) return reply(ind.lvlnoon())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
                    const userLevel = getLevelingLevel(sender)
                    const userXp = getLevelingXp(sender)
                    if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                    const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                    resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ *Nama* : ${pushname}\n┣⊱ Nomor : wa.me/${sender.split("@")[0]}\n┣⊱ User XP :  ${userXp}/${requiredXp}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
                    akira.sendMessage(from, resul, text, { quoted: mek})
                    .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					break
				case 'leaderboard':
				case 'lb':
    				if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
    				if (!isGroup) return reply(ind.groupo())
                    if (args.length != 0) return reply(ind.noneed())
    				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                    let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                    //let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                    let nom = 0
                    try {
                        for (let i = 0; i < 10; i++) {
                            nom++
                            leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                            //leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n┗⊱ *Limit*: ${limitawal - _limit[i].limit}\n`
                        }
                        await reply(leaderboardlvl)
                        //await reply(leaderboarduang)
                    } catch (err) {
                        console.error(err)
                        await reply(`minimal 10 user untuk bisa mengakses database`)
                    }
					break
				case 'info':
				case 'ingfo':
                    if (args.length != 0) return reply(ind.noneed())
					me = akira.user
					uptime = process.uptime()
					teks = `\n ✿━⊱❉ *${namabot}* ❉⊰━✿\n\n*Owner : Z E R E N I T Y*\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block* : ${blocked.length}\n*Bot aktif selama* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					akira.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist': 
					teks = '𝗕𝗟𝗢𝗖𝗞 𝗟𝗜𝗦𝗧 :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
					akira.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                case 'hidetag':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await akira.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
                        mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
    					text: value,
    					contextInfo: { mentionedJid: mem },
    					quoted: mek
					}
					akira.sendMessage(from, options, text)
					await limitAdd(sender)
					break
				case 'setmemberlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('limit harus angka')
                    memberlimit = args[0]
                    reply(`memberlimit berhasil diubah menjadi ${memberlimit}`)
                    break
				
                /*case 'truth':
                    if (!isRegistered) return reply(ind.noregis())
                    if (args.length != 0) return reply(ind.noneed())
                    const ttrth = _truth[Math.floor(Math.random() * _truth.length)]
            		truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
            		akira.sendMessage(from, truteh, image, { caption: '*TRUTH*\n\n'+ ttrth, quoted: mek })
            		break
        		case 'dare':
        		if (!isRegistered) return reply(ind.noregis())
                if (args.length != 0) return reply(ind.noneed())
            		const der = _dare[Math.floor(Math.random() * _dare.length)]
            		tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
            		akira.sendMessage(from, tod, image, { quoted: mek, caption: '*DARE*\n\n'+ der })
            		break*/
					//ANTI VIRTEX BY AKIRA
                case 'antivirtex':
                    if (!isGroup) return reply(ind.groupo())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (!isBotGroupAdmins) return reply(ind.badmin())                   
                    if (args.length < 1) return reply('Usage : .antivirtex 1')
                    if (Number(args[0]) === 1) {
                        if (isAntiVirtex) return reply('UDAH NYALA KAK')
                        antivirtex.push(from)
                        fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(antivirtex))
                        reply('SUKSES MENGAKTIFKAN ANTI VIRTEX')
                        akira.sendMessage(from,`*ALLERT!!!*\n\nJIKA KIRIM TEXT CHAT YANG BERPOTENSI BIKIN NGEMLAG MAKA AKAN DI KICK!!`, text)
                    } else if (Number(args[0]) === 0) {
                        if (!isAntiVirtex) return reply('EMANG AKTIF?')
                        antivirtex.splice(from, 1)
                        fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(antivirtex))
                        reply('SUKSES MEMATIKAN ANTI VIRTEX')
                    } else {
                        reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
                    }
                    break
				case 'ban':
					if (!isOwner) return reply(ind.ownerb())
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
					break
				case 'unban':
					if (!isOwner) return reply(ind.ownerb())
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
                case 'stiker': 
                case 'sticker':
                case 's':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (args.length != 0) return reply(ind.noneed())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (!isGroup) return reply(ind.groupo())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                        const media = await akira.downloadAndSaveMediaMessage(encmedia)
                        ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .input(media)
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                reply(ind.stikga())
                            })
                            .on('end', function () {
                                console.log('Finish')
                                exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
                                    //if (error) {
                                            // reply(ind.stikga())
                                            // fs.unlinkSync(media) 
                                            // fs.unlinkSync(ran)
                                            // }
                                    akira.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                                    fs.unlinkSync(media)    
                                    fs.unlinkSync(ran)  
                                })
                            })
                            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                        const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                        const media = await akira.downloadAndSaveMediaMessage(encmedia)
                        ran = getRandom('.webp')
                        /*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
                        await ffmpeg(`./${media}`)
                            .inputFormat(media.split('.')[1])
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                reply(ind.stikga())
                            })
                            .on('end', function () {
                                console.log('Finish')
                                exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
                                    //if (error) {
                                            // reply(ind.stikga())
                                            // fs.unlinkSync(media) 
                                            // fs.unlinkSync(ran)
                                            // }
                                    akira.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                                    fs.unlinkSync(media)
                                    fs.unlinkSync(ran)
                                })
                            })
                            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else {
                        reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
                    }
                    break
                /*case 'takestick':
                case 'curistiker':
                    if (!isGroup) return reply(ind.groupo())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (!isBotGroupAdmins) return reply(ind.badmin())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Peko|Bot`)
                    if (!q.includes('|')) return reply(ind.wrongf())
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await akira.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${lol}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            akira.sendMessage(from, ini_buff, sticker, { quoted: mek })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break*/
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break
                 case 'linkgc':
                 case 'linkgroup':
                 case 'linkgrup':
                 case 'grouplink':
                 case 'gruplink':
                 case 'gclink':
				    if (!isGroup) return reply(ind.groupo())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isBotGroupAdmins) return reply(ind.badmin())
                    if (args.length != 0) return reply(ind.noneed())
                    if (isAntiLink) return reply('ANTI LINK MASIH AKTIP OM')
				    linkgc = await akira.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    akira.sendMessage(from, yeh, text, {quoted: mek})
					break
				case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `┣➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await akira.chats.all()
					akira.setMaxListeners(25)
					for (let _ of anu) {
						akira.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
                case 'block':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
                    akira.updatePresence(from, Presence.composing) 
                    akira.chatRead (from)
                    akira.blockUser (`${body.slice(7)}@c.us`, "add")
                    akira.sendMessage(from, `Perintah Diterima, Memblokir ${body.slice(7)}@c.us`, text)
					break
                case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    akira.blockUser (`${body.slice(10)}@c.us`, "remove")
					akira.sendMessage(from, `Perintah diterima, Membuka ${body.slice(10)}@c.us`, text)
					break
				case 'leave': 
    				if (!isGroup) return reply(ind.groupo())
    				if (!isOwner) return reply(ind.ownerb())
    				await reply(from, 'bye').then(() => akira.groupLeave(from))
					break
				case 'leave': 
    				if (!isGroup) return reply(ind.groupo())
    				if (!isOwner) return reply(ind.ownerb())
    				await reply(from, 'bye').then(() => akira.groupLeave(from))
					break 
				case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await akira.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await akira.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							akira.sendMessage(_.jid, buff, image, {caption: `*_Changelog v3 :_*\n\n${body.slice(4)}`})
						}
						reply('*_succes broadcast_* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*_Changelog v3 :_*\n\n${body.slice(4)}`)
						}
						reply('*_succes broadcast_* ')
					}
					break
			   	case 'setpp': 
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await akira.downloadAndSaveMediaMessage(mek)
                         await akira.updateProfilePicture (from, media)
                        reply('[SUKSES] Mengganti icon grub')
					break						
				case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						akira.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'grup':
				case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						akira.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP`)
						akira.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
                case 'admin':
                case 'owner':
                case 'creator':
                    akira.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                    break  
                case 'setname':
                    if (!isGroup) return reply(ind.groupo())
    			    if (!isGroupAdmins) return reply(ind.admin())
    				if (!isBotGroupAdmins) return reply(ind.badmin())
                    akira.groupUpdateSubject(from, `${body.slice(9)}`)
                    akira.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
    				break
                case 'setdesc':
                    if (!isGroup) return reply(ind.groupo())
    			    if (!isGroupAdmins) return reply(ind.admin())
    				if (!isBotGroupAdmins) return reply(ind.badmin())
                    akira.groupUpdateDescription(from, `${body.slice(9)}`)
                    akira.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break
                case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di tendang!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Status adminmu dicopot. Makanya jan jadi sider 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						akira.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`YA YAHYA WAHYU @${mentioned[0].split('@')[0]} Jabatan adminmu di copt, Makanya jan jadi sider🏃`, mentioned, true)
						akira.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di tendang!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Selamat 🥳 Anda naik menjadi Admin Grup (+_+) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						akira.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Selamat 🥳 @${mentioned[0].split('@')[0]} anda naik menjadi Admin Grup (+_+)`, mentioned, true)
						akira.groupMakeAdmin(from, mentioned)
					}
					break
                case 'setlimit':
                case 'addlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('limit harus angka')
                    limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break
                case 'setnamabot':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    namabot = args[0]
					reply(`*Nama Bot berhasil di ubah menjadi* : ${namabot}`)
					break	
                case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag Target yang ingin di Tendang!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    var kiklah = `${sender.split("@")[0]}@s.whatsapp.net`
                    if (!isGroupAdmins && (mentioned == tescuk2[0] || mentioned == tescuk2[1] || mentioned == tescuk2[2])) {
                        reply(`Mengresahkan... 🤹‍♂️`)
                        await sleep(3000)
                        akira.groupRemove(from, [kiklah])
                    }
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (mentioned == tescuk2[0] || mentioned == tescuk2[1] || mentioned == tescuk2[2]) return reply('*Jan gitu pak :v*')
                    if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Asek dapat makanan,otw mengkickmu, 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						akira.groupRemove(from, mentioned)
					} else {
						mentions(`asek dapat makanan,otw mengkickmu, @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
						akira.groupRemove(from, mentioned)
					}
					break
				case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin of group *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                    //no group feature
                case 'mutual':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
                    anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                    await reply('Looking for a partner...')
                    await reply(`wa.me/${anug}`)
                    await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
               	    break
                case 'next':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
                    anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                    await reply('Looking for a partner...')
                    await reply(`wa.me/${anug}`)
                    await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
                    break
				case 'toimg':
    				if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
    				if (!isQuotedSticker) return reply('Reply/tag sticker !')
					/*reply(ind.wait())*/ akira.sendMessage(from,`*「 WAIT 」 DON'T SPAM*`, text)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await akira.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						akira.sendMessage(from, buffer, image, {quoted: mek, caption: 'tuh dh jadi '})
						fs.unlinkSync(ran)
					})
					break
				case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('SUDAH AKTIF !!!')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ SUKSES ❭ MENGAKTIFKAN FITUR SIMI DI GRUB INI')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ SUKSES ❭ MENONAKTIFKAN FITUR SIMI DI GRUB INI')
					} else {
						reply(ind.satukos())
					}
					break
                case 'leveling':
                    if (!isGroup) return reply(ind.groupo())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply('Boo :𝘃')
                    if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                    } else if (args[0] === 'disable') {
                        _leveling.splice(from, 1)
                        fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                         reply(ind.lvloff())
                    } else {
                        reply(ind.satukos())
                    }
					break
				case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*SUDAH AKTIF* !!!')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUKSES ❭ Mengaktifkan fitur Welcome/Left di grub ini')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUKSES ❭ Menonaktifkan Welcome/Left di grub ini')
					} else {
						reply(ind.satukos())
					}
					break
                case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*SUDAH AKTIF* !!!')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ SUKSES ❭ MENGAKTIFKAN EVENT DI GRUB INI*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ SUKSES ❭ MENONAKTIFKAN EVENT DI GRUB INI*')
					} else {
						reply(ind.satukos())
					}
					break
					
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cuk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await akira.getProfilePicture(id)
						buffer = await getBuffer(pp)
						akira.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					break
					
				
                default:
                    if (budy.includes(`assalamualaikum`)) {
                    reply(`Waalaikumsalam`)
                    }

                    if (budy.includes(`Assalamualaikum`)) {
                    reply(`Waalaikumsalam`)
                    }

                    if (budy.includes(`Ngentod`)) {
                    reply(`Jaga Omongan 😡`)
                    }

                    if (budy.includes(`Thanks`)) {
                    reply(`Sama Sama Kak 😁`)
                    }

                    if (budy.includes(`Makasih`)) {
                    reply(`Sama Sama Kak 😁`)
                    }

                    if (body.startsWith(`${prefix}${command}`)) {

                    //reply(`*${pushname}*, Command *${prefix}${command}* Tidak Ada Di Dalam *${prefix}menu ${namabot}*`)
                    console.log(color('[INV]','yellow'), ('Invalid Command','red'), color(sender.split('@')[0]))
            		//const none = fs.readFileSync('./mp3/ara.mp3');
            		//akira.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

                    }
                    if (!isGroup && !isCmd && !isMedia && !isQuotedImage && !isQuotedVideo && !isQuotedSticker && !isMediaStik) {
                        await akira.updatePresence(from, Presence.composing)
                        simi = await fetchJson(`https://api.simsimi.net/v1/?text=${budy}&lang=id`)
                        reply(simi.success)
                    }
                }
                if (isGroup && !isCmd && isSimi && budy != undefined && !isMedia && !isQuotedImage && !isQuotedVideo && !isQuotedSticker && !isMediaStik) {
					console.log(budy)
                    budyen = encodeURI(budy)
					muehe = await simih(budyen)
                    reply(muehe)
				} else {
					console.log(color('[PBot]','yellow'), ('Command Tidak Ditemukan!!','red'), color(sender.split('@')[0]))
				}
            } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
