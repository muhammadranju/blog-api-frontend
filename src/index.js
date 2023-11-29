const http = require("http");
const app = require("./app/app");

const server = http.createServer(app);
const PORT = process.env.PORT || 6060;

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
