const express = require("express");
const router = express.Router();
const Food = require("../models/Food");

router.post("/add", async (req, res) => {
    const food = new Food(req.body);
    await food.save();
    res.json(food);
});

router.get("/", async (req, res) => {
    const foods = await Food.find();
    res.json(foods);
});

router.put("/claim/:id", async (req, res) => {
    const food = await Food.findByIdAndUpdate(
        req.params.id,
        { status: "claimed" },
        { new: true }
    );
    res.json(food);
});

module.exports = router;