const path = require("path");
const express = require("express");
const app = express(); // create express app
const port = process.env.PORT || 3000;
// add middlewares

app.use(express.static(path.join(__dirname, "..", "build")));

app.use(express.static("public"));

app.get('*', (req, res) => {                       
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));                               
});

// start express server on port 5000
app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});