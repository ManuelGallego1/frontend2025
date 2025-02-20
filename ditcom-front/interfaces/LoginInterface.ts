export interface LoginDTO {
    password: string;
    username: string;
}

export interface LoginDAO {
    token: string;
    user: {
        id: number;
        username: string;
        email: string;
        role: string;
    }
}