const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routeUrls = require("./routes/routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { urlencoded } = require("express");

dotenv.config();

mongoose.connect(
  process.env.DATABASE_ACCESS,
  () => console.log("database connected"),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());
app.use(urlencoded({ extended: true }))
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true,
}));
app.use(cookieParser("klajsdlkjlksjlkja"))
app.use("/app", routeUrls);


const errorHandler = (err, req, res, next) => {
  if (res.headerSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
};

app.use(errorHandler);

app.listen(4000, () => console.log("server is up and running"));
