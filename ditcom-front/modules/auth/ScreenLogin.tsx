'use client'

import Image from 'next/image';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { loginScheme } from '@/schemes/LoginScheme';
import { LoginDTO, LoginDAO } from '@/interfaces/LoginInterface';
import { loginUser } from '@/libs/api-service';
import Form from './Form';

export default function ScreenLogin() {
  return (
    <section className="max-w-screen-sm mx-auto w-1/2">
      <div className="container mx-auto flex justify-center items-center h-screen">
        <div className="w-full max-w-md">
          <div className="bg-red-600 shadow-lg rounded-lg px-8 py-10">
            <div className="flex justify-center items-center pb-5">
              <Image src="/img/logo.png" alt="Logo" width={300} height={300} />
            </div>
            < Form />
          </div>
        </div>
      </div>
    </section>
  );
}
