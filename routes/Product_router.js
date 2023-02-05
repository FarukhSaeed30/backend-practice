const express = require("express");
const { getAllProduct,createProduct,deleteProduct, updateProduct } = require("../controllers/product_controllers");

const router = express.Router();

router.use((req, res, next) => {
  // module for debugging
  console.log("Request arrived in Product routers");
  next();
});

router.get("/", getAllProduct);
router.post("/addProduct", createProduct);
router.delete("/:id",deleteProduct);
router.put("/:id",updateProduct);

module.exports = router;  
