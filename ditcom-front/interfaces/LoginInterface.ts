export interface LoginDTO {
    password: string;
    username: string;
}

export interface LoginDAO {
    data: {
        token: string;
        user: UserDAO;
    }
    status: string;
    message: string;
}

export interface UserDAO {
    id: number;
    username: string;
    role: string;
    active: boolean;
}