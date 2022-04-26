// Importing Libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Importing CSS Files
import './App.css';

// Importing JS Files
import Welcome from "./components/welcome/welcome.js"
import Home from "./components/pages/home"

// Returning Function
function App() {
  return (
    <div className="App">
      
      {/* Router */}
      {/* Direct to Welcome (/), Home (/home) */}
      <Router className="app">

        <Routes>
          <Route path="/" element={ <Welcome/> }></Route>
          <Route path="/home/*" element={ <Home/> }></Route>
        </Routes>
 
      </Router>

    </div>
  );
}

export default App;


// To do list
// 1. Homepage: box links, animating on hover
// 2. My life page: intro
// 3. My life page: timeline
// 4. My life page: languages
// 5. My life page: courses