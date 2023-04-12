import axios, { AxiosResponse } from 'axios';

// const urlBase = "http://127.0.0.1:8000/api/";
// const urlBase = "http://54.205.57.183:8000/api/"; // EC2
const urlBase = "https://leonardoacr.pythonanywhere.com/api/";

export const sendDataToBackend = async (formData: FormData): Promise<string> => {
    try {
        const response: AxiosResponse = await axios.post(`${urlBase}bandwidth-form/`, formData, { maxRedirects: 0 });
        if (response.status !== 303) {
            throw new Error('Failed to send data to backend');
        }
        return response.headers.location;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to send data to backend');
    }
};
