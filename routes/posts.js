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

//UPDATE POST
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if(post.username === req.body.username){
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
                res.status(200).json(updatedPost);
            } catch (error) {
                res.status(500).json(err);
            }
        }else{
            res.status(401).json("You can update only your post!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;