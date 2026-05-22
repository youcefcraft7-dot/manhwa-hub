const {
  getAllManhwas,
  getManhwaById,
  searchManhwas,
  getManhwasByGenre,
  getChapter
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

  if (req.url.startsWith("/api/genres/")) {

    const genre = decodeURIComponent(
      req.url.split("/").pop()
    );

    getManhwasByGenre(req, res, genre);

    return true;
  }

  const chapterMatch =
    req.url.match(
      /^\/api\/manhwa\/(\d+)\/chapter\/(\d+)$/
    );

  if (chapterMatch) {

    const manhwaId =
      parseInt(chapterMatch[1]);

    const chapterId =
      parseInt(chapterMatch[2]);

    getChapter(
      req,
      res,
      manhwaId,
      chapterId
    );

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
