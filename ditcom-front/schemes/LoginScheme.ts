import { z } from "zod";

export const loginScheme = z.object({
  username: z.string()
    .min(4, { message: "Se requiere mínimo 4 caracteres" })
    .regex(/^[a-zA-Z0-9]+$/, { message: "Solo se permiten letras y números" }),
  
  password: z.string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
    .regex(/[^A-Za-z0-9]/, { message: "Debe contener al menos un carácter especial" })
});
