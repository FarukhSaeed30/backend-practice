const ProductTableQueries = {
  getAllProductQuery: "SELECT * FROM products",
  createProductQuery: "Insert into products (title, description, price, sku, images, thumbnail) values ($1,$2,$3,$4,$5,$6)",
  deleteProductQuery:"Delete from products where product_id = $1",
  updateProductQuery:"UPDATE products SET title = $2, description = $3, price = $4, sku = $5, images=$6, thumbnail=$7 WHERE product_id = $1"
};

module.exports = { ProductTableQueries };
