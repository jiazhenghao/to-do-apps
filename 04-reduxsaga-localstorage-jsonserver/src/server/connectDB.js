const MongoClient = require("mongodb").MongoClient;
const chalk = require("chalk");
const url = process.env.MONGODB_URI || `mongodb://localhost:27017/todoapp`;
let db = null;

async function connectDB() {
  if (db) return db;
  let client = await MongoClient.connect(url, { useNewUrlParser: true });
  db = client.db();
  console.info(chalk.green("Able to connect to the mongoDB"), db);
  return db;
}

module.exports = connectDB;
