import React, { useEffect, useState } from "react";
import MovieBox from "./MovieBox";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=3609bf468904d41279f91bb5f50998d1";
function Home() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie]= useState("")

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovies(data.results);
      });
  }, []);

  const search=(event) => {
    if (event.key === "Enter"){
      setMovies(`https://api.themoviedb.org/3/movie/popular?api_key=${search.api_key}`)
    }
  }
  return (
    <div className="container3">
      <input type="search" className="search" placeholder="search..." onChange ={e=>setSearchMovie(e.target.value)}/>      <div className="image-container">

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
