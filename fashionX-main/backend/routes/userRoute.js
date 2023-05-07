import express from 'express'
import { loginUser, registerUser, updateUser, deleteUser, getUser, getAllUsers, getStats } from "../controllers/auth.js";

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.get('/find/:id', getUser)
router.get('/getAll', getAllUsers)
router.get('/Stats', getStats)

export default router