export const sendDataToBackend = async (formData: FormData) => {
    const response = await fetch('http://127.0.0.1:8000/api/bandwidth-form/', {
        method: 'POST',
        body: formData
    });

    if (!response.ok) {
        throw new Error('Failed to send data to backend');
    }
};
