import { Router } from "express";
import Category from "../models/Category.js";

const router = Router();

//CREATE CATEGORY
router.post("/", async (req, res) => {
    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;