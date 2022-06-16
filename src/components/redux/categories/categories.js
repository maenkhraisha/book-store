const inistialState = [{}];
const CHECK_STATUS = 'CHECK_STATUS';

/** reducer */
export function categorieReducer(state = inistialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return {};
    default:
      return state;
  }
}

/** action creator */
export function checkStatus() {
  return {
    type: CHECK_STATUS,
  };
}
