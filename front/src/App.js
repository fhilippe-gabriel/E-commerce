import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Home from './Components/Home/Home'
function App(){
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </Router>
  );
}
export default App;