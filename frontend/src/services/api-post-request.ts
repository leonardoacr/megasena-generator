import axios, { AxiosResponse } from 'axios';

// const urlBase = "http://127.0.0.1:8000/api/";
const urlBase = "http://54.205.57.183:8000/api/";

export const sendDataToBackend = async (formData: FormData): Promise<void> => {
    try {
        const response: AxiosResponse = await axios.post(
            `${urlBase}bandwidth-form/`,
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
