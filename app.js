require("dotenv").config();

// async errors

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const notFoundMiddleWare = require("./middleware/not-found");
const errorMiddleWare = require("./middleware/error-handler");

//middleware

app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send('<h1>Store API</h2><a href="/api/v1/products"></a>');
});

//products route

app.use(notFoundMiddleWare);
app.use(errorMiddleWare);

const start = async () => {
  try {
    //connect db
    app.listen(port, console.log(`server is listening ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
