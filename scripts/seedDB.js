const mongoose = require("mongoose");
const db = require("../../models");
mongoose.Promise = global.Promise;

// This file empties the Articles collection and inserts the articles below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googleBooks",
  {
    useMongoClient: true
  }
);

const bookSeed = [
  {
    title: "title1",
    url: "url1",
    date: new Book(Book.now())
  },
  {
    title: "title2",
    url: "url2",
    date: new Book(Book.now())
  },
  {
    title: "title3",
    url: "url3",
    date: new Book(Book.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
