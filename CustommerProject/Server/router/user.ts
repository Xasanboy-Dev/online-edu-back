import { Router } from "express";
import { getAllCHattingUsers } from "../controller/Chat";
import {
  checkTokenValid,
  createUser,
  editCommentByUserId,
  getCommentByUserId,
  getUserById,
  getUsers,
  LoginUer,
  updateUser,
} from "../controller/user";
const router = Router();
import search from "./Search/search";

router.get("/all", getUsers);
router.get("/token", checkTokenValid);
router.get("/comments", getCommentByUserId);
router.get("/:id", getUserById);
router.post("/register", createUser);
router.put("/:id", updateUser);
router.put("/comment", editCommentByUserId);
router.post("/login", LoginUer);
router.post("/chattingUsers", getAllCHattingUsers);

router.use("/search", search);

export default router;
