export const loggerMiddleware = ({ getState }) => (next) => (action) => {

  if (action.type.includes('@@')) {
    next(action);
    return;
  }

  const { meta, payload } = action;
  switch (true) {
    case action.type.includes('SET_'): {
      console.group(`${action.type}`);
      console.log({ payload, meta });
      console.group('CURRENT STATE:');
      console.log(getState());
      console.groupEnd();

      next(action);

      console.group('NEXT STATE: ');
      console.log(getState());
      console.groupEnd();

      console.groupEnd();
    }
      break;
    default: {
      console.group(`${action.type}`);
      console.log({ payload, meta });
      console.groupEnd();
      next(action);
    }
  }

};