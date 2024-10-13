

import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact.jsx";
import Services from "./components/Services.jsx";


import "./styles/footer.scss"
import "./styles/App.scss"
 import "./styles/home.scss"

import "./styles/header.scss"
import "./styles/mediaquery.scss";




function App() {
  return (

    // <>
    // <Header/>
    //  <Home/>
    // </>


    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
       

      </Routes>
      
     
    </Router>
  );
}

export default App;
