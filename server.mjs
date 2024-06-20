import {createServer} from 'node:http';

// Define request handler

//Create HTPP Server
const server = createServer((req,res) => {
    console.log(req.url);
    if (req.url.includes('create')) {

    }

    
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('<h1>We have an HTP Server</h1>');
});

//Listen for incoming request
server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running');
});

//Normal Function vs  Arrow Function
function handleRequest() {}
const handleRequest = () => {}