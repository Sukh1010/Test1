import express from "express";
import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

const router = express.Router();

router.get("/", getUser);
router.put("/:_id", updateUser);
router.delete("/:_id", deleteUser);
router.post("/", createUser);

export default router;
