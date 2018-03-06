process.stdout.write('promt > ')

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim()

  process.stdout.write('You Typed: ' + cmd)
  process.stdout.write('\npromt >')

})
