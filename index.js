const express = require("express");
const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  res.send("It's working don't worry!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
