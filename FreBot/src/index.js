const Discord = require('discord.js')
const chalk = require("chalk")

const client = new Discord.Client()

const { token, prefix } = require ("./config/config.js");                         
const { restart } = require('nodemon');

//info o uruchomieniu
client.on("ready", () => {
  console.log(chalk.yellowBright(`Uruchomiono ${client.user.username}`))
});


//tu zaczynają się komendy:
//reakcja na ping kogoś
client.on('message', (msg) => { 
  if (msg.content === '<@![tu daj ID osoby]>') {
    msg.reply('Co od niego chcesz?')
  }
})

//Fr!pomoc
client.on('message', (msg) => {
  const { author, guild } = msg
  //sprawdza zawartość wiadomości czyli tu są komendy:
  if (msg.content === '[prefix]pomoc') {
    msg.reply('**O to moje komendy:**\n**Informacyjne:**\n*adminpomocy* - po wpisaniu tej komendy bot pinguje adminów na kanale do tego przeznaczonym i przekazuje tam informacje kto i gdzie potrzebuje pomocy\n*adm* - wyświetla informacje dotyczące administracji, z kim kiedy się kontaktować, w jakiej sprawie itp.\n*txtpack* - pokazuje informacje dotyczące txt packa Gacka\n*serwermc* - pokazuje informacje dotyczące serwera Minecraft Frezenona i Gacka\n*pomoc* - właśnie tu jesteś\n*prefix* - pokazuje prefix(wsm nwm po co to)\n\n**Zabawa:**\n*ping* - sam se zobacz co robi :P\n\n**Ogólnie do bota:**\n*żyjesz?* - jak odpowie to żyje a jak nie to nie\n\n*Wszystkie moje komendy należy poprzedzić prefixem **Fr!***')
  }
})
//Fr!adm
client.on('message', (msg) => { 
  const { author, guild } = msg
  //sprawdza zawartość wiadomości czyli tu są komendy:
  if (msg.content === '[prefix]adm') {
    msg.reply('***O to informacje dotyczące dostępności adminów:[tu wpisz informacje dotyczące dostępności adminów]')
  }
})
//Fr!ping
client.on('message', (msg) => {
  const { author, guild } = msg
  //sprawdza zawartość wiadomości czyli tu są komendy:
  if (msg.content === '[prefix]ping') {
    msg.channel.send('Pong!')
  }
})
//Fr!prefix
client.on('message', (msg) => {
  const { author, guild } = msg
  //sprawdza zawartość wiadomości czyli tu są komendy:
  if (msg.content === '[prefix]prefix') {
    msg.reply('Mój prefix to **[prefix]]** ale chyba to wiesz skoro aktywowałeś tą komende')
  }
})

//Fr!help
client.on('message', (msg) => {
  const { author, guild } = msg
  //sprawdza zawartość wiadomości czyli tu są komendy:
  if (msg.content === '[prefix]help') {
    msg.reply('Albo nauczysz się pisać po ludzku albo sam se szukaj komend')
  }
})

//Fr!żyjesz?
client.on('message', (msg) => {
  const { author, guild } = msg
  //sprawdza zawartość wiadomości czyli tu są komendy:
  if (msg.content === '[prefix]żyjesz?') {
    msg.channel.send('tak,tak żyje!')
  }
})

//Fr!adminpomocy
client.on('message', (msg) => {
  const { author, guild, } = msg
  //sprawdza zawartość wiadomości czyli tu są komendy:
  if (msg.content === '[prefix]adminpomocy') {
    var { channel } = msg
    msg.reply('pomoc została wezwana')
    var admpomocyID = '<#'+ msg.channel.id + '>'
    var { channel } = msg.channel.id = '[tu daj ID kanału do którego dostęp ma administracja]'
    msg.channel.send('[ping]\n***'+(author.tag)+'*** POTRZEBUJE POMOCY NA:'+ (admpomocyID))
    var { channel } = msg
  }
})

//Fr!txtpack
client.on('message', (msg) => {
  const { author, guild } = msg
  //sprawdza zawartość wiadomości czyli tu są komendy:
  if (msg.content === '[prefix]txtpack') {
    msg.reply('[tu daj informacje o txtpacku jak tego nie potrzebujesz to to usuń]')
  }
})

//Fr!serwermc
client.on('message', (msg) => {
  const { author, guild } = msg
  //sprawdza zawartość wiadomości czyli tu są komendy:
  if (msg.content === '[prefix]serwermc') {
    msg.reply('[tu daj informacje o serwerze mc a jak tego nie potrzebujesz to to usuń albo zmień tam u góry na np. serwermta zamiast serwermc i daj tu informacje o nim jak chce ')
  }
})

//sprawdzanie kanału-NIE DZIAŁA:
client.on('message', (msg) => {
  const {author, channel, guild } = msg
  jakikanał = 'zly'
  var kanał = msg.channel.id
    if (msg.content === 'Fra!jakiteraz?'  ) {
      msg.reply(jakikanał)
    }
    if (!msg.content.startsWith('fr!')) return
      if (kanał = '[ID kanału do komend(i tak nie zadziała)]') return 
       var jakikanał = 'dobry'
    if (msg.content.startsWith('fr!')) return 
      if (jakikanał === 'zly') return
        msg.delete('10',  '5')
        msg.channel.send('Nie ten kanał byq')
})

//reakcje na pingi
//FreBot
client.on('message', (msg) => {
  if (msg.content === '[tu daj nazwe bota]') {
    msg.reply('Witaj!\nMój prefix to **[prefix]** użyj go przed komendą abym wiedział że to do mnie\naby wyświetlić listę komend wpisz: *[prefix]pomoc*')
  }
})
//frebot
client.on('message', (msg) => {
  if (msg.content === '[tu daj nazwe bota z małych liter]') {
    msg.reply('Witaj!\nMój prefix to **[prefix]** użyj go przed komendą abym wiedział że to do mnie\naby wyświetlić listę komend wpisz: *[prefix]*')
  }
})
//@FreBot
client.on('message', (msg) => { 
  if (msg.content === '<@![ID bota]>') {
    msg.reply('Witaj!\nMój prefix to **[prefix]** użyj go przed komendą abym wiedział że to do mnie\naby wyświetlić listę komend wpisz: *[prefix]pomoc*')
  }
})

//connect4-mój-NIE GOTOWE
client.on('message', (msg) => {
  if (msg.content === "Fr!connect4-2") {
    var {author}=msg
    const {channel, guild, content} = msg
    msg.channel.send('osoby chętne do gry niech napiszą: gram w connect4')
    client.on('message', (msg) => {
      if (msg.content === "gram w connect4") {
        var {author} = msg
        var gracz1 = author
        msg.channel.send('pierwszy gracz:' + (gracz1))
        client.on('message', (msg) => {
          if (msg.content === "gram w connect4") {
            var {author} = msg
            var gracz2 = author
            msg.channel.send('drugi gracz:' + (gracz2))
            if (gracz1 != gracz2) {
              msg.channel.send('rozpoczynanie gry...\ngrają:\n'+(gracz1)+'\n'+(gracz2))
              wygrany = Math.floor(Math.random()*1+2)
              if (wygrany = 1) {
                msg.channel.send('wygrywa'+(gracz1))
            }
              if (wygrany = 2) {
                msg.channel.send('wygrywa'+(gracz2)) 
            }
          }
        }
      })
    }
  })
  }
})
//loteria-NIE GOTOWE
client.on('message', (msg) => {
  if (msg.content === "Fr!loteria") {
    ileOsób = msg.content.slice(10).trim().split(/ +/g)
    console.log(ileOsób)
    var {author}=msg
    const {channel, guild, content} = msg
    msg.channel.send('osoby chętne do gry niech napiszą:gram w loterie')
    client.on('message', (msg) => {
      if (msg.content === "gram w loterie jako 1") {
        const {author} = msg
        const gracz1 = author
        msg.channel.send('pierwszy gracz:' + (gracz1))
          if (msg.content === "gram w loterie jako 2") {
            const {author} = msg
            const gracz2 = author
            msg.channel.send('drugi gracz:' + (gracz2))
            if (gracz1 != gracz2 + gracz1 != 'undefined') {
              msg.channel.send('rozpoczynanie gry...\ngrają:\n'+(gracz1)+'\n'+(gracz2))
              ileOsób === 3
              wygrany = Math.floor(Math.random()*1+(ileOsób))
              if (wygrany = 1) {
                msg.channel.send('wygrywa'+(gracz1))
                const gracz1= '0'
                const gracz2= '0'
            }
              if (wygrany != 1) {
                msg.channel.send('wygrywa'+(gracz2)) 
                const gracz1= '0'
                const gracz2= '0'
            }
          }
        }
    }
  })
  }
})
client.login(token);  