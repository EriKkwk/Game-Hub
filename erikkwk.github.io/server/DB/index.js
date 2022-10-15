const express = require("express");
const authRouter = require('./routes/authRouter')
var cors = require('cors')
const mysql = require("mysql2");
const db = require('./db');

const PORT = process.env.port || 8000
const app = express();

app.use(cors())
app.use(express.json())
app.use('/auth', authRouter)

app.get("/", (req, res) => {
  res.send("w");
});

app.listen(PORT, () => {
  console.log(`Server started on PORT : ${PORT}`)
}
);