const pwd = require("./pwd")
const ls = require("./ls")

process.stdout.write('prompt > ')

process.stdin.on("data", data => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') pwd()
  if (cmd === 'ls') ls()
})






// create the prompt >
// //create the listener for on data
// cmd to what the user types in
// pwd(cmd)

