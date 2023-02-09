import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';

// Swiper CSS
import 'swiper/css';
import "swiper/css/navigation";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import Detail from './pages/Detail'
import Search from './pages/Search'

function App() {
  const [keyword, setKeyword] = useState('')

  const keywordData = (key) => {
    setKeyword(key)
  }

  useEffect(() => {
    AOS.init();
  }, [])
  

  return (
    <div className="App">
      <BrowserRouter> 
        <Navbar keywordData={keywordData} />
        <Routes>
          <Route path="/" exact element={<Home keywordData={keywordData} />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search/" element={<Search keyw={keyword} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
