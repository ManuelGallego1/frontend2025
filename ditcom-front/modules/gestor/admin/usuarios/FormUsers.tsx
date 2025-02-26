'use client'

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerScheme } from '@/schemes/RegisterScheme';
import { RegisterDTO, RegisterDAO } from '@/interfaces/RegisterInterface';
import { registerUser } from '@/libs/api-service';

export default function FormUsers() {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterDTO>({
        resolver: zodResolver(registerScheme)
    });

    const onSubmit: SubmitHandler<RegisterDTO> = async data => {
        try {
            const response: RegisterDAO = await registerUser(data);

            if (response.status === 201) {
                console.log('User registered successfully');
            } else if (response.message) {
                console.error(response);
            }
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                Crear Usuarios
            </h4>
            <div className='h-[60vh] overflow-y-auto justify-between'>
                <div className="mb-5.5">
                    <label className="mb-3 block text-black dark:text-white">Usuario</label>
                    <input
                        {...register('username')}
                        className="w-full rounded-xl border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                </div>
                <div className="mb-5.5">
                    <label className="mb-3 block text-black dark:text-white">Contraseña</label>
                    <input
                        type="password"
                        {...register('password')}
                        className="w-full rounded-xl border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>
                <div className="mb-5.5">
                    <label className="mb-3 block text-black dark:text-white">Nombre</label>
                    <input
                        {...register('name')}
                        className="w-full rounded-xl border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <div className="mb-5.5">
                    <label className="mb-3 block text-black dark:text-white">Rol</label>
                    <select
                        {...register('role')}
                        className="w-full rounded-xl border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                        <option value="super">Super</option>
                        <option value="admin">Admin</option>
                        <option value="pyme">Pyme</option>
                        <option value="asesor">Asesor</option>
                    </select>
                    {errors.role && <p className="text-red-500">{errors.role.message}</p>}
                </div>
                <button type="submit" className="w-full rounded-xl bg-primary py-3 px-5 font-medium text-white transition hover:bg-primary-dark focus:outline-none">
                    Crear Usuario
                </button>
            </div>
        </form>
    );
}