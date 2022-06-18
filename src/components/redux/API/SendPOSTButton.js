import React from "react";

const URL =
"https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GorvPCNNZt9xnS7jfgYY/books/";

const request = new Request(URL);

const addLike = async (itemID) => {
    const request = new Request(URL);
    fetch(request, {
      method: 'POST',
      body: JSON.stringify({
        "item_id":"15",
        "title": "1950",
        "author": "No One------",
        "category": "Political",
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
  };

const SendPOSTButton = () => {
 
  const handlePostAction = () => {
    console.log("I will post the book");
    addLike();
    
  };

  return (
    <div>
      <button type="button" onClick={handlePostAction}>
        SEND POST
      </button>
    </div>
  );
};

export default SendPOSTButton;


