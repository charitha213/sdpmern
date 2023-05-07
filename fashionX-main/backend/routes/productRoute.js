import express from 'express'
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/product.js";

const router = express.Router()

router.post("/", createProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)
router.get('/find/:id', getProduct)
router.get('/', getAllProducts)

export default router