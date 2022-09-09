import React, { Component, useEffect, useState } from "react";
import Comment from "./Comment";

function Review() {
  const [reviews, setReviews] = useState([]);
  // const [comment, setComment] = useState([]);
  // const [name, setName] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/reviews")
      .then((response) => response.json())
      .then((reviews) => setReviews(reviews));
  }, []);


  let myReviews = reviews.map((review) => (
  
    <Comment key={review.id} name={review.name} comment={review.comments} />
  ));
  console.log(reviews);
  return (
    <div className="comment-container">
     
      <h1 className="comment">
        Please add your feedback here
      </h1>
      <form>
        <label for="fname" id ="name"></label>
        <input type="text" id="fname" name="fname" placeholder="Enter your name" /> <br></br>
        <label for="lname"></label>
        <input type="text" id="lname" name="lname" placeholder="Add a comment"/> <br></br>
        <input type="submit" id="btn" value="post review"/>
      </form>
      {myReviews}
    </div>
  );
}

export default Review;
