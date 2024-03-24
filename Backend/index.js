import mysql from "mysql2";
import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "shoes",
  })
  .promise();

app.get("/", (req, res) => {
  console.log("hello world");
  res.status(200).send("HomePage");
});

app.get("/shoes", async (req, res) => {
  try {
    const [rows, fields] = await db.query("SELECT * FROM shoes_table");
    res.status(200).send(rows);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

app.get("/shoes/:id", async (req, res) => {
  try {
    const shoeId = req.params.id;

    const [rows, fields] = await db.query(
      "SELECT * FROM shoes_table WHERE id=?",
      shoeId
    );

    if (rows.length === 0) {
      throw new Error("Shoe not found!");
    }
    res.status(200).send(rows);
  } catch (err) {
    console.log(err);
    res.status(404).send("Shoe not found!");
  }
});

app.delete("/shoes/:id", async (req, res) => {
  try {
    const shoeId = parseInt(req.params.id);
    const [rows, fields] = await db.query(
      "DELETE FROM shoes_table WHERE id=?",
      shoeId
    );
    console.log(rows);
    if (rows.affectedRows === 0) {
      throw new Error("Shoe not found!");
    }
    res.status(200).send("shoe deleted successfully!");
  } catch (err) {
    console.log(err);
    res.status(404).send("Shoe not found");
  }
});

app.patch("/shoes/:id", async (req, res) => {
  try {
    const shoeId = parseInt(req.params.id);

    const shoeData = [
      req.body.id,
      req.body.price,
      req.body.release_date,
      req.body.available === "true",
      req.body.name,
    ];
    const [rows, fields] = await db.query(
      "UPDATE shoes_table SET id=IFNULL(?,id), price=IFNULL(?, price), release_date=IFNULL(?, release_date), available=IFNULL(?, available), name=IFNULL(?, name) WHERE id=?",
      [shoeData[0], shoeData[1], shoeData[2], shoeData[3], shoeData[4], shoeId]
    );
    console.log(rows);
    res.status(200).send("Shoe successfully modified!");
  } catch (err) {
    console.log(err);
    res.status(400).send("Bad request!");
  }
});

app.post("/shoes", async (req, res) => {
  try {
    const shoeData = [
      req.body.price,
      req.body.release_date,
      req.body.available,
      req.body.name,
    ];
    console.log(shoeData);
    const [rows, fields] = await db.query(
      "INSERT INTO shoes_table(price,release_date,available,name) VALUES (?,?,?,?)",
      shoeData
    );
    res.send("Successful post!");
  } catch (err) {
    console.log(err);
    res.status(400).send("Bad request!");
  }
});

app.listen(port, () => {
  try {
    console.log(`Server is runing on port: ${port}`);
  } catch (err) {
    console.log(`Error starting the server: ${err}`);
  }
});
