const http = require("http");
const handleManhwaRoutes = require("./routes/manhwas");

const server = http.createServer((req, res) => {

  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });

    res.end("Manhwa Hub Backend is running!");
    return;
  }

  const handled = handleManhwaRoutes(req, res);

  if (handled) {
    return;
  }

  res.writeHead(404, {
    "Content-Type": "text/plain"
  });

  res.end("Not Found");

});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
