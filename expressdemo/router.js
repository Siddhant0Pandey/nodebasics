import express from "express";
const app = express();
const port = 4000;
import userRouter from "./routes/user.js";
// const userRouter = require("./routes/user");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
