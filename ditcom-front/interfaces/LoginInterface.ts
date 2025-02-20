export interface LoginDTO {
    password: string;
    username: string;
}

export interface LoginDAO {
    data: {
        token: string;
        user: {
            id: number;
            username: string;
            role: string;
            active: boolean;
        }
        status: number;
        message: string;
    }
}