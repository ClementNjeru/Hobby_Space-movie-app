// import React from 'react';
// import React, { useEffect, useState } from "react";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn,
//   MDBRipple
// } from 'mdb-react-ui-kit';
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
    <>
      <div className="image-container">
        <div className="inner-image-container">
          {movies.map((movieReq) => (
            <MovieBox key={movieReq.id} {...movieReq} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;

// function Home () {
//   return (

//   <div className="main1">
//     <div >
//       <h1>
//            Welcome to Hobbie_Space!
//       </h1>
//       <MDBCard className='card'>
//       {/* <span class="border"></span> */}
//       <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
//         <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
//         <a>
//           <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
//         </a>
//       </MDBRipple>
//       <MDBCardBody>
//         <MDBCardTitle>Card title</MDBCardTitle>
//         <MDBCardText>
//           Some quick example text to build on the card title and make up the bulk of the card's content.
//         </MDBCardText>
//         <MDBBtn href='#'>Details</MDBBtn>
//       </MDBCardBody>
//     </MDBCard>
//     <MDBCard className='card'>
//       {/* <span class="border"></span> */}
//       <MDBRipple rippleColor='dark' rippleTag='div' className='bg-image hover-overlay'>
//         <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
//         <a>
//           <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
//         </a>
//       </MDBRipple>
//       <MDBCardBody>
//         <MDBCardTitle>Card title</MDBCardTitle>
//         <MDBCardText>
//           Some quick example text to build on the card title and make up the bulk of the card's content.
//         </MDBCardText>
//         <MDBBtn href='#'>Details</MDBBtn>
//       </MDBCardBody>
//     </MDBCard>
//     <MDBCard className='card'>
//       {/* <span class="border"></span> */}
//       <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
//         <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
//         <a>
//           <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
//         </a>
//       </MDBRipple>
//       <MDBCardBody>
//         <MDBCardTitle>Card title</MDBCardTitle>
//         <MDBCardText>
//           Some quick example text to build on the card title and make up the bulk of the card's content.
//         </MDBCardText>
//         <MDBBtn href='#'>Details</MDBBtn>
//       </MDBCardBody>
//     </MDBCard>
//     <MDBCard className='card'>
//       {/* <span class="border"></span> */}
//       <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
//         <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
//         <a>
//           <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
//         </a>
//       </MDBRipple>
//       <MDBCardBody>
//         <MDBCardTitle>Card</MDBCardTitle>
//         <MDBCardText>
//           Some quick example text to build on the card title and make up the bulk of the card's content.
//         </MDBCardText>
//         <MDBBtn href='#'>Details</MDBBtn>
//       </MDBCardBody>
//     </MDBCard>

//     </div>
//     </div>
//   )
// }
// export default Home;
