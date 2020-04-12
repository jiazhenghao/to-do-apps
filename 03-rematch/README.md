# Another refactor, with Rematch

### basic tool-chain is still **create-react-app**

In Chapter2, I turned help to Redux to management state, trigger events with actions, and use only reducers to modify state. This classical pattern is time-consuming, however, especially not suitable for small applications.

---

## But Rematch comes to the rescue! 😎

To tell the truth, I spent a whole night turning class components to-do-app into redux-structure to-dos. There comes the magic, less than 30 minutes to convert redux to rematch to-dos.

---

Rematch combines state, reducer, async events into one single model, yes, it's called **"model"**

```javascript
export const count = {
  state: [1, 2, 3], // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state, payload) {
      return [...state, payload];
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload, rootState) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    },
  }),
};
```

## Many thanks to [Zhang, Liangyi](https://github.com/zhangliangyi) for arming me with this new weapon.

## Usage Tips

1. Left Click on ToDoLists is toggle the state, Active to Completed, or Completed to Active
2. Right Click will remove this line forever, be careful

## An Online [Example](http://todoapp3.jzh.surge.sh)

## More details about rematch, click [here](https://github.com/rematch/rematch) or Chinese Docs [here](https://rematch.gitbook.io/handbook/)

## Also rewrite the CSS by CSS-grid, click [here](https://css-tricks.com/snippets/css/complete-guide-grid/#grid-introduction) if you wish to try grid. Believe me, it would be 真香 🍚(amazing)!
