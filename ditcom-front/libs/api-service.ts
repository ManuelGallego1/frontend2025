import { LoginDTO } from "@/interfaces/LoginInterface"

export const loginUser = async (body: LoginDTO) => {
    const headersOptions = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Authorization": "Bearer tokentosendinservice",
            "Content-Type": "application/json"
        }
    }

    try {
        const response = await fetch('http://localhost:8000/api/login', headersOptions)
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Fetch error:', error)
        throw error
    }
}

export const registerUser = async (body: any) => {
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    const headersOptions = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    }

    console.log('Request Headers:', headersOptions);

    try {
        const response = await fetch('http://localhost:8000/api/usuarios', headersOptions)
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Fetch error:', error)
        throw error
    }
}