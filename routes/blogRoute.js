import express from "express"

import { createBlog } from "../controllers/blogController.js";


const blogRoute=express.Router()

blogRoute.post("/",createBlog)