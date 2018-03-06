process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim()

  if (cmd === 'pwd'){
    process.stdout.write('Current Directory: ' + process.cwd() + '\n')
  }

  process.stdout.write('You Typed: ' + cmd)
  process.stdout.write('\nprompt >')

})
