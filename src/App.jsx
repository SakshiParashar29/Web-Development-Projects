import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home.jsx'
import Loans from './Pages/Loan.jsx';
import Market from './Pages/Market.jsx';
import Budget from './Pages/Budget.jsx';
import Footer from './Components/Footer.jsx';
import { ThemeProvider } from './Components/Darkmode.jsx';

function App() {
  const [themeMode, setTheme] = useState('light');

  const darktheme = () => {
    setTheme('dark');
  }
  const lightTheme = () => {
     setTheme('light');
  }
  return (
    <ThemeProvider value={{themeMode, darktheme, lightTheme}}>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home/>} />
        <Route path="/Loans" element={<Loans />} />
        <Route path="/Market" element={<Market />} />
        <Route path="/Budget" element={<Budget />} />
      </Routes>
      <Footer/>
    </Router>
    </ThemeProvider>
  );
}

export default App;
