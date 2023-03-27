const userDataGenerator = require("random-user-data-generator");

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;

    const user = userDataGenerator.generateUser();

    console.log(user);

    res.setHeader("Content-Type", "text/plain");
    res.end(JSON.stringify(user));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
