import { Router } from "express"
import { Request } from "express";
import multer from "multer"
import { createNewPost, deletePost, getOnePostsById, getPosts, updatePost } from "../../controller/Posts/post";

const image = multer.diskStorage({
  destination: (req: Request, file: any, cb: any) => {
    cb(null, "/Uploads/Images");
  },
  filename: (req: Request, file: any, cb) => {
    let role = req.headers.authorization;
    let id = req.headers.accept;
    cb(null, role! + id + ".png");
  }
});

const vidoe = multer.diskStorage({
  destination: (req: Request, file: any, cb: any) => {
    cb(null, "/Uploads/Videos");
  },
  filename: (req: Request, file: any, cb) => {
    let role = req.headers.authorization;
    let id = req.headers.accept;
    cb(null, role! + id + ".mp4");
  }
});

const uploadImage = multer({ storage: image })
const uploadVideo = multer({ storage: vidoe })
const router = Router()



router.post(
  "/image",
  uploadImage.single("avatar"),
  createNewPost
)

router.post(
  "/video",
  uploadImage.single("post"),
  createNewPost
)
router.delete("/", deletePost)
router.put("/", updatePost)
router.get('/all', getPosts)
router.get('/all/true')
router.get("/:id", getOnePostsById)

export default router