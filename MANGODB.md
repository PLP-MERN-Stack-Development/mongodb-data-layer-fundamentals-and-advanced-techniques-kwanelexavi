PLP Bookstore MongoDB Project
Overview
This project demonstrates MongoDB setup, CRUD operations, advanced queries, aggregation pipelines, and indexing using a sample bookstore database.

Getting Started
Prerequisites
Node.js installed

MongoDB installed and running

Git installed

Installation
Clone the repository:

bash
git clone https://github.com/PLP-MERN-Stack-Development/mongodb-data-layer-fundamentals-and-advanced-techniques-kwanelexavi.git
cd plp_bookstore
Install dependencies:

bash
npm init -y
npm install mongodb
Insert sample data:

bash
node insert_books.js
Run queries:

bash
node queries.js
Project Features
Task 1: MongoDB Setup
✔️ Database plp_bookstore created
✔️ Collection books created

Task 2: CRUD Operations
✔️ Insert, Find, Update, Delete queries implemented

Task 4: Aggregation Pipelines
✔️ Average price by genre
✔️ Author with most books
✔️ Grouping books by decade

Task 5: Indexing
✔️ Index on title
✔️ Compound index on author + published_year
✔️ Performance tested with explain()

Example Queries
Find all Fiction books:
javascript
db.books.find({ genre: "Fiction" })
Update book price:
javascript
db.books.updateOne({ title: "1984" }, { $set: { price: 15.99 } })
Aggregation - Average price by genre:
javascript
db.books.aggregate([{ $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }])
Screenshots
https://images/mangodb.png

https://images/mangodb2.png

Author
Kwanele Mntambo – PLP MongoDB Project

write it on a README.md file
I'll create a comprehensive README.md file based on your project description. Here's the formatted version:

markdown
# PLP Bookstore MongoDB Project

## Overview
This project demonstrates MongoDB setup, CRUD operations, advanced queries, aggregation pipelines, and indexing using a sample bookstore database.

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB installed and running
- Git installed

### Installation

1. Clone the repository:
```bash
git clone https://github.com/PLP-MERN-Stack-Development/mongodb-data-layer-fundamentals-and-advanced-techniques-kwanelexavi.git
cd plp_bookstore
Install dependencies:

bash
npm init -y
npm install mongodb
Insert sample data:

bash
node insert_books.js
Run queries:

bash
node queries.js
Project Features
Task 1: MongoDB Setup
✔️ Database plp_bookstore created
✔️ Collection books created

Task 2: CRUD Operations
✔️ Insert, Find, Update, Delete queries implemented

Task 4: Aggregation Pipelines
✔️ Average price by genre
✔️ Author with most books
✔️ Grouping books by decade

Task 5: Indexing
✔️ Index on title
✔️ Compound index on author + published_year
✔️ Performance tested with explain()

Example Queries
Find all Fiction books:
javascript
db.books.find({ genre: "Fiction" })
Update book price:
javascript
db.books.updateOne({ title: "1984" }, { $set: { price: 15.99 } })
Aggregation - Average price by genre:
javascript
db.books.aggregate([{ $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }])
Screenshots
https://images/mangodb.png

https://images/mangodb2.png

Author
Kwanele Mntambo – PLP MongoDB Project

