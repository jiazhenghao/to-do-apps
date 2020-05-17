import { take, put } from "redux-saga/effects";
import axios from "axios";
import * as types from "../actions/actionTypes";
import { processAuthenticateUser, setMongoState } from "../actions/loginAction";
import { history } from "../history";

// add production url to ""
const url =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3001";

export function* userAuthenticationSaga() {
  while (true) {
    const { username, password } = yield take(types.REQUEST_AUTHENTICATE_USER);
    try {
      const { data } = yield axios.post(url + "/authenticate", {
        username,
        password,
      });
      if (!data) {
        throw new Error("Login Failed! Try Again maybe");
      }
      console.log("Authenticated!!!");
      // console.log(data);
      console.log(data.state.tasks);

      /*
      { 
        token: "c48a37d1-6de9-4031-9609-0911473a94cb", 
        state: {
          session: {
            authenticated: "AUTHENTICATED",
            id: "5ec0e404e5732836e942bfc0",
            user: "jzh"
          },
          tasks: [
            { 
              _id: "5ec0e404e5732836e942bfc2", 
              userName: "jzh", 
              content: "使用tip1，录的内容无法保存，下次登陆会重置", 
              isComplete: true, 
              completeTime: "2020-2-4 12:05:10",
              deleteTime: null,
              createdTime: "2020-2-3 15:23:49",
            },
            {
              _id: "5ec0e404e5732836e942bfc3", 
              userName: "jzh", 
              content: "使用tip2，不丢失，alStorage", 
              isComplete: false, 
              completeTime: null, 
              deleteTime: "2020-2-3 15:26:54"
            }
          ]
        }
      */

      let deletedItems = [],
        lists = [];
      // eslint-disable-next-line
      data.state.tasks.map((ele) => {
        if (ele.deleteTime !== null) {
          deletedItems.push([ele.content, ele.deleteTime]);
        } else {
          if (ele.isComplete) {
            lists.push([ele.content, 0]);
          } else {
            lists.push([ele.content, 1]);
          }
        }
      });

      // change state according to data fetched from MongoDB
      yield put(
        setMongoState({
          currentMode: 2,
          filterValue: "",
          show: 0,
          lists,
          deletedItems,
          user: data.state.session.user,
          token: data.token,
        })
      );

      // change state.authenticated to "AUTENTICATED"
      yield put(processAuthenticateUser("AUTHENTICATED"));

      history.push("/");
    } catch (e) {
      console.log("Can't authenticate!");
      yield put(processAuthenticateUser("NOT_AUTHENTICATED"));
    }
  }
}
