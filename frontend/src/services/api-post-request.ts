import axios, { AxiosResponse } from 'axios';

// const urlBase = "http://127.0.0.1:8000/api/";
// const urlBase = "http://54.205.57.183:8000/api/"; // EC2
const urlBase = "https://leonardoacr.pythonanywhere.com/api/";

export const sendDataToBackend = async (
    formData: FormData,
    callback: () => void,
    errorCallback: (error: any) => void
): Promise<void> => {
    console.log("Sending data to backend...");

    try {
        const response: AxiosResponse = await axios.post(
            `${urlBase}bandwidth-form/`,
            formData,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }
        );
        if (response.status !== 200) {
            throw new Error('Failed to send data to backend');
        } else {
            console.log('Data sent to backend successfully');
        }
        callback();
    } catch (error) {
        console.error(error);
        errorCallback(error);
    }
};

