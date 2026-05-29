import express from "express"

import { createBlog, deleteBlog, getBlog, getBlogById, updateBlog } from "../controllers/blogController.js";
import authMiddlware from "../middleware/authMiddleware.js";

const blogRoute=express.Router()

blogRoute.post("/create",createBlog)
blogRoute.get("/get",authMiddlware,getBlog)
blogRoute.get("/get/:id",authMiddlware,getBlogById)
blogRoute.put("/update/:id",authMiddlware,updateBlog)
blogRoute.delete("/delete/:id",authMiddlware,deleteBlog)
export default blogRoute