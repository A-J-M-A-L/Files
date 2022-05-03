let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
   if (!args[0]) return m.reply('Enter text1 dan text2\n\nExample: .sadlogo wizard|md')
   m.reply('*Wait a minute⏳*\nprocessing ⚙️...')
  let res = `https://melcanz.com/sadboy?nama=${response[0]}&nama2=${response[1]}&apikey=dUtJxxvp`
  conn.sendFile(m.chat, res, 'sadboy.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['sadlogo'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(sadlogo)$/i

module.exports = handler
