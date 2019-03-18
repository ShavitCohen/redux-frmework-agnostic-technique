import { store } from 'x-redux';
const noop = () => {};
export function connect(namespace) {
  return function (proto, key) {
    
    let unsubscribe;
    
    const oConnectedCallback = proto.connectedCallback || noop;
    const oDisconnectedCallback = proto.disconnectedCallback || noop;
    proto.connectedCallback = function () {
      if (unsubscribe) {
        unsubscribe();
      }
      oConnectedCallback.call(this);
      unsubscribe = store.subscribe(() => {
        const state = store.getState();
        if (typeof this[key] === 'function') {
          this[key](state[namespace])
        } else {
          this[key] = state[namespace];
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