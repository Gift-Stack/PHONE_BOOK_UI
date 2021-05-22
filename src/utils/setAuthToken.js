import axios from 'axios';

const setAuthToken = ({ token }) => {
    // axios.interceptors.request.use(
    //     config => {
    //         config.headers.Authorization = `Bearer ${token}`;
    //         return config;
    //     },
    //     err => {
    //         console.error(err);
    //     },
    // );
    // if (token) {
    //     axios.defaults.headers.Authorization = `Bearer ${token}`;
    // } else {
    //     delete axios.defaults.headers.Authorization;
    // }
};

export default setAuthToken;
