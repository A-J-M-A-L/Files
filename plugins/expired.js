let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0] || isNaN(args[0])) throw `Enter a number representing the number of days !\n*Example : ${usedPrefix + command} 30*`

    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    var number ofDays = 86400000 * args[0]
    var now = new Date() * 1
    if (now < global.db.data.chats[who].expired) global.db.data.chats[who].expired += number of Days
    else global.db.data.chats[who].expired = now + number ofDays
    m.reply(`Successfully set expiration day for this Group for ${args[0]} days.\n\nCountdown : ${msToDate(global.db.data.chats[who].expired - now)}`)
}
handler.help = ['add rent <day>']
handler.tags = ['owner']
handler.command = /^(expired|addsewa)$/i
handler.owner = true
module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " days " + hours + " hours " + minutes + " minutes";
    // +minutes+":"+sec;
}
