import './App.css';
import Navbar from './_components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './_components/_pages/Home';


function App() {
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <Routes>
        <Route path="/" element={<Home/>} exact />
        </Routes>
      </Router>
    </>

  );
}

export default App;
