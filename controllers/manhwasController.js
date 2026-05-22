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

module.exports = {
  getAllManhwas,
  getManhwaById
};
