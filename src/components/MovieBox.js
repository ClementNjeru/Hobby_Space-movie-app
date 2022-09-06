import React from "react";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

function MovieBox({title, poster_path, overview}) {
  return (
    <div className="Card text-center bg-secondary mb-3">
        <div className="Card-body">
            <img className="Card-img-top" src={API_IMG + poster_path}alt="movie"/>
            <div className="Card-body">
                <button type = "button" className="btn btn-dark">More</button>

      {/* <h1>{title}</h1> */}
     
      {/* <p>{overview}</p> */}
    </div>
    </div>
    </div>
  );
}

export default MovieBox;
