import axios from 'axios';

const baseUrl = 'api/auth';

const signIn = async (newUser) => {
    const request = axios.post(`${baseUrl}/signup`, newUser);
    const response = await request;
    return response.data;
};

export default { signIn };
