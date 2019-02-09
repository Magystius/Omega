const http = require('http')
const https = require('https')

const connectionCheck = (req, res) => {
  try {
    https.get('https://www.google.com/search?q=omega', checkRes => {
      if (checkRes.statusCode === 200) {
        console.log('connection check successful')
        res.end('internet reachable')
      } else {
        console.log(`connection check NOT successful => ${checkRes.statusCode}`)
        res.end('internet NOT reachable')
      }
    })
  } catch (error) {
    console.log('connection check NOT successful => timeout')
    res.end('internet NOT reachable')
  }
}

const server = http.createServer((req, res) => {
  console.log(`${new Date().toUTCString()} ${req.method} ${req.url}`)

  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})

  //dispatch incoming request to handling extra action
  if (req.url === '/connection-check') {
    connectionCheck(req, res)
  } else if(req.url === '/health') {
    res.end('OK')
  } else {
    res.end('αlpha')
  }
})

server.listen(8080)
console.log('server started and listening...')
