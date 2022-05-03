let FormData = require('form-data')
let axios = require('axios')

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) throw `Reply to the music you want to search for with the caption *${usedPrefix + command}*`
 m.reply('Wait, I'm Looking For...')
const bodyForm = new FormData()
bodyForm.append('audio', await q.download(), 'music.mp3')
           bodyForm.append('apikey', 'caliph_71')
           axios('https://api.zeks.me/api/searchmusic', {
                methods: 'POST',
                headers: {
"Content-Type": "multipart/form-data",
        ...bodyForm.getHeaders()
                },
                data: bodyForm
            })
                .then(({data}) =>{
m.reply(`*Song Found!*\n\n*Title* : ${data.data.title}\n*Artist* : ${data.data.artists}\n*Genre* : ${data. data.genre}\n*Album* : ${data.data.album}\n*Release* : ${data.data.release_date}`)
}).catch(() => {
m.reply('Song Not Found!\nAre you looking for a DJ Remix?')
})

}
handler.help = ['whatmusic', 'song title']
handler.tags = ['tools']

handler.command = /^(whatmusic|song title)$/i

module.exports = handler
