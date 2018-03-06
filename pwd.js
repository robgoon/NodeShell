const pwd = function() {
  process.stdout.write("Current Directory: " + process.cwd() + "\n");
  process.stdout.write("\nprompt >");
};

module.exports = pwd;
