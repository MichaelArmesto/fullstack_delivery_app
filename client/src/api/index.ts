import axios from "axios";

export const baseUrl = 'http://127.0.0.1:5001/fullstack-delivery-app/us-central1/app';

export const validateUserJwt = async (token: string) => {
    try {
        console.log('Sending token to API:', token); 
        const res = await axios.get(`${baseUrl}/api/users/jwtVerification`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log('API response:', res.data); 
        return res.data;
    } catch (error) {
        console.error('API error:', error); 
        return null;
    }
}
