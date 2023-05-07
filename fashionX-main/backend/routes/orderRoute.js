import express from "express";
import {
  deleteOrder,
  getAllOrders,
  getOrder,
  Income,
  placeOrder,
  updateOrder,
} from "../controllers/order.js";

const router = express.Router();

router.post("/:id", placeOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);
router.get("/find/:id", getOrder);
router.get("/getAll", getAllOrders);
router.get("/income", Income);

export default router;
