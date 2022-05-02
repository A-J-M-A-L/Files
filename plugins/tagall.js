let handler = async(m, { conn, text, participants }) => {
  let text = `⋙ *Message from Group Admin*
\n *${text ? text : 'Nothing'}*\n\n`
for (let mem of participants) {
text += ` @${mem.id.split('@')[0]}\n`
}
                text += `\nnot wizard`
                conn.sendMessage(m.chat, { text: text, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <message>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.group = true
handler.admin = true

module.exports = handler
