import React from 'react'; // Ensure React is imported if needed
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import TypeOfHouse from './pages/TypeOfHouse';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout> <Home /> </MainLayout>} />
        <Route path='/about' element={<MainLayout> <About /> </MainLayout>} />
        <Route path='/type-of-house' element={<MainLayout> <TypeOfHouse /> </MainLayout>} />
        <Route path='/contact' element={<MainLayout> <Contact /> </MainLayout>} />
      </Routes>
    </Router>
  );
};

export default App;
