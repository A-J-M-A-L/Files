let handler = async(m, { conn, text }) => {
    if (!text) throw 'Please enter a report'
    if (text.length > 300) throw 'Sorry Text Too Long, Maximum 300 Texts!'
    const report = `*「 REPORT *\nNumber : wa.me/${m.sender.split`@`[0]}\nMessage : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '6281515860089@s.whatsapp.net'))
    m.reply(report, jid)
    m.reply(report, m.sender) // Mwehehehehe
    m.reply('✔️Problem has been reported to Owner Bot, false/fake reports will not be responded to!')
}
handler.help = ['bug', 'report'].map(v => v + ' <report>')
handler.tags = ['info']
handler.command = /^(bug|report)$/i

module.exports = handler
