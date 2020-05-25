export function localStorageInitialize(initialState) {
  if (window.localStorage) {
    // if localStorage has not yet set a value, then do this
    if (localStorage.getItem("lists") === null) {
      const array = [
        [
          "使用tip1，首次登陆，您会看到以下这些使用教程。跟着我，学会如何操作吧🤓",
          1,
        ],
        ["使用tip2，建议不要使用IE浏览器，可以使用FireFox，Chrome等浏览器", 1],
        [
          "使用tip3，输入你要做的待办事宜，点击添加，就完成记录了，数据存储在本地浏览器的数据库里，超级安全，足够隐私，请放心大胆使用",
          1,
        ],
        [
          "使用tip4，鼠标左键某记录，会将该待办记录在完成与未完成状态之间切换。右键删除，进入右侧回收站区域",
          1,
        ],
        [
          "使用tip5，输入框除了可以添加记录，也可以搜索某条记录，适用于代办过多的情况",
          1,
        ],
        [
          "使用tip6，回收站的待办可以永久删除（垃圾筒图标），也可以放回工作区（云图标）",
          1,
        ],
        ["使用tip7，其余功能烦请自行探索，happy coding, happy using，thx", 1],
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
    // console.log(initialState);
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
