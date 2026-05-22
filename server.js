const http = require("http");

const manhwas = [
  {
    id: 1,
    title: "Solo Leveling",
    cover: "https://example.com/solo.jpg"
  },
  {
    id: 2,
    title: "The Beginning After The End",
    cover: "https://example.com/tbate.jpg"
  }
];

const server = http.createServer((req, res) => {

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Manhwa Hub Backend is running!");
  }

  else if (req.url === "/api/manhwas") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(manhwas));
  }

  else {
    res.writeHead(404);
    res.end("Not Found");
  }

});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
