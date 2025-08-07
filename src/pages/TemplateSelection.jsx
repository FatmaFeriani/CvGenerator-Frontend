import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import template1 from '../assets/template1.png';
import template2 from '../assets/template2.png';
import template3 from '../assets/template3.png';
import template4 from '../assets/template4.png';
import './TemplateSelection.css';

const templates = [
    { id: 1, name: 'Template 1', image: template1 },
    { id: 2, name: 'Template 2', image: template2 },
    { id: 3, name: 'Template 3', image: template3 },
    { id: 4, name: 'Template 4', image: template4 }
];

const TemplateSelection = () => {
    const navigate = useNavigate();
    const [selectedId, setSelectedId] = useState(null);

    const handleSelect = (id) => {
        setSelectedId(id);
        setTimeout(() => {
            navigate(`/form/${id}`);
        }, 300);
    };

    return (
        <div className="template-container">
            <h1 className="template-title">Choose Your CV Template</h1>
            <div className="template-grid">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className={`template-card ${selectedId === template.id ? 'selected' : ''}`}
                        onClick={() => handleSelect(template.id)}
                    >
                        <img
                            src={template.image}
                            alt={template.name}
                            className="template-preview"
                        />
                        <h3>{template.name}</h3>
                        <button disabled={selectedId === template.id}>
                            {selectedId === template.id ? 'Selected' : 'Choose'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TemplateSelection;
