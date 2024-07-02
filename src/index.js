import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ScrollToTop from './Hooks/ScrollTop'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* /testing/agency09/ */}
     <Router basename={''}>
     <ScrollToTop />
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);