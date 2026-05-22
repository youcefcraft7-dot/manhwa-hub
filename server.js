const http = require("http");

const manhwas = [
  {
    id: 1,
    title: "Solo Leveling",
    cover: "https://i.imgur.com/8Km9tLL.jpg"
  },
  {
    id: 2,
    title: "The Beginning After The End",
    cover: "https://i.imgur.com/7r6XK7F.jpg"
  },
  {
    id: 3,
    title: "Omniscient Reader",
    cover: "https://i.imgur.com/9J8LQ1R.jpg"
  }
];

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Manhwa Hub Backend is running!");
    return;
  }

  if (req.url === "/api/manhwas") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(manhwas));
    return;
  }

  if (req.url === "/api/manhwa/1") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(manhwas[0]));
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
