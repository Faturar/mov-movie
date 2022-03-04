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
import Search from './pages/search'


function App() {
  return (
    <div className="App">
      

      <BrowserRouter> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      
    </div>
  );
}

export default App;
