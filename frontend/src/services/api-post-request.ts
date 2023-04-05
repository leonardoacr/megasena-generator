import axios, { AxiosResponse } from 'axios';

export const sendDataToBackend = async (formData: FormData): Promise<void> => {
    try {
        const response: AxiosResponse = await axios.post(
            'http://127.0.0.1:8000/api/bandwidth-form/',
            formData
        );
        if (response.status !== 200) {
            throw new Error('Failed to send data to backend');
        }
    } catch (error) {
        console.error(error);
        throw new Error('Failed to send data to backend');
    }
};
