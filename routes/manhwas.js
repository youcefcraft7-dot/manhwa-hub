const {
  getAllManhwas,
  getManhwaById
} = require("../controllers/manhwasController");

function handleManhwaRoutes(req, res) {

  if (req.url === "/api/manhwas") {
    getAllManhwas(req, res);
    return true;
  }

  if (req.url.startsWith("/api/manhwa/")) {

    const id = parseInt(
      req.url.split("/").pop()
    );

    getManhwaById(req, res, id);

    return true;
  }

  return false;
}

module.exports = handleManhwaRoutes;
