import express from "express"

import { createBlog, deleteBlog, getBlog, getBlogById, updateBlog } from "../controllers/blogController.js";


const blogRoute=express.Router()

blogRoute.post("/",createBlog)
blogRoute.get("/",getBlog)
blogRoute.get("/:id",getBlogById)
blogRoute.put("/:id",updateBlog)
blogRoute.delete("/:id",deleteBlog)
export default blogRoute