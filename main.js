// Response for Uptime Robot
const http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.end('Discord bot is active now \n');
}).listen(3000);
const discord = require('discord.js');
const client = new discord.Client();
client.on('ready', message => {
  client.user.setPresence({
    game: {
      name: 'スマホ'
    }
  });
  client.user.setActivity("スマホ", {
    type: "WATCHING"
  })
  .then(console.log)
  .catch(console.error);
  console.log('bot is ready!');
});
client.on('message', message => {
  if (message.isMemberMentioned(client.user)) {
    message.reply('はーい！どうした？');
    return;
  }
  if (message.content === 'こんにちは' && message.author != client.user) {
    message.channel.send('こんにちは！')　 return;
  };
  if (message.content === '落ち') {
    message.channel.send('はーい');
    return;
  }
  if (message.content === '!DM') {
    message.author.send('DMだよ');
    return;
  }
  if (message.content === '自己紹介') {
    message.channel.send('DM送って欲しい時＝!DM ');
    message.channel.send('こんにちはって言ってくれたらこんにちはって言うよ！');
    return;
  }
});
if (process.env.DISCORD_BOT_TOKEN == undefined) {
  console.log('please set ENV: DISCORD_BOT_TOKEN');
  process.exit(0);
}
client.login(process.env.DISCORD_BOT_TOKEN);
