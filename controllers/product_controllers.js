const pool = require("../connections/postgre");
const { API_STATUS_CODES } = require("../constants/constants");
const { ProductTableQueries } = require("../utils/Product_queries");

const { SUCCESS, NOT_FOUND, AUTHORIZATION_FAILED } = API_STATUS_CODES;
const { getAllProductQuery,createProductQuery,updateProductQuery,deleteProductQuery} = ProductTableQueries;

const getAllProduct = async (req, res) => {
  console.log("Request arrived in getAllProduct controllers");
  try {
    const result = await pool.query(getAllProductQuery);
    console.log("result here", result);
    res.status(SUCCESS).json(result.rows);
  } catch (error) {
    throw error;
  }
};
const createProduct = async (req, res) => {
  console.log("Request arrived in createProduct controllers");
  try {
    const { title, description, price, sku, images, thumbnail } = req.body
    const result = await pool.query(createProductQuery,[title, description, price, sku, images, thumbnail]);
    console.log("result here", result);
    res.status(SUCCESS).json({ 
      message: "Product added successfully",
      result: result.rows[0]});
  } catch (error) {
    throw error;
  }
};
const updateProduct = async (req, res) => {
  console.log("Request arrived in updateProduct controllers");
  try {
    const {id} = req.params;
    const {title, description, price, sku, images, thumbnail} = req.body;
    const result = await pool.query(updateProductQuery,[id,title, description, price, sku, images, thumbnail]);
    console.log("result here", result);
    res.status(SUCCESS).json({ 
      message: "Product updated successfully",
      result: result.rows[0]});
  } catch (error) {
    throw error;
  }
};
const deleteProduct = async (req, res) => {
  console.log("Request arrived in deleteProduct controllers");
  try {
    const { id } = req.params
    const result = await pool.query(deleteProductQuery,[id]);
    console.log("result here", result);
    res.status(SUCCESS).json({ 
      message: "Product deleted successfully",
      result: result.rows[0]});
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllProduct, createProduct, deleteProduct,updateProduct };
