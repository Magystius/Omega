const http = require('http')

const server = http.createServer((req, res) => {
  console.log(`${new Date().toUTCString()} ${req.method} ${req.url}`)
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
  res.end('αlpha')
})

server.listen(8080)
console.log('server started and listening...')
