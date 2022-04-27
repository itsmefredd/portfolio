import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css';

import Welcome from "./components/welcome/welcome.js"
import Home from "./components/pages/home"

function App() {
  return (
    <div className="App">
      <Router className="app">
        <Routes>
          <Route path="/" element={ <Welcome/> }></Route>
          <Route path="/home/*" element={ <Home/> }></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;