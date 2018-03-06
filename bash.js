const pwd = require("./pwd")

process.stdout.write('prompt > ')

process.stdin.on("data", data => {
  const cmd = data.toString().trim();
  pwd(cmd)
})






// create the prompt >
// //create the listener for on data
// cmd to what the user types in
// pwd(cmd)

