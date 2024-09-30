/*


# Owner ? : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖓


*/
const {
samConnect,
downloadContentFromMessage,
emitGroupParticipantsUpdate,
emitGroupUpdate,
generateWAMessageContent,
generateWAMessage,
makeInMemoryStore,
prepareWAMessageMedia,
generateWAMessageFromContent,
MediaType,
areJidsSameUser,
WAMessageStatus,
downloadAndSaveMediaMessage,
AuthenticationState,
GroupMetadata,
initInMemoryKeyStore,
getContentType,
MiscMessageGenerationOptions,
useSingleFileAuthState,
BufferJSON,
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
MessageTypeProto,
WALocationMessage,
ReconnectMode,
WAContextInfo,
proto,
WAGroupMetadata,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WAGroupInviteMessage,
WATextMessage,
WAMessageContent,
WAMessage,
BaileysError,
WA_MESSAGE_STATUS_TYPE,
MediaConnInfo,
URL_REGEX,
WAUrlInfo,
WA_DEFAULT_EPHEMERAL,
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
Browsers,
GroupSettingChange,
DisconnectReason,
WASocket,
getStream,
WAProto,
isBaileys,
AnyMessageContent,
fetchLatestBaileysVersion,
templateMessage,
InteractiveMessage,
Header
} = require("@whiskeysockets/baileys")
//=================================================//
const axios = require("axios")
const os = require("os").cpus().length
const util = require("util")
const jimp = require("jimp")
const fetch = require("node-fetch")
const speed = require("performance-now")
const moment = require("moment-timezone")
const pino = require("pino")
const { spawn: spawn, exec } = require("child_process")
const { Primbon } = require("scrape-primbon")
const primbon = new Primbon()
const fg = require("api-dylux")
const path = require("path")
const cheerio = require("cheerio")
const chalk = require("chalk")
const { color } = require("./lib/color")
const FormData = require("form-data")
const crypto = require("crypto")
const bochil = require("@bochilteam/scraper")
const fakeUA = require("fake-useragent")
const randomUA = fakeUA().toString()
const fs = require("fs")
let Button = require("./dtbs/button");

let btn = new Button();
module.exports = sam = handler = async (sam, m, chatUpdate, store) => {
try {
//=================================================//
var body = m.mtype === "conversation" ? m.message.conversation : m.mtype === "imageMessage" ? m.message.imageMessage.caption : m.mtype === "videoMessage" ? m.message.videoMessage.caption : m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.message.interactiveResponseMessage?.nativeFlowResponseMessage || m.text : ""
//=================================================//
require("./dtbs/config")
const {
smsg,
getGroupAdmins,
formatp,
h2k,
tanggal,
formatDate,
getTime,
isUrl,
sleep,
clockString,
msToDate,
sort,
toNumber,
enumGetKey,
runtime,
fetchJson,
getBuffer,
jsonformat,
delay,
format,
logic,
generateProfilePicture,
parseMention,
getRandom,
pickRandom
} = require("./lib/myfunction")

//=================================================//

var budy = (typeof m.text == "string" ? m.text : "")
const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/
const prefix = prefa && prefixRegex.test(body) ? body.match(prefixRegex)[0] : (prefa ?? global.prefix)
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : ""
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == "buttonsMessage") ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == "templateMessage") ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == "product") ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ""
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
//User
const botNumber = await sam.decodeJid(sam.user.id)
const itsMe = m.sender == botNumber ? true : false
const itsOrkay = JSON.parse(fs.readFileSync(path.resolve(__dirname, './dtbs/premium.json'), 'utf8'))
const kontributor = JSON.parse(fs.readFileSync(path.resolve(__dirname, './dtbs/owner.json'), 'utf8'))
const isDeveloper = [ botNumber, ...kontributor, ...global.ownMain ].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
const isPremium = [ botNumber, ...kontributor, ...itsOrkay, ...global.ownMain ].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)

//=================================================//
const from = m.chat;
//

//=================================================//
if (!sam.public) {
    if (!isDeveloper) return
}

//sam.public = false
//=================================================//
async function exifAvatar(buffer, packname, author, categories = [''], extra = {}) {
    const {
        default: {
            Image
        }
    } = await import('node-webpmux')
    const img = new Image()
    const json = {
        'sticker-pack-id': 'parel-kntll',
        'sticker-pack-name': packname,
        'sticker-pack-publisher': author,
        'emojis': categories,
        'is-avatar-sticker': 1,
        ...extra
    }
    let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
    let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
    let exif = Buffer.concat([exifAttr, jsonBuffer])
    exif.writeUIntLE(jsonBuffer.length, 14, 4)
    await img.load(buffer)
    img.exif = exif
    return await img.save(null)
}
//=================================================//
async function addExif(webpSticker, packname, author, categories = [''], extra = {}) {
    const img = new webp.Image()
    const stickerPackId = Crypto.randomBytes(32).toString('hex')
    const json = {
        'sticker-pack-id': stickerPackId,
        'sticker-pack-name': packname,
        'sticker-pack-publisher': author,
        'emojis': categories,
        ...extra
    }
    let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
    let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
    let exif = Buffer.concat([exifAttr, jsonBuffer])
    exif.writeUIntLE(jsonBuffer.length, 14, 4)
    await img.load(webpSticker)
    img.exif = exif
    return await img.save(null)
}
//=================================================//
async function addExifAvatar(buffer, packname, author, categories = ["🥀"], extra = {}, ) {
    const {
        default: {
            Image
        },
    } = await import("node-webpmux")
    const img = new Image()
    const json = {
        "sticker-pack-id": "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2",
        "sticker-pack-name": packname,
        "sticker-pack-publisher": author,
        emojis: categories,
        "is-ai-sticker": 1,
        "android-app-store-link": 'https://play.google.com/store/apps/details?id=com.snowcorp.stickerly.android',
        "ios-app-store-link": 'https://play.google.com/store/apps/details?id=com.snowcorp.stickerly.android',
        ...extra,
    }
    let exifAttr = Buffer.from([
        0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57,
        0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00,
    ])
    let jsonBuffer = Buffer.from(JSON.stringify(json), "utf8")
    let exif = Buffer.concat([exifAttr, jsonBuffer])
    exif.writeUIntLE(jsonBuffer.length, 14, 4)
    await img.load(buffer)
    img.exif = exif
    return await img.save(null)
}
//=================================================//
let resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}
//=================================================//
const reaction = async (jidss, emoji) => {
    sam.sendMessage(jidss, {
        react: {
            text: emoji,
            key: m.key
        }
    })
}
//=================================================//
async function crtImg(url) {
    const { imageMessage } = await generateWAMessageContent({
        image: { url }
        }, {
            upload: sam.waUploadToServer
        })
    return imageMessage
}
//=================================================//
async function loadings () {
var lod = [
"> 𝐇𝐞𝐥𝐥𝐨 𝐇𝐮𝐦𝐚𝐧 🇰🇪",
"> 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐦𝐲 𝐆𝐫𝐞𝐚𝐭𝐞𝐬𝐭 𝐌𝐚𝐬𝐭𝐞𝐫 🕊️",
"> 𝐇𝐚𝐩𝐩𝐲 𝐓𝐨 𝐒𝐞𝐫𝐯𝐞 𝐘𝐨𝐮 🦋",
"> 𝐄𝐧𝐣𝐨𝐲 💥 ",
]
let { key } = await sam.sendMessage(from, {text: ''})

for (let i = 0; i < lod.length; i++) {
await sam.sendMessage(from, {text: lod[i], edit: key });
}
	 }
//================================================//
async function crtVid(url) {
    const { videoMessage } = await generateWAMessageContent({
        image: { url }
        }, {
            upload: sam.waUploadToServer
        })
    return videoMessage
}
//=================================================//
async function prM(params) {
    return await prepareWAMessageMedia(params, { upload: sam.waUploadToServer })
}
//=================================================//
const reply = async (teks) => {
    await sleep(500)
    return sam.sendMessage(m.chat, {
        contextInfo: {
            mentionedJid: [
                m.sender
            ],
            externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: false,
                title: `𝐏𝐁𝐕-𝐕1🦄`,
                body: `𝐛𝐲 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                previewType: "VIDEO",
                thumbnailUrl: `https://telegra.ph/file/7f1e9da89011736a82473.jpg`,
                sourceUrl: `${global.url1}`,
                mediaUrl: `${global.url1}`
            }
        },
        text: teks
    }, {
        quoted: m
    })
    await sleep(500)
}
//=================================================//

let handled = false
//=================================================//
if (m.message) {
    console.log(chalk.green.bgHex("#e74c3c").bold(`\n💫 ✨ 💫`))
    console.log(chalk.green.bgHex("#e74c3c").bold(`✉️ Message`))
    console.log(chalk.black.bgHex("#00FF00")(`📅 Date: ${new Date().toLocaleString()} \n💬 Message: ${m.body || m.mtype} \n🗣️ From: ${m.pushName} \n🔢 User JID: ${m.sender}`))
    if (m.isGroup) {
        console.log(chalk.black.bgHex("#00FF00")(`🏷️ Grup: `))
        console.log(chalk.black.bgHex("#00FF00")(`🧷 GroupJid: ${m.chat}`))
    }

}

if (!handled) {
switch (command) {
//=================================================//
case 'menu': case 'test':{
await loadings()
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let nest = ` 
     💥 𝐏𝐁𝐕-𝐕1 💥
   ━━━━━━━━━━━━━━━━━

   ◉ 𝙷𝚎𝚕𝚕𝚘 ${m.pushName} 𝙼𝚊𝚜𝚝𝚎𝚛 𝙸 𝚊𝚖 𝚑𝚊𝚙𝚙𝚢 𝚝𝚘 𝚜𝚎𝚛𝚟𝚎 𝚢𝚘𝚞 ,𝙷𝚘𝚙𝚎 𝚢𝚘𝚞 𝚠𝚒𝚕𝚕 𝚎𝚗𝚓𝚘𝚢 𝚖𝚢 𝚜𝚎𝚛𝚟𝚒𝚌𝚎𝚜
  ━━━━━━━━━━━━━━━━━━
 
  ⦁ 𝐏𝐫𝐞𝐟𝐢𝐱 : ${prefix}
  ⦁ 𝐏𝐁𝐕 𝐒𝐩𝐞𝐞𝐝 : ${latensi.toFixed(4)}
  ⦁ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${run}
 
 ━━━━━━━━━━━━━━━━━━
➵ 𝚞𝚗𝚕𝚒
➵ 8𝚐𝚋
➵ 7𝚐𝚋
➵ 6𝚐𝚋
➵ 5𝚐𝚋
➵ 4𝚐𝚋
➵ 3𝚐𝚋
➵ 2𝚐𝚋
➵ 1𝚐𝚋
➵ 𝚊𝚍𝚍𝚜𝚛𝚟
➵ 𝚙𝚊𝚗𝚎𝚕
 ━━━━━━━━━━━━━━━━━━
> 𝐁𝐘 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
sam.sendMessage(m.chat, { 
	           text: nest,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝐏𝐁𝐕-𝐕1`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/7f1e9da89011736a82473.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
///
case "addsrv": {
if (!isDeveloper) return reply(`You are not my owner`)
let s = text.split(',');
if (s.length < 7) return reply(`> *Incorrect format!*

❗ Usage:
${prefix + command} panel name, date, user ID you want to add the server to, eggId, locationId, memory/disk, cpu

\`✅ Example\` : addsrv psnel,26 December 2018,1,15,1,0/0,0
`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name + ' King-Sam',
"description": 'Create with ' + namabot,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`
❗ *SUCCESSFULLY ADD SERVER*

TYPE: \`${res.object}\`

ID: \`${server.id}\`
UUID: ${server.uuid}\`
NAME: ${server.name}\`
DESCRIPTION: \`${server.description}\`
MEMORY: \`${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB\`
DISK: \`${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB\`
CPU: \`${server.limits.cpu}%\`
CREATED AT: ${server.created_at}\``)
}
break
case'panel':{
if (!isDeveloper) return reply(mess.owner)
if (!text) return reply(`*Example:* ${prefix + command} username number`)
 

				

				

			
    

   let sections = [{ 
                    title: 'List Ram', sections: [{
                        title: "Please Select Available Ram",
                        rows: [
                            {
                                title: "Panel 1gb",
                                description: "📦 Panel Pterodactyl 1GB",
                                id: `.1gb ${text}`
                                }]
                            },
                            {
                                title: "panel 2gb",
                                description: "📦 Panel Pterodactyl 2GB",
                                id: `.2gb ${text}`
                            },
                            {
                                title: "panel 3gb",
                                description: "📦 Panel Pterodactyl 3GB",
                                id: `.3gb ${text}`
                            },
                            {
                                title: "panel 4gb",
                                description: "📦 Panel Pterodactyl 4GB",
                                id: `.4gb ${text}`
                            },
                            {
                                title: "panel 5gb",
                                description: "📦 Panel Pterodactyl 5GB",
                                id: `.5gb ${text}`
                            },
                            {
                                title: "panel 6gb",
                                description: "📦 Panel Pterodactyl 6GB",
                                id: `.6gb ${text}`
                            },
                            {
                                title: "panel 7gb",
                                description: "📦 Panel Pterodactyl 7GB",
                                id: `.7gb ${text}`
                            },
                            {
                                title: "panel 8gb",
                                description: "📦 Panel Pterodactyl 8GB",
                                id: `.8gb ${text}`
                            },
                            {
                                title: "panel Unli",
                                description: "📦 Panel Pterodactyl Unlimited",
                                id: `.unli ${text}`
                            }
                        ]
                    }]
                
}
break
case "1gb": {
let t = text.split(' ');
if (!isDeveloper) return 
if (t.length < 2) return reply(`*Example*: ${prefix + command} user Number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.egg
let loc = global.location
let memo = "1048"
let cpu = "50"
let disk = "1000"
let email = username + "1398@gmail.com"
if (!u) return
let d = (await sam.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
const fetch = require('node-fetch')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `
━━━━━━━━━━━━━━━━━━━━━
Hello @${m.sender.split('@')[0]}
━━━━━━━━━━━━━━━━━━━━━
  *PBV PANEL DETAILS*
━━━━━━━━━━━━━━━━━━━━━
Bot Sends Panel Data Only 1x 
⦁ Guarantee only 1x
⦁ DDoS, or using SC DDoS is prohibited, because it can cause the panel to go down or affect the panel
━━━━━━━━━━━━━━━━━━━━━
    𝙇𝙊𝙂𝙄𝙉 𝘿𝙀𝙏𝘼𝙄𝙇𝙎
━━━━━━━━━━━━━━━━━━━━━
◈ 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴 : ${user.username}
━━━━━━━━━━━━━━━━━━━━━
◈ 𝙿𝙰𝚂𝚂𝚆𝙾𝚁𝙳 : ${password}
━━━━━━━━━━━━━━━━━━━━━
◈ 𝚄𝚁𝙻 : ${domain}
━━━━━━━━━━━━━━━━━━━━━
    𝙎𝙀𝙍𝙑𝙀𝙍 𝘿𝙀𝙏𝘼𝙄𝙇𝙎 :
━━━━━━━━━━━━━━━━━━━━━
➟ 𝙳𝙸𝚂𝙺  : ${disk}
➟ 𝙲𝙿𝚄 : ${cpu}
➟ 𝙼𝙴𝙼𝙾𝚁𝚈 : ${memo}
━━━━━━━━━━━━━━━━━━━━━
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
`
sam.sendMessage(u, { image: { url: 'https://telegra.ph/file/7f1e9da89011736a82473.jpg' }, caption: ctf }, { quoted: m })

let data2 = await f2.json();
let startup_cmd = data2 && data2.attributes && data2.attributes.startup ? data2.attributes.startup : "";
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUCCESSFUL SERVER CREATION✅*

*ID SERVER : ${server.id}*

To Delete Server, please type _.delsrv server id_
`)
}
break        
        
case "2gb": {
let t = text.split(' ');
if (!isDeveloper) return 
if (t.length < 2) return reply(`*Example*: ${prefix + command} user Number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.egg
let loc = global.location
let memo = "2048"
let cpu = "75"
let disk = "2000"
let email = username + "1398@gmail.com"
if (!u) return
let d = (await sam.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
const fetch = require('node-fetch')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `━━━━━━━━━━━━━━━━━━━━━
Hello @${m.sender.split('@')[0]}
━━━━━━━━━━━━━━━━━━━━━
  *PBV PANEL DETAILS*
━━━━━━━━━━━━━━━━━━━━━
Bot Sends Panel Data Only 1x 
⦁ Guarantee only 1x
⦁ DDoS, or using SC DDoS is prohibited, because it can cause the panel to go down or affect the panel
━━━━━━━━━━━━━━━━━━━━━
    𝙇𝙊𝙂𝙄𝙉 𝘿𝙀𝙏𝘼𝙄𝙇𝙎
━━━━━━━━━━━━━━━━━━━━━
◈ 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴 : ${user.username}
━━━━━━━━━━━━━━━━━━━━━
◈ 𝙿𝙰𝚂𝚂𝚆𝙾𝚁𝙳 : ${password}
━━━━━━━━━━━━━━━━━━━━━
◈ 𝚄𝚁𝙻 : ${domain}
━━━━━━━━━━━━━━━━━━━━━
    𝙎𝙀𝙍𝙑𝙀𝙍 𝘿𝙀𝙏𝘼𝙄𝙇𝙎 :
━━━━━━━━━━━━━━━━━━━━━
➟ 𝙳𝙸𝚂𝙺  : ${disk}
➟ 𝙲𝙿𝚄 : ${cpu}
➟ 𝙼𝙴𝙼𝙾𝚁𝚈 : ${memo}
━━━━━━━━━━━━━━━━━━━━━
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
`
sam.sendMessage(u, { image: { url: 'https://telegra.ph/file/7f1e9da89011736a82473.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2 && data2.attributes && data2.attributes.startup ? data2.attributes.startup : "";
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUCCESSFUL SERVER CREATION✅*

*ID SERVER : ${server.id}*

To Delete Server, please type _.delsrv server id_
`)
}
break
 
case "3gb": {
let t = text.split(' ');
if (!isDeveloper) return 
if (t.length < 2) return reply(`*Example*: ${prefix + command} user Number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.egg
let loc = global.location
let memo = "3048"
let cpu = "100"
let disk = "3000"
let email = username + "1398@gmail.com"
if (!u) return
let d = (await sam.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
const fetch = require('node-fetch')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `━━━━━━━━━━━━━━━━━━━━━
Hello @${m.sender.split('@')[0]}
━━━━━━━━━━━━━━━━━━━━━
   *PBV PANEL DETAILS*
━━━━━━━━━━━━━━━━━━━━━
Bot Sends Panel Data Only 1x 
⦁ Guarantee only 1x
⦁ DDoS, or using SC DDoS is prohibited, because it can cause the panel to go down or affect the panel
━━━━━━━━━━━━━━━━━━━━━
    𝙇𝙊𝙂𝙄𝙉 𝘿𝙀𝙏𝘼𝙄𝙇𝙎
━━━━━━━━━━━━━━━━━━━━━
◈ 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴 : ${user.username}
━━━━━━━━━━━━━━━━━━━━━
◈ 𝙿𝙰𝚂𝚂𝚆𝙾𝚁𝙳 : ${password}
━━━━━━━━━━━━━━━━━━━━━
◈ 𝚄𝚁𝙻 : ${domain}
━━━━━━━━━━━━━━━━━━━━━
    𝙎𝙀𝙍𝙑𝙀𝙍 𝘿𝙀𝙏𝘼𝙄𝙇𝙎 :
━━━━━━━━━━━━━━━━━━━━━
➟ 𝙳𝙸𝚂𝙺  : ${disk}
➟ 𝙲𝙿𝚄 : ${cpu}
➟ 𝙼𝙴𝙼𝙾𝚁𝚈 : ${memo}
━━━━━━━━━━━━━━━━━━━━━
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
`
sam.sendMessage(u, { image: { url: 'https://telegra.ph/file/7f1e9da89011736a82473.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2 && data2.attributes && data2.attributes.startup ? data2.attributes.startup : "";
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUCCESSFUL SERVER CREATION✅*

*ID SERVER : ${server.id}*

To Delete Server, please type _.delsrv server id_
`)
}
break
        
case "4gb": {
let t = text.split(' ');
if (!isDeveloper) return 
if (t.length < 2) return reply(`*Example*: ${prefix + command} user Number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.egg
let loc = global.location
let memo = "4048"
let cpu = "125"
let disk = "4000"
let email = username + "1398@gmail.com"
if (!u) return
let d = (await sam.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
const fetch = require('node-fetch')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `━━━━━━━━━━━━━━━━━━━━━
Hello @${m.sender.split('@')[0]}
━━━━━━━━━━━━━━━━━━━━━
   *PBV PANEL DETAILS*
━━━━━━━━━━━━━━━━━━━━━
Bot Sends Panel Data Only 1x 
⦁ Guarantee only 1x
⦁ DDoS, or using SC DDoS is prohibited, because it can cause the panel to go down or affect the panel
━━━━━━━━━━━━━━━━━━━━━
    𝙇𝙊𝙂𝙄𝙉 𝘿𝙀𝙏𝘼𝙄𝙇𝙎
━━━━━━━━━━━━━━━━━━━━━
◈ 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴 : ${user.username}
━━━━━━━━━━━━━━━━━━━━━
◈ 𝙿𝙰𝚂𝚂𝚆𝙾𝚁𝙳 : ${password}
━━━━━━━━━━━━━━━━━━━━━
◈ 𝚄𝚁𝙻 : ${domain}
━━━━━━━━━━━━━━━━━━━━━
    𝙎𝙀𝙍𝙑𝙀𝙍 𝘿𝙀𝙏𝘼𝙄𝙇𝙎 :
━━━━━━━━━━━━━━━━━━━━━
➟ 𝙳𝙸𝚂𝙺  : ${disk}
➟ 𝙲𝙿𝚄 : ${cpu}
➟ 𝙼𝙴𝙼𝙾𝚁𝚈 : ${memo}
━━━━━━━━━━━━━━━━━━━━━
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
`
sam.sendMessage(u, { image: { url: 'https://telegra.ph/file/7f1e9da89011736a82473.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2 && data2.attributes && data2.attributes.startup ? data2.attributes.startup : "";
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUCCESSFUL SERVER CREATION✅*

*ID SERVER : ${server.id}*

To Delete Server, please type _.delsrv server id_
`)
}
break

case "5gb": {
let t = text.split(' ');
if (!isDeveloper) return 
if (t.length < 2) return reply(`*Example*: ${prefix + command} user Number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.egg
let loc = global.location
let memo = "5048"
let cpu = "150"
let disk = "5000"
let email = username + "1398@gmail.com"
if (!u) return
let d = (await sam.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
const fetch = require('node-fetch')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `━━━━━━━━━━━━━━━━━━━━━
Hello @${m.sender.split('@')[0]}
━━━━━━━━━━━━━━━━━━━━━
  *PBV PANEL DETAILS*
━━━━━━━━━━━━━━━━━━━━━
Bot Sends Panel Data Only 1x 
⦁ Guarantee only 1x
⦁ DDoS, or using SC DDoS is prohibited, because it can cause the panel to go down or affect the panel
━━━━━━━━━━━━━━━━━━━━━
  𝙇𝙊𝙂𝙄𝙉 𝘿𝙀𝙏𝘼𝙄𝙇𝙎
━━━━━━━━━━━━━━━━━━━━━
◈ 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴 : ${user.username}
━━━━━━━━━━━━━━━━━━━━━
◈ 𝙿𝙰𝚂𝚂𝚆𝙾𝚁𝙳 : ${password}
━━━━━━━━━━━━━━━━━━━━━
◈ 𝚄𝚁𝙻 : ${domain}
━━━━━━━━━━━━━━━━━━━━━
    𝙎𝙀𝙍𝙑𝙀𝙍 𝘿𝙀𝙏𝘼𝙄𝙇𝙎 :
━━━━━━━━━━━━━━━━━━━━━
➟ 𝙳𝙸𝚂𝙺  : ${disk}
➟ 𝙲𝙿𝚄 : ${cpu}
➟ 𝙼𝙴𝙼𝙾𝚁𝚈 : ${memo}
━━━━━━━━━━━━━━━━━━━━━
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
`
sam.sendMessage(u, { image: { url: 'https://telegra.ph/file/7f1e9da89011736a82473.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2 && data2.attributes && data2.attributes.startup ? data2.attributes.startup : "";
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUCCESSFUL SERVER CREATION✅*

*ID SERVER : ${server.id}*

To Delete Server, please type _.delsrv server id_
`)
}
break
        
case "6gb": {
let t = text.split(' ');
if (!isDeveloper) return 
if (t.length < 2) return reply(`*Example*: ${prefix + command} user Number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.egg
let loc = global.location
let memo = "6048"
let cpu = "175"
let disk = "6000"
let email = username + "1398@gmail.com"
if (!u) return
let d = (await sam.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
const fetch = require('node-fetch')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `━━━━━━━━━━━━━━━━━━━━━
Hello @${m.sender.split('@')[0]}
━━━━━━━━━━━━━━━━━━━━━
  *PBV PANEL DETAILS*
━━━━━━━━━━━━━━━━━━━━━
Bot Sends Panel Data Only 1x 
⦁ Guarantee only 1x
⦁ DDoS, or using SC DDoS is prohibited, because it can cause the panel to go down or affect the panel
━━━━━━━━━━━━━━━━━━━━━
  𝙇𝙊𝙂𝙄𝙉 𝘿𝙀𝙏𝘼𝙄𝙇𝙎
━━━━━━━━━━━━━━━━━━━━━
◈ 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴 : ${user.username}
━━━━━━━━━━━━━━━━━━━━━
◈ 𝙿𝙰𝚂𝚂𝚆𝙾𝚁𝙳 : ${password}
━━━━━━━━━━━━━━━━━━━━━
◈ 𝚄𝚁𝙻 : ${domain}
━━━━━━━━━━━━━━━━━━━━━
    𝙎𝙀𝙍𝙑𝙀𝙍 𝘿𝙀𝙏𝘼𝙄𝙇𝙎 :
━━━━━━━━━━━━━━━━━━━━━
➟ 𝙳𝙸𝚂𝙺  : ${disk}
➟ 𝙲𝙿𝚄 : ${cpu}
➟ 𝙼𝙴𝙼𝙾𝚁𝚈 : ${memo}
━━━━━━━━━━━━━━━━━━━━━
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
`
sam.sendMessage(u, { image: { url: 'https://telegra.ph/file/7f1e9da89011736a82473.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2 && data2.attributes && data2.attributes.startup ? data2.attributes.startup : "";
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUCCESSFUL SERVER CREATION✅*

*ID SERVER : ${server.id}*

To Delete Server, please type _.delsrv server id_
`)
}
break
        
case "7gb": {
let t = text.split(' ');
if (!isDeveloper) return 
if (t.length < 2) return reply(`*Example*: ${prefix + command} user Number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.egg
let loc = global.location
let memo = "7048"
let cpu = "200"
let disk = "7000"
let email = username + "1398@gmail.com"
if (!u) return
let d = (await sam.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
const fetch = require('node-fetch')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `━━━━━━━━━━━━━━━━━━━━━
Hello @${m.sender.split('@')[0]}
━━━━━━━━━━━━━━━━━━━━━
  *PBV PANEL DETAILS*
━━━━━━━━━━━━━━━━━━━━━
Bot Sends Panel Data Only 1x 
⦁ Guarantee only 1x
⦁ DDoS, or using SC DDoS is prohibited, because it can cause the panel to go down or affect the panel
━━━━━━━━━━━━━━━━━━━━━
  𝙇𝙊𝙂𝙄𝙉 𝘿𝙀𝙏𝘼𝙄𝙇𝙎
━━━━━━━━━━━━━━━━━━━━━
◈ 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴 : ${user.username}
━━━━━━━━━━━━━━━━━━━━━
◈ 𝙿𝙰𝚂𝚂𝚆𝙾𝚁𝙳 : ${password}
━━━━━━━━━━━━━━━━━━━━━
◈ 𝚄𝚁𝙻 : ${domain}
━━━━━━━━━━━━━━━━━━━━━
    𝙎𝙀𝙍𝙑𝙀𝙍 𝘿𝙀𝙏𝘼𝙄𝙇𝙎 :
━━━━━━━━━━━━━━━━━━━━━
➟ 𝙳𝙸𝚂𝙺  : ${disk}
➟ 𝙲𝙿𝚄 : ${cpu}
➟ 𝙼𝙴𝙼𝙾𝚁𝚈 : ${memo}
━━━━━━━━━━━━━━━━━━━━━
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
`
sam.sendMessage(u, { image: { url: 'https://telegra.ph/file/7f1e9da89011736a82473.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2 && data2.attributes && data2.attributes.startup ? data2.attributes.startup : "";
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUCCESSFUL SERVER CREATIONSUCCESSFUL SERVER CREATION✅*

*ID SERVER : ${server.id}*

To Delete Server, please type _.delsrv server id_
`)
}
break
        
case "8gb": {
let t = text.split(' ');
if (!isDeveloper) return 
if (t.length < 2) return reply(`*Example*: ${prefix + command} user Number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.egg
let loc = global.location
let memo = "8048"
let cpu = "225"
let disk = "8000"
let email = username + "1398@gmail.com"
if (!u) return
let d = (await sam.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
const fetch = require('node-fetch')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `━━━━━━━━━━━━━━━━━━━━━
Hello @${m.sender.split('@')[0]}
━━━━━━━━━━━━━━━━━━━━━
  *PBV PANEL DETAILS*
━━━━━━━━━━━━━━━━━━━━━
Bot Sends Panel Data Only 1x 
⦁ Guarantee only 1x
⦁ DDoS, or using SC DDoS is prohibited, because it can cause the panel to go down or affect the panel
━━━━━━━━━━━━━━━━━━━━━
  𝙇𝙊𝙂𝙄𝙉 𝘿𝙀𝙏𝘼𝙄𝙇𝙎
━━━━━━━━━━━━━━━━━━━━━
◈ 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴 : ${user.username}
━━━━━━━━━━━━━━━━━━━━━
◈ 𝙿𝙰𝚂𝚂𝚆𝙾𝚁𝙳 : ${password}
━━━━━━━━━━━━━━━━━━━━━
◈ 𝚄𝚁𝙻 : ${domain}
━━━━━━━━━━━━━━━━━━━━━
    𝙎𝙀𝙍𝙑𝙀𝙍 𝘿𝙀𝙏𝘼𝙄𝙇𝙎 :
━━━━━━━━━━━━━━━━━━━━━
➟ 𝙳𝙸𝚂𝙺  : ${disk}
➟ 𝙲𝙿𝚄 : ${cpu}
➟ 𝙼𝙴𝙼𝙾𝚁𝚈 : ${memo}
━━━━━━━━━━━━━━━━━━━━━
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
`
sam.sendMessage(u, { image: { url: 'https://telegra.ph/file/7f1e9da89011736a82473.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2 && data2.attributes && data2.attributes.startup ? data2.attributes.startup : "";
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUCCESSFUL SERVER CREATION✅*

*ID SERVER : ${server.id}*

To Delete Server, please type _.delsrv server id_
`)
}
break
        
case "unli": {
let t = text.split(' ');
if (!isDeveloper) return 
if (t.length < 2) return reply(`*Example*: ${prefix + command} user Number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.egg
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
if (!u) return
let d = (await sam.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
const fetch = require('node-fetch')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `━━━━━━━━━━━━━━━━━━━━━
Hello @${m.sender.split('@')[0]}
━━━━━━━━━━━━━━━━━━━━━
    *PBV PANEL DETAILS*
━━━━━━━━━━━━━━━━━━━━━
Bot Sends Panel Data Only 1x 
⦁ Guarantee only 1x
⦁ DDoS, or using SC DDoS is prohibited, because it can cause the panel to go down or affect the panel
━━━━━━━━━━━━━━━━━━━━━
    𝙇𝙊𝙂𝙄𝙉 𝘿𝙀𝙏𝘼𝙄𝙇𝙎
━━━━━━━━━━━━━━━━━━━━━
➢ 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴 : ${user.username}
━━━━━━━━━━━━━━━━━━━━━
➢ 𝙿𝙰𝚂𝚂𝚆𝙾𝚁𝙳 : ${password}
━━━━━━━━━━━━━━━━━━━━━
➢ 𝚄𝚁𝙻 : ${domain}
━━━━━━━━━━━━━━━━━━━━━
    𝙎𝙀𝙍𝙑𝙀𝙍 𝘿𝙀𝙏𝘼𝙄𝙇𝙎 :
━━━━━━━━━━━━━━━━━━━━━
➟ 𝙳𝙸𝚂𝙺  : ${disk}
➟ 𝙲𝙿𝚄 : ${cpu}
➟ 𝙼𝙴𝙼𝙾𝚁𝚈 : ${memo}
━━━━━━━━━━━━━━━━━━━━━
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
`
sam.sendMessage(u, { image: { url: 'https://telegra.ph/file/7f1e9da89011736a82473.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2 && data2.attributes && data2.attributes.startup ? data2.attributes.startup : "";
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUCCESSFUL SERVER CREATION✅*

*ID SERVER : ${server.id}*

To Delete Server, please type _.delsrv server id_
`)
}
break
//========================================//
 
default:
}
}
if (budy.startsWith("=>")) {
if (!isDeveloper) return
try {
const result = await eval(`(async () => { return ${budy.slice(3)} })()`)
m.reply(util.format(result))
} catch (e) {
m.reply(String(e))
}
}
if (budy.startsWith(">")) {
if (!isDeveloper) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== "string") evaled = require("util").inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
if (budy.startsWith("$")) {
if (!isDeveloper) return
exec(budy.slice(2),
(err, stdout) => {
if (err) return m.reply(err.toString())
if (stdout) return m.reply(stdout.toString())
})
}
} catch (err) {
const handleError = async () => {
sam.sendMessage(global.ownMain + "@s.whatsapp.net", {
text: require("util").format(err)
}, {
quoted: m
})
new Promise(resolve => setTimeout(resolve, 2000))
/*m.reply(`!Eror, error details will be sent to bot contributors ✓

${util.format(err)}`)*/
console.log(util.format(err))
}
handleError()
}
}
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(color(`Update ${__filename}`, "green"))
delete require.cache[file];
require(file);
});