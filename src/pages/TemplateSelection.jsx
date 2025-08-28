import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import template1 from '../assets/template1.png';
import template2 from '../assets/template2.png';
import template3 from '../assets/template3.png';
import template4 from '../assets/template4.png';
import './TemplateSelection.css';

const templates = [
    { id: 1, title: 'Template 1', image: template1, recommended: true },
    { id: 2, title: 'Template 2', image: template2, recommended: false },
    { id: 3, title: 'Template 3', image: template3, recommended: true },
    { id: 4, title: 'Template 4', image: template4, recommended: false },
];

const TemplateSelection = () => {
    const navigate = useNavigate();
    const [selectedId, setSelectedId] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('default');
    const [showTip, setShowTip] = useState(false);

    const handleSelect = (id) => {
        setSelectedId(id);
        setTimeout(() => {
            navigate(`/form/${id}`);
        }, 200);
    };

    const openPreview = (image) => {
        setPreviewImage(image);
    };

    const closePreview = () => {
        setPreviewImage(null);
    };

    const filteredTemplates = templates
        .filter((template) =>
            template.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOrder === 'recommended') return b.recommended - a.recommended;
            return 0;
        });

    return (
        <div className="page">
            <nav className="navbar">
                <div className="nav-content">
                    <div className="nav-logo">
                        <img src="logo.png" alt="CVify Logo" className="logo" />
                    </div>
                    <div className="nav-links">
                        <button className="button nav-button" onClick={() => navigate('/')}>
                            Back to Home
                        </button>
                    </div>
                </div>
            </nav>

            <div className="container bg">
                <div className="content-box">
                    <div
                        className="tip-trigger"
                        onMouseEnter={() => setShowTip(true)}
                        onMouseLeave={() => setShowTip(false)}
                    >
                        <h1 className="title">Select Your Resume Template</h1>
                        <p className="subtitle">Choose a professional design to make your resume stand out.</p>
                    </div>

                    {showTip && (
                        <div className="tip">Hover to preview, click to select!</div>
                    )}

                    <div className="search">
                        <span className="search-icon">🔍</span>
                        <input
                            type="text"
                            placeholder="Search templates..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="filter-buttons">
                        <button
                            className={`filter-button ${sortOrder === 'default' ? 'active' : ''}`}
                            onClick={() => setSortOrder('default')}
                        >
                            All Templates
                        </button>
                        <button
                            className={`filter-button ${sortOrder === 'recommended' ? 'active' : ''}`}
                            onClick={() => setSortOrder('recommended')}
                        >
                            Recommended
                        </button>
                    </div>

                    <div className="grid">
                        {filteredTemplates.length > 0 ? (
                            filteredTemplates.map((template) => (
                                <div
                                    key={template.id}
                                    className={`card ${selectedId === template.id ? 'selected' : ''}`}
                                    onClick={() => handleSelect(template.id)}
                                    title={`Select ${template.title}`}
                                >
                                    {template.recommended && (
                                        <span className="badge">Recommended</span>
                                    )}
                                    <img
                                        src={template.image}
                                        alt={`${template.title} Preview`}
                                        className="preview"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            openPreview(template.image);
                                        }}
                                    />
                                    <h3>{template.title}</h3>
                                    <button disabled={selectedId === template.id}>
                                        {selectedId === template.id ? 'Selected' : 'Choose Template'}
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="no-results">No templates found.</p>
                        )}
                    </div>
                </div>

                {previewImage && (
                    <div className="modal">
                        <div className="modal-content">
                            <img src={previewImage} alt="Template Preview" />
                            <button onClick={closePreview}>Close</button>
                        </div>
                    </div>
                )}
            </div>

            <footer className="footer">
                <div className="footer-content">
                    <span className="footer-title">CVify</span>
                    <p className="footer-text">&copy; 2025 CVify. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default TemplateSelection;