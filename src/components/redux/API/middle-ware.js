// import * as action from './action-type';

// const api = ({dispatch}) => (next) => async (action) => {
//     if(action.type !== action.apiCallBegan) return next(action);

//     const {url,method,data,onStart,onSuccess,onError}= action.payload;

//     if(onStart) dispatch({type:onStart});

//     next(action);

//     try{
//         console.log("am add the book to the server");
//         const request = new Request(getURL);
//         const response = fetch(request, {
//           method: "POST",
//           mode: 'cors',
//           headers: {'Content-Type': 'application/json'}, 
//           body: data
//     }
// }