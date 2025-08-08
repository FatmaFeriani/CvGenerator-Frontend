export const generateCv = async (formData, templateId) => {
    try {
        const response = await fetch(`http://localhost:7071/api/cv/generate?templateId=${templateId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('ERROR');
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);


        window.open(url, '_blank');
    } catch (error) {
        console.error('Error ', error);
        alert('ERROR');
    }
};
