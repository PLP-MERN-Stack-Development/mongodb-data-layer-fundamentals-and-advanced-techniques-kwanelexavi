// queries.js - Run MongoDB queries using Node.js

const { MongoClient } = require("mongodb");

// Connection URI (replace with Atlas URI if needed)
const uri = "mongodb+srv://<user_name>:<password>@cluster0.o0nfuss.mongodb.net/";

// Database and collection
const dbName = "plp_bookstore";
const collectionName = "books";

async function runQueries() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db(dbName);
    const books = db.collection(collectionName);

    // -------------------------------
    // Task 2: Basic CRUD Operations
    // -------------------------------

    console.log("\n📚 Find all Fiction books:");
    console.log(await books.find({ genre: "Fiction" }).toArray());

    console.log("\n📚 Find books published after 2000:");
    console.log(await books.find({ published_year: { $gt: 2000 } }).toArray());

    console.log("\n📚 Find books by George Orwell:");
    console.log(await books.find({ author: "George Orwell" }).toArray());

    console.log("\n✏️ Update price of '1984' to 15.99:");
    await books.updateOne({ title: "1984" }, { $set: { price: 15.99 } });
    console.log(await books.findOne({ title: "1984" }));

    console.log("\n🗑️ Delete book 'Moby Dick':");
    await books.deleteOne({ title: "Moby Dick" });
    console.log(await books.find({ title: "Moby Dick" }).toArray());

    // -------------------------------
    // Task 3: Advanced Queries
    // -------------------------------

    console.log("\n📚 Books in stock published after 2010:");
    console.log(await books.find({ in_stock: true, published_year: { $gt: 2010 } }).toArray());

    console.log("\n📚 Projection (title, author, price):");
    console.log(await books.find({}, { projection: { title: 1, author: 1, price: 1, _id: 0 } }).toArray());

    console.log("\n📚 Books sorted by price ascending:");
    console.log(await books.find().sort({ price: 1 }).toArray());

    console.log("\n📚 Books sorted by price descending:");
    console.log(await books.find().sort({ price: -1 }).toArray());

    console.log("\n📚 Pagination - Page 1 (5 books):");
    console.log(await books.find().limit(5).skip(0).toArray());

    console.log("\n📚 Pagination - Page 2 (next 5 books):");
    console.log(await books.find().limit(5).skip(5).toArray());

    // -------------------------------
    // Task 4: Aggregation Pipelines
    // -------------------------------

    console.log("\n📊 Average price of books by genre:");
    console.log(await books.aggregate([{ $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }]).toArray());

    console.log("\n📊 Author with the most books:");
    console.log(await books.aggregate([
      { $group: { _id: "$author", bookCount: { $sum: 1 } } },
      { $sort: { bookCount: -1 } },
      { $limit: 1 }
    ]).toArray());

    console.log("\n📊 Group books by publication decade and count:");
    console.log(await books.aggregate([
      {
        $group: {
          _id: { $floor: { $divide: ["$published_year", 10] } },
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          decade: { $concat: [{ $toString: { $multiply: ["$_id", 10] } }, "s"] },
          count: 1,
          _id: 0
        }
      },
      { $sort: { decade: 1 } }
    ]).toArray());

    // -------------------------------
    // Task 5: Indexing
    // -------------------------------

    console.log("\n⚡ Creating index on title...");
    await books.createIndex({ title: 1 });

    console.log("⚡ Creating compound index on author + published_year...");
    await books.createIndex({ author: 1, published_year: -1 });

    console.log("\n📊 Explain query using title index:");
    console.log(await books.find({ title: "1984" }).explain("executionStats"));

    console.log("\n📊 Explain query using compound index:");
    console.log(await books.find({ author: "George Orwell", published_year: 1949 }).explain("executionStats"));

  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
    console.log("\n🔒 Connection closed");
  }
}

// Run all queries
runQueries();
