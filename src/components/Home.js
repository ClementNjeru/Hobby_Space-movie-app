import React, { useEffect, useState } from "react";
import MovieBox from "./MovieBox";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=3609bf468904d41279f91bb5f50998d1";
function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovies(data.results);
      });
  }, []);
  return (
    <div className="container3">
      <div className="image-container">
        <div className="inner-image-container">
          {movies.map((movieReq) => (
            <MovieBox key={movieReq.id} {...movieReq} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
