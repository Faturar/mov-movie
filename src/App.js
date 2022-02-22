import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Swiper CSS
import 'swiper/css';
import "swiper/css/navigation";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home'
import Detail from './pages/detail'


function App() {
  return (
    <div className="App">
      

      <BrowserRouter> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      
    </div>
  );
}

export default App;
