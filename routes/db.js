const express = require("express");
const router = express.Router();
const { addProduct, getProducts, deleteEmployee, updateProduct, addOrder } = require("../controllers/db");

router.post("/addProduct", addProduct);
router.post("/addOrder", addOrder);
router.get("/getProducts", getProducts);
router.delete("/deleteProduct/:id", deleteEmployee);
router.put("/updateProduct/:id", updateProduct); 

module.exports = router;
