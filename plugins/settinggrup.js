let { groupSettingUpdate } = require('@adiwajshing/baileys-md')
let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = {
'open': 'not_announcement',
'open': 'not_announcement',
'on': 'not_announcement',
'1': 'not_announcement',
'close': 'announcement',
'close': 'announcement',
'off': 'announcement',
'0': 'announcement',
}[(args[0] || '')]
if (isClose === undefined) {
await conn.send2But(m.chat, `
usage example:
*${usedPrefix + command} close*
*${usedPrefix + command} open*
`.trim(), 'group settings', 'Open', '.group 1', 'Close', '.group 0')
throw false
}
await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group <open/close>']
handler.tags = ['group']
handler.command = /^(gro?up)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler
