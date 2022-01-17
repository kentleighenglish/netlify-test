import express from "express";

const app = express();

app.get("*", (request, response) => {
  response.end("Hello World!");
})

app.listen(3000, () => {
  console.log("App listening");
})