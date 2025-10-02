# PLP Bookstore MongoDB Project

## Overview
This project demonstrates MongoDB setup, CRUD operations, advanced queries, aggregation pipelines, and indexing using a sample bookstore database.

### Task 1: MongoDB Setup

✔️ Database plp_bookstore created
✔️ Collection books created

### Task 2: CRUD Operations

✔️ Insert, Find, Update, Delete queries implemented

### Task 4: Aggregation Pipelines

✔️ Average price by genre
✔️ Author with most books
✔️ Grouping books by decade

### Task 5: Indexing

✔️ Index on title
✔️ Compound index on author + published_year
✔️ Performance tested with explain()



## Setup Instructions

###  Install MongoDB
- Install **MongoDB Community Edition** locally, OR set up a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster.

###  Clone this repository
```bash
git clone <https://github.com/PLP-MERN-Stack-Development/mongodb-data-layer-fundamentals-and-advanced-techniques-kwanelexavi.git>
cd plp_bookstore
### Install dependencies

bash

npm init -y
npm install mongodb

### Insert sample data
Run the insert_books.js script to populate the database with sample books:

bash
Copy code
node insert_books.js
### Run queries
Execute all queries (CRUD, advanced, aggregation, indexing) using:

bash
Copy code
node queries.js




### Author

Your Kwanele Mntambo – PLP MongoDB Project


Example Queries

Find all Fiction books:

db.books.find({ genre: "Fiction" })


Update book price:

db.books.updateOne({ title: "1984" }, { $set: { price: 15.99 } })


Aggregation – Average price by genre:

db.books.aggregate([{ $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }])


![MongoDB Collections Screenshot](images/mangodb.png)

![MongoDB Collections Screenshot](images/mangodb2.png)




