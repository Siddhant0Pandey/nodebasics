import express from "express";

const router = express.Router();

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Von" },
  { id: 3, name: "Neuman" },
  { id: 4, name: "SOn" },
];

router.get("/", (req, res) => {
  res.send("this is user page");
});

router.post("/", (req, res) => {
  res.send("user page created");
});

router.post("/", (req, res) => {
  console.log(req.body);
  //   res.status(201).json(users);
});

export default router;
