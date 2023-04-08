import axios from 'axios';

// const urlBase = "http://127.0.0.1:8000/api/";
// const urlBase = "http://54.205.57.183:8000/api/"; // EC2
const urlBase = "https://leonardoacr.pythonanywhere.com/api/"; // 

export const getDashboardData = async () => {
    const response = await axios.get(`${urlBase}dashboard-data/`);
    return response.data;
};

export const getResultsData = async () => {
    const response = await axios.get(`${urlBase}results/`);
    return response.data;
};

export const getProbabilityData = async () => {
    const response = await axios.get(`${urlBase}probability-data/`);
    return response.data;
};
