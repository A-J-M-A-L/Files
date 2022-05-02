let xfar = require('xfarr-api')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text }) => {
    if (!text) throw 'Enter Link\n\nExample: .ytv720 https://youtube.com/xxxxxx'
  let res = await xfar.Youtube(text)
m.reply('*Wait a moment...*')
conn.sendFile(m.chat,res.medias[2].url, '', `Youtube Downloader
720p
if it's still blurry, it means the video is blurry from youtube
Or it could be a *FACE*` factor, m)

}
handler.help = ['ytv720 <url>']
handler.tags = ['internet']
handler.command = /^ytv720$/i


module.exports = handler
