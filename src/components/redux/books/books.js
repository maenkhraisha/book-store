const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [{}];

/** reducer */
export function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        title: action.title,
        author: action.author,
      };
    case REMOVE_BOOK:
      return {
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1),
      };
    default:
      return state;
  }
}

/** action creator */
export function addBook() {
  return {
    type: ADD_BOOK,
    title: '',
    author: '',
  };
}

export function removeBook() {
  return {
    type: REMOVE_BOOK,
    title: '',
    author: '',
  };
}
