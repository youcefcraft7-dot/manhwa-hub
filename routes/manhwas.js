const {
  getAllManhwas,
  getManhwaById,
  searchManhwas
} = require("../controllers/manhwasController");

function handleManhwaRoutes(req, res) {

  if (req.url === "/api/manhwas") {
    getAllManhwas(req, res);
    return true;
  }

  if (req.url.startsWith("/api/search")) {

    const url = new URL(
      req.url,
      "http://localhost"
    );

    const query =
      url.searchParams.get("q") || "";

    searchManhwas(req, res, query);

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
