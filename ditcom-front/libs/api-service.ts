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
        const response = await fetch('http://localhost:8000/api/v1/users', headersOptions)
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
