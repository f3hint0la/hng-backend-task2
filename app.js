const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

const personRouter = require("./routes/route");

app.get("/", async (req, res) => {
  res.send(
    `Welcome to HNGi10 BackEnd Stage Two Task. Move to the "/api" route for all actions`
  );
});

app.use("/api", personRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
