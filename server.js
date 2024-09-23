const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to Simchas server');
    } else if (req.method === 'GET' && req.url === '/api/data') {
        const data = [
            {
                "id": 1,
                "name": "Category 1",
                "items": [
                    {
                        "id": 101,
                        "name": "Item 1-1",
                        "details": "Details of Item 1-1",
                        "subitems": [
                            { "id": 1011, "name": "Subitem 1-1-1", "details": "Details of Subitem 1-1-1" },
                            { "id": 1012, "name": "Subitem 1-1-2", "details": "Details of Subitem 1-1-2" }
                        ]
                    },
                    {
                        "id": 102,
                        "name": "Item 1-2",
                        "details": "Details of Item 1-2"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Category 2",
                "items": [
                    {
                        "id": 201,
                        "name": "Item 2-1",
                        "details": "Details of Item 2-1"
                    }
                ]
            }
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});