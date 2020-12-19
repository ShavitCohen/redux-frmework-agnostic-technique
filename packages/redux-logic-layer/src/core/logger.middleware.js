export const loggerMiddleware = (store) => (next) => (action) => {
  if (!action) return;
  const { getState } = store;
  const type = action.type;
  let { meta } = action;

  if (!type.includes("@@")) {
    const { payload } = action;
    meta = meta || { feature: "[UNKNOWN]" };

    switch (true) {
      case type.includes("SET_"):
        console.group(`${meta.feature} ${type}`);
        console.log({ payload, meta });
        console.group("CURRENT STATE:");
        console.log(getState());
        console.groupEnd();

        next(action);

        console.group("NEXT STATE: ");
        console.log(getState());
        console.groupEnd();

        console.groupEnd();

        break;
      default:
        console.group(`${meta.feature} ${type}`);
        console.log({ payload, meta });
        console.groupEnd();
        next(action);
    }
  } else {
    next(action);
  }
};

