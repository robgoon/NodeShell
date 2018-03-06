const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl')

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  data = data
    .toString()
    .trim()
    .split(' ');
  if (data.length > 1) {
    const cmd = data[0];
    const arg = data[1];
    if (cmd === 'cat') cat(arg);
    else if (cmd === 'curl') curl(arg);
    else process.stdout.write('\nprompt >');
  } else if (data.length === 1) {
    const cmd = data.toString().trim();
    if (cmd === 'pwd') pwd();
    else if (cmd === 'ls') ls();
    else process.stdout.write('\nprompt >');
  }
});
