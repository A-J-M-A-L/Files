 const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu =`
─────〔 *Motivation* 〕─────

${pickRandom(global.motivasi)}
`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({

     templateMessage: {

         hydratedTemplate: {
           hydratedContentText: anu,
           ImageMessage: { 
           jpegThumbnail: fs.readFileSync('./media/quotes.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '📍 YouTube',
               url: youtube
             }

           },
               {
           quickReplyButton: {
               displayText: 'Next',
               id: '.motivation',
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
handler.help = ['motivation']
handler.tags = ['quotes']
handler.command = /^(motivation)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.motivasi = [
"Don't talk, just act. Don't say, just show. Don't promise, just prove it.",
"Never stop doing your best just because someone doesn't reward you.",
"Work while they sleep. Learn while they party. Save while they spend. Live like their dream.",
"The key to success is to focus our conscious mind on the things we want, not the things we fear.",
"Don't be afraid of failure. Fear of being in the same place next year as you are today.",
"If we keep doing what we're doing, we'll keep getting what we got.",
"If you can't handle stress, you won't manage success."
"Be stubborn about your goals and flexible about your methods.",
"Hard work beats talent when talent doesn't work hard."
"Remember that the greatest lessons in life are usually learned from the worst times and from the worst mistakes.",
"Life is not about waiting for the storm to pass, but learning to dance in the rain.",
"If the plan doesn't work, change the plan not the goal.",
"Don't be afraid that your life will end; be afraid that your life will never begin."
"A truly great person is someone who makes everyone feel great.",
"Experience is a tough teacher because it gives the tests first, then the lessons.",
"Knowing how much to know is the beginning of learning to live.",
"Success is not the end, failure is not fatal. What matters is the courage to continue.",
"It is better to fail in originality than to succeed in imitation.",
"Dare to dream, but more importantly, dare to take action behind your dreams.","Tetapkan tujuan Anda tinggi-tinggi, dan jangan berhenti sampai Anda mencapainya.",
Cultivate success from failure. Despair and failure are the two surest stepping stones to success.",
"Genius is one percent inspiration and ninety-nine percent perspiration.",
"Success is where preparation and opportunity meet.",
"Perseverance failed 19 times and succeeded on the 20th.",
"The road to success and the road to failure are almost exactly the same.",
"Success usually comes to those who are too busy looking for it.",
"Don't put off your work until tomorrow, while you can do it today.",
"20 years from now, you may be more disappointed by the things you didn't get to do than by the ones you did."
"Don't spend your time beating walls and hoping to turn them into doors.",
"Opportunities are like sunrises. If you wait too long, you may miss them.",
"Life is 10 percent what happens to you and 90 percent how you react to it."
"There are three ways to achieve ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.",
"The number one reason people fail in life is because they listen to their friends, family and neighbors.",
"Time is more valuable than money. You can earn more money, but you can't earn more time.",
"Goal setting is the secret of an exciting future.",
"When we strive to be better than we are, everything around us becomes better too.",
"Growth begins when we begin to accept our own weaknesses.",
"Never give up when you are still able to try again. It never ends until you stop trying.",
"Willpower is the key to success. Successful people try hard no matter what they feel by applying their will to overcome apathy, doubt or fear.",
"Never give up when you are still able to try again. It never ends until you stop trying.",
"Willpower is the key to success. Successful people try hard no matter what they feel by applying their will to overcome apathy, doubt or fear.",
"The first thing successful people do is view failure as a positive signal for success."
"The hallmark of successful people is that they always try hard to learn new things.",
"Success is getting what you want, happiness is wanting what you get.",
"Pessimists see difficulty in every opportunity. Optimists see opportunity in every difficulty.",
"Doubt kills more dreams than failure.",
"Do what you have to do until you can do what you want to do.",
"Optimism is one of the qualities that is more associated with success and happiness than any other.",
"The highest reward for a hard worker is not what he gets from the job, but how much he develops with his hard work.",
"The best way to start is to stop talking and start doing.",
"Failure will never follow if the will to succeed is strong enough."
]
