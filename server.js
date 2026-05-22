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

  else {
    res.writeHead(404);
    res.end("Not Found");
  }

});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
