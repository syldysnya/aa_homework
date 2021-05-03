import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(addLoggingToDispatch));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

const addLoggingToDispatch = store => {
  // debugger
  return (next) => {
    return (action) => {
      console.log(store.getState());
      console.log(action);
      next(action);
      console.log(store.getState())
    }
  }
}

// const applyMiddleware = (store, ...args) => {
//   let dispatch = store.dispatch;

//   args.forEach(middleware => {
//     dispatch = middleware(store)(dispatch);
//   })

//   return Object.assign({}, store, { dispatch })
// }

export default configureStore;
