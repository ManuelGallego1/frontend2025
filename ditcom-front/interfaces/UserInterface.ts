export interface UserDAO {
    id: number;
    username: string;
    role: UserRole;
    active: boolean;
}

export type UserRole = "super" | "admin" | "pyme" | "asesor" | "coordinador";