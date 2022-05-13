const { Client, Intents, Message } = require('discord.js');
const client = new Client(
  { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }
);
const c = require('ansi-colors')
var randc = c[Math.floor(Math.random()*c.length)];
//can only be used for basic input/output commands, no message variable
function cmd(input, output) {
  client.on('message',
  function(message) {
    if (message.content === input) {
      message.channel.send(output);
    }
  })
}
client.on('ready', function(e) {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on('message',
  function(message) {
    if (message.content.includes('ello')) {
      message.channel.send("🎉 Hello " + '**' + message.member.user.tag + '**!');
    }
  })
client.on('message',
  function(message) {
    if (message.content.includes('spam')) {
      message.channel.send("spam");
      message.react('<:emoji_name:972542941249802320>');
    }
  })
client.on('message', message => {
  if (message.content === 'ping') {  
    message.channel.send(`🏓 Pong! Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
});
cmd('test', '[heres a hint; it works]');

client.on('message', message => {
  if (message.content.includes('roll')) {
    message.channel.send(`🎲 ${Math.round(Math.random()*10)}` );
  }
});
client.login('')
console.log(c.magenta('*************************************            \n███╗   ███╗██████╗  ██████╗ ████████╗            \n████╗ ████║██╔══██╗██╔═══██╗╚══██╔══╝            \n██╔████╔██║██████╔╝██║   ██║   ██║               \n██║╚██╔╝██║██╔══██╗██║   ██║   ██║   made by bmp\n██║ ╚═╝ ██║██████╔╝╚██████╔╝   ██║               \n╚═╝     ╚═╝╚═════╝  ╚═════╝    ╚═╝               \n*************************************            '))
