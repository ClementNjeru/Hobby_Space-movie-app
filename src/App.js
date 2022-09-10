import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
function App (){

    return (
      <>
    
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/reviews" element={<  Reviews/>}></Route>
          <Route path="/login" element={< Login/>}></Route>
          <Route path="/reviews" element={<  Reviews/>}></Route>
          <Route path="/contact" element={<  Contact/>}></Route>
        </Routes>
    </div>
    </>
  );
}

export default App;
