let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) throw 'Where is the url/link?'
  let res = await fetch(global.API('xteam', '/shorturl/bitly', { url: text }, 'APIKEY'))
  let json = await res.json()
  if (json.status) m.reply(json.result.link)
  else throw 'Link Invalid!\nPlease check the given url'
}
handler.help = ['bitly'].map(v => v + ' <link>')
handler.tags = ['shortlink']
handler.command = /^bitly$/i

module.exports = handler
