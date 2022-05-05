function createLoggerMiddleware({ getState }) {
  return next => action => {
    const prevState = getState();
    next(action);
    const nextState = getState();
    // console.log(`%c prev state`, `color: #9E9E9E`, prevState);
    // console.log(`%c action`, `color: #03A9F4`, action);
    // console.log(`%c next state`, `color: #4CAF50`, nextState);
  };
}

export { createLoggerMiddleware };
