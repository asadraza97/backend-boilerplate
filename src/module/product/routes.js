
import { Router } from "express";
import getController from "./controller/get.js";
import postController from "./controller/post.js";
import deleteController from "./controller/delete.js";
import updateController from "./controller/update.js";
import { authentication } from "../../helper/index.js";

const router = Router()

router.get("/",authentication, getController)
router.post("/", postController)
router.delete("/:id", deleteController)
router.put("/:id", updateController)

export default router