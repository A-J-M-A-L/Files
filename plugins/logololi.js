let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Enter text1|text2\n\nexample: .logo3 Wizard|md'
  m.reply('*Wait a minute⏳*\nprocessing ⚙️...')
  let res = `https://caliphapi.com/api/lolimaker?text=${response[0]}&text2=elyas&apikey=wVLiUzSa`
  conn.sendFile(m.chat, res, 'lolilogo.jpg', `Sudah Jadi`, m, false)
 }
handler.help = ['logo2'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(logo2)$/i

module.exports = handler
