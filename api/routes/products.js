const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/products");

router.get("/", ProductController.products_get_products);
router.post("/", ProductController.products_save_products);

module.exports = router;
