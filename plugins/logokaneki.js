let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Enter text\nExample: .logo1 Wizard'
  m.reply('*Wait a minute⏳*\nProcessing ⚙️...')
  let res = `https://caliphapi.com/api/kaneki?text=${response}&apikey=ELYASXD`
  conn.sendFile(m.chat, res, 'kaneki.jpg', `Sudah jadi`, m, false)
}
handler.help = ['logo1'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(logo1)$/i
handler.limit = true
handler.register = false

module.exports = handler
