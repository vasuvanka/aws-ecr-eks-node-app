const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
});

server.listen(process.env.PORT || 80, () => {
    console.log('Server listening on port : ' + 80)
})