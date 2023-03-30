const urlBase = "http://127.0.0.1:8000/api/";

export const getDashboardData = async () => {
    const response = await fetch(`${urlBase}dashboard-data/`);
    const data = await response.json();
    return data;
};

export const getResultsData = async () => {
    const response = await fetch(`${urlBase}results/`);
    const data = await response.json();
    return data;
};


