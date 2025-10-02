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

## Getting Started

Clone the repository and navigate into the project directory:

```bash
git clone https://github.com/PLP-MERN-Stack-Development/mongodb-data-layer-fundamentals-and-advanced-techniques-kwanelexavi.git
cd plp_bookstore
Install Dependencies
Initialize the project and install MongoDB driver:

bash
Copy code
npm init -y
npm install mongodb
Insert Sample Data
Run the insert_books.js script to populate the database with sample books:

bash
Copy code
node insert_books.js
Run Queries
Execute all queries (CRUD, advanced, aggregation, indexing) using:

bash
Copy code
node queries.js
Example Queries
Find all Fiction books:

javascript
Copy code
db.books.find({ genre: "Fiction" })
Update book price:

javascript
Copy code
db.books.updateOne({ title: "1984" }, { $set: { price: 15.99 } })
Aggregation – Average price by genre:

javascript
Copy code
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])
Images



Author
Kwanele Mntambo – PLP MongoDB Project

pgsql
Copy code
