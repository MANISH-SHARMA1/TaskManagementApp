const express = require("express");
const dbConnect = require("./dbConnect");
const authRouter = require("./routers/authRouter");
const taskRouter = require("./routers/taskRouter");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

//middlewares
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use("/auth", authRouter);
app.use("/task", taskRouter);

app.get("/", (req, res) => {
  res.status(200).send("ok from server");
});

const PORT = 4000;

dbConnect();

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
