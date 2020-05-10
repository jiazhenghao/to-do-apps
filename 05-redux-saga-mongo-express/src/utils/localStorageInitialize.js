export function localStorageInitialize(initialState) {
  if (window.localStorage) {
    // if localStorage has not yet set a value, then do this
    if (localStorage.getItem("lists") === null) {
      const array = [
        [
          "使用tip1，首次登陆，尝试从浏览器的localStorage读取内容，如果浏览器不支持，则每次记录的内容无法保存，下次登陆会重置",
          1,
        ],
        [
          "使用tip2，如果浏览器有localStorage，则每次登陆，内容不丢失，支持localStorage的浏览器，请查询https://caniuse.com/#search=localStorage",
          1,
        ],
        [
          "使用tip3，左键某条代办记录，该记录的状态会在active和completed之间切换，右键，会删除",
          1,
        ],
        [
          "使用tip4，右键删除的记录会被放到右侧的回收区，点击垃圾回收图标，永久删除，点击cloud图标，则该记录会被还原且置顶",
          1,
        ],
        [
          "使用tip5，输入框除了可以add记录，也可以搜索某条记录，适用于代办过多的情况",
          1,
        ],
        [
          "使用tip6，所有数据存在本地浏览器中，对个人安全，但即使同一台电脑，跨多个浏览器，存储是不同的",
          1,
        ],
      ];
      const str = JSON.stringify(array);
      localStorage.setItem("lists", str);
    }

    // after that, localStorage must has something to render as initialState
    initialState.lists = JSON.parse(localStorage.getItem("lists"));
    initialState.currentMode = 1;

    // set up theme
    if (localStorage.getItem("theme-todoapp") === null) {
      localStorage.setItem("theme-todoapp", 0);
      document.documentElement.setAttribute("theme", "0");
      initialState.themeColor = 0;
    } else {
      document.documentElement.setAttribute(
        "theme",
        localStorage.getItem("theme-todoapp") + ""
      );
      initialState.themeColor = localStorage.getItem("theme-todoapp") * 1;
    }

    // add deletedItems into initialState
    if (localStorage.getItem("deletedItems") === null) {
      const array = [];
      localStorage.setItem("deletedItems", JSON.stringify(array));
    } else {
      initialState.deletedItems = JSON.parse(
        localStorage.getItem("deletedItems")
      );
    }

    // read language from localstorage
    if (localStorage.getItem("language") === null) {
      localStorage.setItem("language", 0);
    } else {
      const num = localStorage.getItem("language") * 1;
      initialState.language = num;
    }
    return initialState;
  } else {
    initialState.lists = [
      [
        "经检测，发现你的浏览器不支持本地存储，请更换浏览器，否则无法永久保存数据",
        1,
      ],
      ["IE6 IE7 不支持localStorage", 1],
    ];
    initialState.isLocalStorageAvailable = false;
    return initialState;
  }
}
