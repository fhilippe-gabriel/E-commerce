import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Home from './Components/Home/Home'
import Colections from './Components/Colections/Colections'
import Get from './Components/Getting/Get'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/get" element={<Get />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/colections" element={<Colections />} />
      </Routes>
    </Router>
  );
}
export default App;