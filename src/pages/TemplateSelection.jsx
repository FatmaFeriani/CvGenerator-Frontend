
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TemplateSelection.css';

const templates = [1, 2, 3, 4];

const TemplateSelection = () => {
    const navigate = useNavigate();

    return (
        <div className="template-container">
            <h2 className="template-title">Choose a Template</h2>
            <div className="template-grid">
                {templates.map((id) => (
                    <div key={id} className="template-card" onClick={() => navigate(`/form/${id}`)}>
                        <div className="template-preview">Template {id}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TemplateSelection;
