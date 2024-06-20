import {createServer} from 'node:http';
import {unlink, writeFile} from 'node:fs';



//Create HTPP Server
const server = createServer((req,res) => {
    console.log(req.url);
    if (req.url.includes('create')) {
//Create file
writeFile('./abc.html', '<h1>Learning Node,js</h1>'(err))
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