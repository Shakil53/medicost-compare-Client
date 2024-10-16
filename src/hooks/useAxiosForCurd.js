import axios from "axios";

const axiosForCrud = axios.create({
    baseURL: 'http://localhost:5000/'

})


const useAxiosForCurd = () => {
    return axiosForCrud;
};

export default useAxiosForCurd;