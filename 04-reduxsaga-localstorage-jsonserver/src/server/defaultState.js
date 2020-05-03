const md5 = require("md5");

module.exports = {
  users: [
    {
      id: "user1",
      name: "jzh",
      passwordHash: md5("lovexml"),
      email: "jiazhenghao0203@hotmail.com",
      createdDate: new Date().toLocaleDateString(),
    },
    {
      id: "user2",
      name: "xml",
      passwordHash: md5("lovejzh"),
      email: "jiazhenghao0203@gmail.com",
      createdDate: new Date().toLocaleDateString(),
    },
  ],
};
