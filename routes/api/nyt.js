const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/nyt"
router.route("/:query")
      .get(articlesController.getArticles);

module.exports = router;