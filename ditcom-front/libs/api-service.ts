import { LoginDTO } from "@/interfaces/LoginInterface";
import Cookies from 'js-cookie';

export const loginUser = async (body: LoginDTO) => {
    const headersOptions = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Authorization": "Bearer tokentosendinservice",
            "Content-Type": "application/json"
        }
    };

    try {
        const response = await fetch('http://localhost:8000/api/login', headersOptions);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

export const registerUser = async (body: any) => {
    const token = Cookies.get('token');
    console.log('Token:', token);
    const headersOptions = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    };

    console.log('Request Headers:', headersOptions);

    try {
        const response = await fetch('http://localhost:8000/api/usuarios', headersOptions);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

export const logoutUser = async () => {
    const token = Cookies.get('token');
    if (!token) {
        console.error('No token found');
        return;
    }

    try {
        const response = await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Logout:', data);

        Cookies.remove('user');
        Cookies.remove('token');
        window.location.href = '/login';
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};