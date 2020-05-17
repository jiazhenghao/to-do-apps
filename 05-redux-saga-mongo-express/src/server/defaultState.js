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
      userName: "jzh",
      content:
        "使用tip2，如果浏览器有localStorage，则每次登陆，内容不丢失，支持localStorage的浏览器，请查询https://caniuse.com/#search=localStorage",
      isComplete: false,
      completeTime: null,
      deleteTime: null,
      createdTime: "2020-2-3 15:23:51",
    },
    {
      userName: "jzh",
      content:
        "使用tip3，左键某条代办记录，该记录的状态会在active和completed之间切换，右键，会删除",
      isComplete: false,
      completeTime: null,
      deleteTime: null,
      createdTime: "2020-2-3 15:23:52",
    },
    {
      userName: "jzh",
      content:
        "使用tip4，右键删除的记录会被放到右侧的回收区，点击垃圾回收图标，永久删除，点击cloud图标，则该记录会被还原且置顶",
      isComplete: false,
      completeTime: null,
      deleteTime: null,
      createdTime: "2020-2-3 15:23:54",
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
