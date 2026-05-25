import Blog from "../models/blogModel.js";

export const createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    if (!title || !content || !author) {
      return res.json({
        message: "All fields are required",
      });
    }

    const existingBlog = await Blog.findOne({ title });

    if (existingBlog) {
      return res.json({
        message: "This blog already exists",
        data: existingBlog,
      });
    }

    const blog = await Blog.create({ title, content, author });

    res.status(200).json({
      message: "Blog created successfully",
      data: blog,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}; // ✅ IMPORTANT: function closed here


// ✅ Now separate functions
export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.find();
    res.json(blog);
  } catch (error) {
    res.json(error.message);
  }
};

export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (error) {
    res.json(error.message);
  }
};

export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ message: "Blog updated", data: blog });
  } catch (error) {
    res.json(error.message);
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted", data: blog });
  } catch (error) {
    res.json(error.message);
  }
};