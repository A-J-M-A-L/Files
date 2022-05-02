let handler = async (m, { conn, args }) => {
    if (!args || !args[0]) throw 'Who wants to Warn om?'
    let mention = m.mentionedJid[0] || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
    if (!mention) throw 'Tag one'
    if (!(mention in global.db.data.users)) throw 'User is not registered in DATABASE!!'
    let user = global.db.data.users[mention]
    if (user.Banneduser) throw 'User has been banned!!'
    if ((user.warn * 1) < 3) {
        user.warn += 1
        m.reply('Successful Warning')
        m.reply('You were warned by OWNER or MODERATOR!!, and now you have *' + (user.warn + 1) + '* WARN. Remember If you get warned 4 times you will be automatically banned', mention)
    } else if ((user.warn * 1) > 2) {
        let reason = (args.length > 0 || args[1] ? args.slice(1).join(' ') : '4 times WARN') || '4 times WARNING'
        user.Banneduser = true
        user.BannedReason = reason
        user.warn = 0
        m.reply('*He's been banned, for getting 4 warnings*')
        m.reply('*You are Banned for getting 4 warnings*\n *CALL* \n' + global.owner.map((v, i) => '*Owner ' + (i + 1) + ': * wa.me/' + v).join('\n') + '\n\n' + global.mods.map((v, i) => '*Moderator ' + (i + 1) + ' :* wa.me/' + v).join('\n'), mention)
    }
}

handler.help = ['warn @mention']
handler.tags = ['owner']
handler.command = /^warn(user)?$/i
handler.mods = true

module.exports = handler
