const router = require("express").Router();
const Testimony = require("../models/Testimony");

//CREATE TESTIMONY
router.post("/", async (req, res) => {
  const newTestimony = new Testimony(req.body);
  try {
    const savedTestimony = await newTestimony.save();
    res.status(200).json(savedTestimony);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL TESTIMONIES
router.get("/", async (req, res) => {
  const username = req.query.user;
  try {
    let testimonies;
    if (username) {
      testimonies = await Testimony.find({ username })
        .sort({ createdAt: -1 })
        .limit(10);
    } else {
      testimonies = await Testimony.find().sort({ createdAt: -1 }).limit(10);
    }
    res.status(200).json(testimonies);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE TESTIMONY
router.delete("/:id", async (req, res) => {
  try {
    const testimony = await Testimony.findById(req.params.id);
    if (testimony.username === req.body.username) {
      try {
        await testimony.delete();
        res.status(200).json("Depoimento foi deletado...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("Você só pode deletar o depoimento que adicionou!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
