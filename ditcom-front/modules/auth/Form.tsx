'use client'

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { loginScheme } from '@/schemes/LoginScheme';
import { LoginDTO, LoginDAO } from '@/interfaces/LoginInterface';
import { loginUser } from '@/libs/api-service';
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

export default function Form() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<LoginDTO>({
        resolver: zodResolver(loginScheme)
    });

    const router = useRouter();

    const onSubmit: SubmitHandler<LoginDTO> = async data => {
        try {
            const response: LoginDAO = await loginUser(data);

            if (response.data.token) {
                // Set cookies
                Cookies.set('token', response.data.token, { expires: 7 });
                Cookies.set('user', JSON.stringify(response.data.user), { expires: 7 });

                console.log(response.data.user);
                console.log(response.message);

                if (response.data.user.active) {
                    switch (response.data.user.role) {
                        case 'admin':
                            router.push('/admin');
                            break;
                        case 'asesor':
                            console.log('Redirect to asesor dashboard');
                            break;
                        case 'pyme':
                            console.log('Redirect to pyme dashboard');
                            break;
                        case 'super':
                            router.push('/admin');
                            break;
                        case 'coordinador':
                            console.log('Redirect to coordinador dashboard');
                            break;
                        default:
                            console.log('Role not found');
                            break;
                    }
                } else {
                    console.log('User is not active');
                }
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label htmlFor="username" className="block text-white pb-5 text-center">Usuario</label>
                <input
                    id="username"
                    type="text"
                    {...register('username', { required: true })}
                    className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                />
                {errors.username && <p className="font-bold">{errors.username.message}</p>}
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-white pb-5 text-center">Contraseña</label>
                <input
                    id="password"
                    type="password"
                    {...register('password', { required: true })}
                    className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                />
                {errors.password && <p className="font-bold">{errors.password.message}</p>}
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full bg-white text-boxdark font-bold py-2 px-4 rounded-md hover:bg-boxdark focus:outline-none focus:ring-2 focus:ring-red-300 hover:text-white">
                    Iniciar Sesión
                </button>
            </div>
        </form>
    );
}