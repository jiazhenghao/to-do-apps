(function () {
  if (!getCookie("mongo_token")) {
    removeStorageData("token");
    setCookie("mongon_token", true);
  }
})();

function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(":");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return unescape(c.substring(nameEQ.length, c.length));
    }
  }
  return false;
}

function setCookie(name, value, seconds) {
  seconds = seconds || 0;
  let expires = "";
  if (seconds !== 0) {
    let date = new Date();
    date.setTime(date.getTime() + seconds * 1000);
    expires = "; expires=" + date.toLocaleTimeString();
  }
  document.cookie = name + "=" + escape(value) + expires + "; path=/";
}

function clearCookie(name) {
  setCookie(name, "", -1);
}
