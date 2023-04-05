import axios from 'axios';

const urlBase = "http://127.0.0.1:8000/api/";

export const getDashboardData = async () => {
    const response = await axios.get(`${urlBase}dashboard-data/`);
    return response.data;
};

export const getResultsData = async () => {
    const response = await axios.get(`${urlBase}results/`);
    return response.data;
};
