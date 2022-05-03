let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let setting = global.db.data.settings
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  switch (type) {
    case 'w':
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
    case 'antilink':
    case 'antiurl':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.antiLink = isEnable
      break
    case 'publik':
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'autolevelup':
    case 'levelup':
      isUser = true
      user.autolevelup = isEnable
      break
    case 'mycontact':
    case 'mycontacts':
    case 'whitelistcontact':
    case 'whitelistcontacts':
    case 'whitelistmycontact':
    case 'whitelistmycontacts':
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      conn.callWhitelistMode = isEnable
      break
    case 'grup':
    case 'gruponly':
    case 'grouponly':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      setting.groupOnly = isEnable
      break
    case 'backup':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      setting.backup = isEnable
      break
    case 'anticall':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      setting.anticall = isEnable
      break
    case 'antitroli':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      setting.antitroli = isEnable
      break
    case 'autoread':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      opts['autoread'] = isEnable
      break
    case 'restrict':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      opts['restrict'] = isEnable
      break
    case 'nsfw':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      setting.nsfw = isEnable
      break
    case 'jadibot':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      setting.jadibot = isEnable
      break
    default:
      if (!/[01]/.test(command)) throw `
"listMessage": {
          "title": `List option: \n| welcome \n| delete \n| public \n| antilink \n| autolevelup \n| detect \n| document \n| whitelistmycontacts \n| restrict \n| nyimak \n| autoread \n| pconly \n| gconly \n| swonly \n| viewonce`.trim(),         
          "description": "click your options and press send button",
          "footerText": "𝚉𝙴𝚄𝚂_»𝙲𝙾𝙼𝙼𝚄𝙽𝙸𝚃𝚈",
          "buttonText": "SWITCH ON/OFF",
          "listType": "SINGLE_SELECT",
          "sections": [
            {
              "rows": [
                {
                  "title": `Enable welcome`,
                  "description": "Welcome Message Enable This Group",
                  "rowId": "#enable welcome"     
                }, {
                  "title": `Enable Public`,
                  "description": "Public Mod",
                  "rowId": "#enable public"
                 }, {
                  "title": `Enable Antilink`,
                  "description": "Anti Link Protection",
                  "rowId": "#enable antilink"                
                 }, {
                  "title": `Enable Auto Levelup`,
                  "description": "Automatically level up",
                  "rowId": "#true autolevelup"                
                 }, {
                  "title": `Enable Group Only`,
                  "description": "Group Only Mode",
                  "rowId": "#enable grouponly"                
                 }, {
                  "title": `Enable AntiCall`,
                  "description": "Blocks The Person Who Calls The Bot",
                  "rowId": "#enable anticall"              
                 }, {
                  "title": `Enable BackUp`,
                  "description": "Enables BackUp",
                  "rowId": "#false document"                   
                 }, {
                  "title": `Enable My Contacts`,
                  "description": "Enable White List Mycontacts",
                  "rowId": "#enable mycontact"   
                 }, {
                  "title": `Enable Restrict`,
                  "description": "Restrict Mod",
                  "rowId": "#true restrict"                         
                  }, {
                  "title": `Disable Restrict`,
                  "description": "Disable Restrict Mod",
                  "rowId": "#false restrict"                         
                  }, {
                  "title": `Enable Listen`,
                  "description": "Listen Mod",
                  "rowId": "#true litsen"                         
                  }, {
                  "title": `Disable Litsen`,
                  "description": "Disable Restrict Mod",
                  "rowId": "#false litsen"                         
                  }, {
                  "title": `Enable Auto Read`,
                  "description": "Automatic reading whatsapp messages",
                  "rowId": "#true autoread"                         
                  }, {
                  "title": `Disable Auto Read`,
                  "description": "Disable Automatic reading whatsapp messages",
                  "rowId": "#false autoread"                         
                  }, {
                  "title": `Enable Viewonce`,
                  "description": "Anti View once",
                  "rowId": "#true viewonce"                    
                  }, {
                  "title": `Disable Viewonce`,
                  "description": "Disable view once mod",
                  "rowId": "#false viewonce"                                                   
                }
              ]
            }
          ], "contextInfo": {
            "stanzaId": m.key.id,
            "participant": m.sender,
            "quotedMessage": m.message
          }
        }
      }, {}), { waitForAck: true })
contoh:
${usedPrefix}on welcome
${usedPrefix}off welcome
`.trim()
      throw false
  }
  m.reply(`
*${type}* berhasil di *${isEnable ? 'nyala' : 'mati'}kan* ${isAll ? 'untuk bot ini' : isUser ? '' : 'untuk chat ini'}
`.trim())
}
handler.help = ['on', 'off'].map(v => v + ' <opsi>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

module.exports = handler
