const connectToMongo = require("./db");
var cors = require("cors");
const http = require("http");
const express = require("express");
const path = require("path");
const UserRoutes = require('./routes/UserRoutes')

// ** connect to mongoDB server
connectToMongo();

const port = process.env.PORT;
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(express.json());

app.use("/user", UserRoutes);


app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
