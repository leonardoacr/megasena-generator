export const getApiData = async (url: string) => {
    const response = await fetch(`http://127.0.0.1:8000/api/${url}/`);
    const data = await response.json();
    return data;
};

