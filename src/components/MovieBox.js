import React, {useState} from "react";
import {Modal,show, Button} from 'react-bootstrap';
const API_IMG = "https://image.tmdb.org/t/p/w500/";

function MovieBox({title, poster_path, overview, vote_average, release_date}) {
  const [show, setShow]=useState(false);

  const handleShow=()=>setShow(true);
  const handleClose=()=>setShow(false);
  return (
    <div className="Card text-center bg- mb-3">
        <div className="Card-body">
            <img className="Card-img-top" src={API_IMG + poster_path}alt="movie"/>
            <div className="Card-body">
                <button type = "button" className="btn btn-dark" onClick = {handleShow}>More</button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header classButton>
                    <Modal.Title></Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="Card-img-top1">
                  <img className="Card-img-top1" src={API_IMG + poster_path}alt="movie"/>
                  <h3>{title}</h3>
                      <h4>IMDb: {vote_average}</h4>
                      <h5>Release Date: {release_date}</h5>
                      <br></br>
                      <h6>Overview</h6>
                      <p>{overview}</p>
                  </Modal.Body>
                  <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>Close</Button>
                  </Modal.Footer>


                </Modal>

      {/*  */}
     
      {/* <p>{overview}</p> */}
    </div>
    </div>
    </div>
  );
}

export default MovieBox;
