const md5 = require("md5");

module.exports = {
  users: [
    {
      name: "jzh",
      passwordHash: md5("lovexml"),
      email: "jiazhenghao0203@hotmail.com",
      createdDate: new Date().toLocaleDateString(),
    },
    {
      name: "xml",
      passwordHash: md5("lovejzh"),
      email: "jiazhenghao0203@gmail.com",
      createdDate: new Date().toLocaleDateString(),
    },
  ],
  todolists: [
    {
      userName: "jzh",
      content:
        "使用tip1，首次登陆，尝试从浏览器的localStorage读取内容，如果浏览器不支持，则每次记录的内容无法保存，下次登陆会重置",
      isComplete: true,
      completeTime: "2020-2-4 12:05:10",
      deleteTime: null,
      createdTime: "2020-2-3 15:23:49",
    },
    {
      userName: "xml",
      content:
        "使用tip1，首次登陆，尝试从浏览器的localStorage读取内容，如果浏览器不支持，则每次记录的内容无法保存，下次登陆会重置",
      isComplete: false,
      completeTime: null,
      deleteTime: "2020-5-4 14:00:01",
      createdTime: "2020-2-3 15:23:49",
    },
  ],
};
