let fetch = require('node-fetch')
let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `uhm.. where is the text?\n\nexample:\n${usedPrefix + command} read`
    let res = await fetch(`https://api.xteam.xyz/brainly?about=${text}&APIKEY=cristian9407`)
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    m.reply(json.jawaban)
}
handler.help = ['Brainly <text>']
handler.tags = ['internet']
handler.command = /^brainly$/i
module.exports = handler
