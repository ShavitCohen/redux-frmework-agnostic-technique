import { store } from 'redux-logic-layer';
const noop = () => {};
export function connect(namespace) {
  return function (proto, key) {
    
    let unsubscribe;
    
    const oConnectedCallback = proto.connectedCallback || noop;
    const oDisconnectedCallback = proto.disconnectedCallback || noop;
    proto.connectedCallback = function () {
      let currentValue;
      if (unsubscribe) {
        unsubscribe();
      }
      oConnectedCallback.call(this);
      unsubscribe = store.subscribe(() => {
        const state = store.getState();
        if (currentValue === state[namespace]) {
          return;
        }
        currentValue = state[namespace];
        if (typeof this[key] === 'function') {
          this[key](currentValue)
        } else {
          this[key] = currentValue;
        }
      })
    };
    
    proto.disconnectedCallback = function () {
      oDisconnectedCallback.call(this);
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }
}

export const dispatch = (action) => store.dispatch(action);