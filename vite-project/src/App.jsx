import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home"; 

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home /> 
      <Footer />
    </div>
  );
};

export default App;
