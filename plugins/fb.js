let xfar = require('xfarr-api')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text }) => {
    if (!text) throw 'Enter Link\n\nExample: .fb https://facebook.com/xxxxxx'
  let res = await xfar.Facebook(text)
m.reply('*Wait a moment...*')
conn.sendFile(m.chat,res.medias[1].url, 'fb.mp4', `Tittle: ${res.tittle}
Video link: ${res.url}
`, m)

}
handler.help = ['fb <url>', 'facebook <url>']
handler.tags = ['downloader']
handler.command = /^fb|facebook$/i


module.exports = handler
