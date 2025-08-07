
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './main.css';
import LandingPage from './pages/LandingPage';
import TemplateSelection from './pages/TemplateSelection';
import FormPage from './pages/FormPage';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/templates" element={<TemplateSelection />} />
                <Route path="/form/:templateId" element={<FormPage />} />
            </Routes>
        </Router>
    </React.StrictMode>
);

const style = document.createElement('style');
style.innerHTML = `
  body {
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(to right, #0b3d91, #fbeec1);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  h1, h2, h3 {
    font-weight: 700;
  }
  button {
    transition: transform 0.2s ease, background-color 0.3s ease;
  }
  button:hover {
    transform: scale(1.05);
  }
`;
document.head.appendChild(style);
