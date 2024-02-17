const http = require('http');

const server = http.createServer(async (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    try {
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Простой HTML-код
        const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>simple_server</title>
        </head>
        <body>
          <h1>HTML2</h1>
        </body>
      </html>
    `;

        res.end(htmlContent);
    } catch (error) {
        console.error('Ошибка:', error.message);
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal Server Error');
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
