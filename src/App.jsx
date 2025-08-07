import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TemplateSelection from './pages/TemplateSelection';
import FormPage from './pages/FormPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TemplateSelection />} />
                <Route path="/form/:templateId" element={<FormPage />} />
            </Routes>
        </Router>
    );
}

export default App;
