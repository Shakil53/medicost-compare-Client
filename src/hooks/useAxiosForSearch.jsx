import axios from 'axios';

const useAxiosForSearch = axios.create({
    baseURL: 'http://localhost:5000', 
});

export default useAxiosForSearch;
