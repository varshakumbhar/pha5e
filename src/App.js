//  import ReactDOM from "react-dom/client";
import {  Routes, Route } from "react-router";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './Components/Navbar1';
import Home from "./Components/Home";
import Teams from "./Components/Teams";


function App() {
  return (
    <div className="App">
      <Navbar1></Navbar1>
      
      <Routes>
      <Route index element={<Home/>} />
      <Route path="/team" element={<Teams/>}/>

      </Routes>
    
      </div>
  );
}

export default App;
