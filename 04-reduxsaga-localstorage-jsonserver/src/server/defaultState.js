const md5 = require("md5");

module.exports = {
  users: [
    {
      id: "user1",
      name: "jzh",
      passwordHash: md5("lovexml"),
    },
    {
      id: "user2",
      name: "xml",
      passwordHash: md5("lovejzh"),
    },
  ],
};
