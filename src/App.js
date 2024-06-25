import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology';
import Mars from './components/Mars/Mars';
import Europa from './components/Europa/Europa';
import Titan  from './components/Titan/Titan';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/moon" element={<Destination />} />
          <Route path="/mars" element={<Mars />} />
          <Route path="/europa" element={<Europa />} />
          <Route path="/titan" element={<Titan />} />

        </Routes>
      </div>
    </Router> 
  );
};

export default App;
