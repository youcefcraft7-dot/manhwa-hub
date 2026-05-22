const manhwas = require("../data/manhwas");

function getAllManhwas(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify(manhwas));
}

function getManhwaById(req, res, id) {

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

    return;
  }

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify(manhwa));
}

function searchManhwas(req, res, query) {

  const results = manhwas.filter(item =>
    item.title.toLowerCase().includes(
      query.toLowerCase()
    )
  );

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify(results));
}

function getManhwasByGenre(req, res, genre) {

  const results = manhwas.filter(item =>
    item.genres.some(
      g => g.toLowerCase() === genre.toLowerCase()
    )
  );

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify(results));
}

module.exports = {
  getAllManhwas,
  getManhwaById,
  searchManhwas,
  getManhwasByGenre
};
