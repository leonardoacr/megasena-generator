export const getDashboardData = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/dashboard-data/`);
    const data = await response.json();
    return data;
};

export const getResultsData = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/results/`);
    const data = await response.json();
    return data;
};


