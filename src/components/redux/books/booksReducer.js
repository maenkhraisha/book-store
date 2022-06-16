import bookState from './books-state';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

/** reducer */
export default function bookReducer(state = bookState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          key: state.length + 1,
          categorie: 'Islamic',
          title: action.payload.title,
          author: action.payload.author,
        },
      ];

    case REMOVE_BOOK:
      return state.filter((s) => s.key !== parseInt(action.payload.key, 10));
    default:
      return state;
  }
}
