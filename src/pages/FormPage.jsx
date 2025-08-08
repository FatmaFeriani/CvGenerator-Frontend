import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { generateCv } from '../service/cvService';
import './FormPage.css';

const FormPage = () => {
    const { templateId } = useParams();
    const navigate = useNavigate();
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const jsonData = Object.fromEntries(formData.entries());

        await generateCv(jsonData, templateId);
    };

    const Clear = () => {
        if (formRef.current) {
            formRef.current.reset();
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Fill Your CV Info (Template {templateId})</h2>
            <form className="cv-form" onSubmit={handleSubmit} ref={formRef}>
                <input type="text" name="name" placeholder="Full Name" required />
                <input type="text" name="professionalTitle" placeholder="Professional Title" />
                <input type="email" name="email" placeholder="Email" required />
                <input type="tel" name="phone" placeholder="Phone Number" />
                <input type="text" name="address" placeholder="Address" />
                <textarea name="profile" placeholder="Profile Summary" rows={4} />

                <input type="text" name="company1" placeholder="Company 1" />
                <input type="text" name="position1" placeholder="Position 1" />
                <input type="text" name="dates1" placeholder="Dates 1" />
                <textarea name="achievements1" placeholder="Achievements 1" rows={3} />

                <input type="text" name="company2" placeholder="Company 2" />
                <input type="text" name="position2" placeholder="Position 2" />
                <input type="text" name="dates2" placeholder="Dates 2" />
                <textarea name="achievements2" placeholder="Achievements 2" rows={3} />

                <input type="text" name="university1" placeholder="University 1" />
                <input type="text" name="degree1" placeholder="Degree 1" />
                <input type="text" name="year1" placeholder="Year 1" />
                <input type="text" name="diploma1" placeholder="Diploma 1" />

                <input type="text" name="university2" placeholder="University 2" />
                <input type="text" name="degree2" placeholder="Degree 2" />
                <input type="text" name="year2" placeholder="Year 2" />
                <input type="text" name="diploma2" placeholder="Diploma 2" />

                <textarea name="skills" placeholder="Skills (comma-separated)" rows={3} />

                <div className="form-buttons">
                    <button type="submit">Generate CV</button>
                    <button type="button"  className="clear-btn" onClick={Clear}>Clear Form</button>
                    <button type="button" className="back-btn" onClick={() => navigate('/templates')}>
                        Back to Templates
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormPage;
