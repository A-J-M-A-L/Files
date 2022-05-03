const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let so-and-so = `*â”€â”€â”€â”€â”€Œ DONATE € â”€â”€â”€*

Hi ‘‹
You guys can support me to keep this bot up to date.
But currently we are not accepting any donations.
So If you want support me you can support by following my social media's.

Thanks for your interest ☺️

*Have A Good Day😄*`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: {
           jpegThumbnail: fs.readFileSync('./media/donation.jpg') },
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'ðŸ“ instagram',
               url: instagram
             }

           },
               {
             urlButton: {
               displayText: 'ðŸ“ YouTube',
               url: youtube
             }

           },
               {
             quickReplyButton: {
               displayText: 'Back To Menu',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['donate', 'donate']
handler.tags = ['xp']
handler.command = /^(donate|donate)$/i

module.exports = handler
