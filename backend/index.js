const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 3001;

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection established"));

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A product name is required"],
    unique: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, "A product price is required"],
  },
  description: String,
  image: String,
  category: String,
  brand: String,
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

const testProduct = new Product({
  name: "Test Product 2",
  rating: 3,
  price: 200,
  description: "This is a test product",
  image: "images/test.png",
  category: "test",
  brand: "test",
  tags: ["test"],
  createdAt: Date.now(),
});

testProduct
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log(err);
  });


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
