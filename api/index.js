const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const testimonyRoute = require("./routes/testimonies");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(
  cors({
    origin: ["https://orientalfisiodf.onrender.com"],
  })
);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(console.log("MongoDB tá conectado!"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name); //'teia.jpg'
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("O arquivo foi baixado!");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/testimonies", testimonyRoute);

app.listen("5000", () => {
  console.log("Backend tá rodando!");
});
