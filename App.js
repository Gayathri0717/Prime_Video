import './App.css';
import Navbar from './components/Navbar';
import Store from "./components/Store";



import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (  
    <BrowserRouter>
      <div className="app">
    
        <Routes>
          <Route path="/Store"element={ <><Store/></> }></Route>
          {/* <Route path="/login" element={<Login/>}></Route> */}
          <Route path="/" element={<><Navbar/></>} > 
          
          </Route>
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
