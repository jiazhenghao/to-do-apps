const connectDB = require('./connectDB');
const defaultState = require("./defaultState");


async function initializeDB() {
  let db = await connectDB();
  let user = await db.collection("users").findOne({ name: "jzh" });
  if (!user) {
    for (let collectionName in defaultState) {
      let collection = db.collection(collectionName);
      await collection.insertMany(defaultState[collectionName]);
    }
    console.log("first initialize mongodb");
  }
}

initializeDB();
