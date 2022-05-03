let fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `uhm.. what are you looking for?\n\nexample:\n${usedPrefix + command} mabar`
    let res = await carigroup(text, 'name')
    if (!res.length) throw 'Group not found!'
    let text = res.map(res => res.subject + '\n' + res.link).join('\n────────────\n')
    let image = 'https://telegra.ph/file/f5ec51bac808f543ef1d7.png'
    conn.sendButtonLoc(m.chat, await(await fetch(image)).buffer(),text,wm,'Don't Push', 'huuu', m)
}
handler.help = ['carigroup <search>']
handler.tags = ['tools']

handler.command = /^carig(ro?up|c)/i
handler.register = false
module.exports = handler

const axios = require('axios')
const cheerio = require('cheerio')
async function carigroup(search, searchby = 'name') {
    let { data } = await axios.get(global.API('http://ngarang.com', '/link-group-wa/list-link-group-wa.php', {
        search: encodeURIComponent(search),
        searchby,
    }))
    let $ = cheerio.load(data)
    let results = []
    $('#content > div.entry.clearfix > div.wa-chat').each(function (index, element) {
        let subject = $(this).find('div > div.wa-chat-title-container > a > div > div').text().trim()
        let link = $(this).find('div > div.wa-chat-message > a').attr('href').trim()
        results.push({
            subject,
            link
        })
    })
    return results
}
