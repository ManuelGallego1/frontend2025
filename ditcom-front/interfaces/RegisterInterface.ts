import { UserDAO, UserRole } from './UserInterface';

export interface RegisterDTO {
    username: string;
    password: string;
    name: string;
    role: UserRole;
}

export interface RegisterDAO {
    data?: {
        user: UserDAO;
    }
    status?: number;
    message?: string;
    errors?: RegisterError;
}

export interface RegisterError {

    username?: string[];
    password?: string[];
    name?: string[];
    role?: string[];
}