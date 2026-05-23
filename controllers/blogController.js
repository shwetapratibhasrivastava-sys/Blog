import Blog from "../models/blogModel.js";

export const createBlog=async(req,res)=>{
 try {
    const{title,content,author}=req.body
    if(!title||!content||!author){
        return res.json({
            message:"All feilds are required"
        })
    }
     const existingBlog=await Blog.findOne({title})
    if(existingBlog){
        return res.json({
            message:"This blog already exist",
            data:existingBlog
        })
    }
    const blog=await Blog.create({title,content,author})
    res.status(200).json({
        message:"Blog created successfully",
        data:blog
    })
 } catch (error) {
    res.json({
        message:error.message
    })
 }











}