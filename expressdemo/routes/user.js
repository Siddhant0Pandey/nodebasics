import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is user page");
});

router.post("/", (req, res) => {
  res.send("user page created");
});

export default router;
