const manhwas = require("../data/manhwas");

function handleManhwaRoutes(req, res) {

  if (req.url === "/api/manhwas") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify(manhwas));
    return true;
  }

  if (req.url.startsWith("/api/manhwa/")) {

    const id = parseInt(req.url.split("/").pop());

    const manhwa = manhwas.find(
      item => item.id === id
    );

    if (!manhwa) {
      res.writeHead(404, {
        "Content-Type": "application/json"
      });

      res.end(JSON.stringify({
        error: "Manhwa not found"
      }));

      return true;
    }

    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify(manhwa));
    return true;
  }

  return false;
}

module.exports = handleManhwaRoutes;
