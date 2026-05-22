const http = require("http");

const manhwas = [
  {
    id: 1,
    title: "Solo Leveling",
    cover: "https://i.imgur.com/8Km9tLL.jpg",
    chapters: [
      { id: 1, title: "Chapter 1" },
      { id: 2, title: "Chapter 2" }
    ]
  },
  {
    id: 2,
    title: "The Beginning After The End",
    cover: "https://i.imgur.com/7r6XK7F.jpg",
    chapters: [
      { id: 1, title: "Chapter 1" }
    ]
  },
  {
    id: 3,
    title: "Omniscient Reader",
    cover: "https://i.imgur.com/9J8LQ1R.jpg",
    chapters: [
      { id: 1, title: "Chapter 1" }
    ]
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

  if (req.url.startsWith("/api/manhwa/")) {

    const id = parseInt(req.url.split("/").pop());

    const manhwa = manhwas.find(item => item.id === id);

    if (!manhwa) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        error: "Manhwa not found"
      }));
      return;
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(manhwa));
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");

});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
