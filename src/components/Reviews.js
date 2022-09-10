import React, { Component, useEffect, useState } from "react";
import Comment from "./Comment";
// import NewReview from "./NewReview";

function Review() {
  const [reviews, setReviews] = useState([]);
  // const [comment, setComment] = useState("");
  const [formData, setFormData] = useState({
    name: "", 
    comments: ""

  });
  useEffect(() => {
    fetch("http://localhost:9292/reviews")
      .then((response) => response.json())
      .then((reviews) => setReviews(reviews));
  }, []);
  let myReviews = reviews.map((review) => (
  
    <Comment key={review.id} name={review.name} comment={review.comments} />
  ));
  console.log(reviews);

  function handleNewReview(e) {
    e.preventDefault();

    fetch("http://localhost:9292/reviews",{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: formData.name,
          comments: formData.comments
        }),

    })
    .then((res) => res.json())
    .then((newReviewFromBackend) =>{
        // const updatedReviews = [newReviewFromBackend, ...reviews];
        // setReviews(updatedReviews);
        console.log(newReviewFromBackend)
    });
}
const handleChange = e => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
}
  return (
    <div className="comment-container">
      <h1 className="comment">
        Please add your feedback here
      </h1>
      <form onClick={handleNewReview}>
        {/* <label for="fname" id ="name"></label> */}
        <input type="text" id="fname" name="name" placeholder="Enter your name" onChange ={handleChange}/> <br></br>
        {/* <label for="lname"></label> */}
        <input type="text" id="lname" name="comments" placeholder="Add a comment" onChange={handleChange}/> <br></br>
        <input type="submit"  id="btn" value="post review"/>
      </form>
      <div className="form-group">
        {myReviews}
      </div> 
    </div>
  );
}

export default Review;
