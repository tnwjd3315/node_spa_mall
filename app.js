const express = require('express');
const mongoose = require("mongoose")
const app = express();
const port = 3003;

mongoose.set('strictQuery', true);
const goodsRouter = require("./routes/goods");
const cartsRouter = require("./routes/carts.js")

const connect = require("./schemas");
connect();


app.use(express.json())
// localhost:3003/api -> goodsRouter
app.use("/api", [goodsRouter, cartsRouter]);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});





