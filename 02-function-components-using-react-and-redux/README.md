# This time refactoring To-do-app with React function components, Redux, React-redux, Redux-thunk

## basic tool-chain is still create-react-app

In order to pass data(state) between components, I use Redux to create a **central store**, several plugins like **redux-immutable-state-invariant** to debug redux in Modern Browsers.

---

This structure goes in this way: For each component using State or Dispatch, I wrap it with React-redux's Connect HOC. Parallel to 'components' folder, a 'redux' folder is created to deal with actions, reducers and store factory function. Also, compared to the last example, prop-types is also introduced.

## Usage Tips

1. Left Click on ToDoLists is toggle the state, Active to Completed, or Completed to Active
2. Right Click will remove this line forever, be careful

## An Online [Example](http://todoapp2.jzh.surge.sh)

## More details about redux, click [here](https://redux.js.org/introduction/getting-started) or Chinese Docs [here](https://cn.redux.js.org/)
