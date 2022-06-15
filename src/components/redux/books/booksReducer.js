import { bookState } from "./books-state";

const ADD_BOOK = "ADD_BOOK";
const REMOVE_BOOK = "REMOVE_BOOK";

/** reducer */
export function bookReducer(state = bookState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          key: ++state.length,
          title: action.payload.title,
          author: action.payload.author,
        },
      ];

    case REMOVE_BOOK:
      console.log("remove book");
      return {
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1),
      };
    default:
      return state;
  }
}

/** action creator */
// export const addBook = (payload) => ({

//   type: ADD_BOOK,
//   payload: {
//     key:++nextKey,
//     title:payload.title,
//     author:payload.author
//   },
// });

export function removeBook() {
  return {
    type: REMOVE_BOOK,
    title: "",
    author: "",
  };
}
