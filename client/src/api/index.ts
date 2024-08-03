import axios from "axios";

export const baseUrl = 'http://127.0.0.1:5001/fullstack-delivery-app/us-central1/app';

export const validateUserJwt = async (token: string) => {
    try {
        const res = await axios.get(`${baseUrl}/api/users/jwtVerification`, {
            headers: {Authorization : 'Bearer' + token}
        })
        return res.data.data;
    } catch (error) {
        return null;
    }
}