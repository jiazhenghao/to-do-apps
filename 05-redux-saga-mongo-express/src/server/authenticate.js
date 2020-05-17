const uuid = require("uuid");
const md5 = require("md5");
const connectDB = require("./connectDB");

const authenticationTokens = [];

async function assembleUserState(user) {
  let db = await connectDB();
  let tasks = await db
    .collection("todolists")
    .find({ userName: user.name })
    .toArray();
  return {
    tasks,
    session: { authenticated: "AUTHENTICATED", id: user._id, user: user.name },
  };
}

const authenticationRoute = (app) => {
  app.post("/authenticate", async (req, res) => {
    let { username, password } = req.body;
    let db = await connectDB();
    let collection = db.collection("users");
    let user = await collection.findOne({ name: username });

    if (!user) {
      return res.status(500).send("User not found.");
    }

    let hash = md5(password);
    let passwordCorrect = hash === user.passwordHash;
    if (!passwordCorrect) {
      return res.status(500).send("Password incorrect.");
    }

    let token = uuid();
    authenticationTokens.push({
      token,
      userID: user._id,
    });
    let state = await assembleUserState(user);
    res.send({ token, state });
  });
};

module.exports = authenticationRoute;
