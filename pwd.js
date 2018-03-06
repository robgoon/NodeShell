const pwd = function(str) {
  if (str === "pwd") {
    process.stdout.write("Current Directory: " + process.cwd() + "\n");
  } else {
    process.stdout.write("You Typed: " + str);
  }
  process.stdout.write("\nprompt >");
};

module.exports = pwd;
