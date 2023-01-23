import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import Homepage from './Homepage';
import MainPage from './MainPage';
import AboutUsPage from './AboutUsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route exact path="/MainPage" element={<MainPage />}/>
      </Routes>
      <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route exact path="/Aboutpage" element={<AboutUsPage />}/>
      </Routes>
      <Routes>
          <Route path="/" element={<AboutUsPage />}/>
          <Route exact path="/HomePage" element={<Homepage />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

