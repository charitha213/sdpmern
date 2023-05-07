import express from "express";
import {
  wishlist,
  deleteWishlist,
  getAllWishlists,
  getWishlist,
  removeProduct,
} from "../controllers/Wishlist.js";

const router = express.Router();

router.post("/:id", wishlist);
router.put("/:id/:pId", removeProduct);
router.delete("/:id", deleteWishlist);
router.get("/find/:userId", getWishlist);
router.get("/getAll", getAllWishlists);

export default router;
