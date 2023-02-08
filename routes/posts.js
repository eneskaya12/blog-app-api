import { Router } from "express";
import Post from "../models/Post.js";

const router = Router();

//CREATE POST
router.post("/", async (req, res) => {
    
    const newPost = new Post(req.body);

    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;