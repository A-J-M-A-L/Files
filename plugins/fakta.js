const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let fetch = require('node-fetch')

let handler  = async (m, { conn }) => {
  ddd = await fetch('https://recoders-area.caliph.repl.co/api/fakta?apikey='+APIKeys["https://recoders-area.caliph.repl.co"])
  f = await ddd.json()
let anu =`
*Unique Fact*

${f.result}
`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: {
           jpegThumbnail: fs.readFileSync('./media/quotes.jpg') },
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'YouTube♻️',
               url: youtube
             }

           },
               {
             quickReplyButton: {
               displayText: 'Facts',
               id: '.fact',
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
handler.help = ['unique fact']
handler.tags = ['internet']
handler.command = /^(fact|unique fact)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
