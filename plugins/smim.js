const uploadImage = require('../lib/uploadImage')
const { MessageType } = require('@adiwajshing/baileys-md')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    let [top, bottom] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `reply image with command\n\n${usedPrefix + command} <${over ? top : 'top text'}>|<${bottom ? bottom : 'bottom text'}>`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} is not supported!*_`
    let img = await q.download()
    let url = await uploadImage(img)
    meme = `https://api.memegen.link/images/custom/${encodeURIComponent(top ? top : '')}/${encodeURIComponent(bottom ? bottom : '')}.png?background=${url }`
try {
    let sticker = await sticker(null, meme, global.packname, global.author)
    await conn.sendFile(m.chat, sticker, {
      quoted: m
    })
  } catch(e) {
    m.reply('failed to create sticker, Attempting to send image')
    await conn.sendFile(m.chat, meme, 'image.png', 'MAKE A STICKER MANUALLY TYPING .S', m)
  }
}
handler.help = ['smim <top text>|<bottom text>']
handler.tags = ['stickers']
handler.command = /^(smim)$/i

handler.limit = false

module.exports = handler
