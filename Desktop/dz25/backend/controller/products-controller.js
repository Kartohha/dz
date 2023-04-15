const Product = require('../models/products')

const getProducts = async (req, res) => {
   const products = await Product.find();
   res.send(products);
 }

 const addproduct = async (req, res) => {
   try {
     const product = new Product(req.body)
     await product.save()
     res.status(201).send(product)
   } catch (error) {
     res.status(400).send(error.message)
   }
 }
 
 module.exports = {
   getProducts,
   addproduct
 }