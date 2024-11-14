import {Router} from "express"
import userRoutes from "../module/user/routes.js"
import productRoutes from "../module/product/routes.js"
import uploadRoutes from "../module/upload/routes.js"
import categoryRoutes from "../module/category/routes.js"

const router = Router();

router.use("/user", userRoutes)
router.use("/product", productRoutes)
router.use("/upload", uploadRoutes)
router.use("/category", categoryRoutes)

export default router;