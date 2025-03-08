const http = require('http');

const server = http.createServer((req, res) => {
        if (req.url === '/') {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end('<h1>Welcome to the homepage!</h1>');
        } else if (req.url === '/about') {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('This is the about page.');
        } else {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
        }
});

const PORT = 8888;
server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
});