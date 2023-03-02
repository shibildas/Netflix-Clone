import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import {originals,action,drama,comedy} from './Components/urls'
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";


function App() {

  return (
    <div className="App">

    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals'/>
    <RowPost url={action} title='Action' isSmall/>
    <RowPost url={drama} title='Drama' isSmall/>
    <RowPost url={comedy} title='Comedy' isSmall/>

    </div>
  );
}

export default App;
