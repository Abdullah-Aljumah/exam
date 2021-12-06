const express = require("express");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
require("./db");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use(cors());

app.use(morgan("dev"));

const todoRouter = require("./routers/routes/todos");
app.use(todoRouter);

app.listen(
  (PORT,
  () => {
    console.log(`server is on ${PORT}`);
  })
);
