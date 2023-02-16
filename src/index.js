import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actionCreators";

const unsubscribe = store.subscribe(() => {
  // Note: We should unsubscribe if it is not visible
  // to avoid memory leaks
  console.log("Store changed", store.getState());
});

// Dispatch workflow:
// state = reducer(state, action);
// notify the subscribers
store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugAdded("Bug 2"));

// unsubscribe();

store.dispatch(bugRemoved(1));
store.dispatch(bugResolved(2));
console.log(store.getState());
