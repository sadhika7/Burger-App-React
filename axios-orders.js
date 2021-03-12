import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-6ee2f-default-rtdb.firebaseio.com/'
})

export default instance;