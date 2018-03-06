const fs = require('fs')

const cat = function(filename) {

  fs.readFile(filename, (err, data) => {
    if (err) {
      throw err;
    }
    process.stdout.write('\n' + data);
    process.stdout.write("\nprompt >");
  })
}

module.exports = cat;