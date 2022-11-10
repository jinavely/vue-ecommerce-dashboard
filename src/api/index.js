import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

const getInfoDashboard = async () => {
    return instance.get('/dashboard-info');
};

export { getInfoDashboard };
