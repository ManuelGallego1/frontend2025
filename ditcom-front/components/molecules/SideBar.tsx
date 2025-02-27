"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (arg: boolean) => void;
}

export default function SideBar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
    const trigger = useRef<any>(null);
    const sidebar = useRef<any>(null);

    const storedSidebarExpanded = typeof window !== 'undefined' ? localStorage.getItem('sidebar-expanded') : null;
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
    );

    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setSidebarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    }, [sidebarOpen, setSidebarOpen]);

    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    }, [sidebarOpen, setSidebarOpen]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
            if (sidebarExpanded) {
                document.querySelector('body')?.classList.add('sidebar-expanded');
            } else {
                document.querySelector('body')?.classList.remove('sidebar-expanded');
            }
        }
    }, [sidebarExpanded]);

    return (
        <aside
            ref={sidebar}
            className={`absolute left-0 top-0 z-9999 flex h-screen w-60 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-60'
                }`}
        >
            <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
                <Link href="/">
                    <Image src="/img/png/logo.png" width={200} height={200} alt="Logo" />
                </Link>
            </div>

            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
                    <div className='super'>
                        <ul className="mb-6 flex flex-col gap-1.5">
                            <li>
                                <Link href="/admin" className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4">
                                    <i className="fa-solid fa-chart-line"></i> Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4">
                                    <i className="fa-solid fa-phone"></i>Fijo
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4">
                                    <i className="fa-solid fa-mobile-screen"></i>Móvil
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4">
                                    <i className="fa-solid fa-signal"></i>Celulares
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin/usuarios" className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4">
                                    <i className="fa-solid fa-users"></i>Usuarios
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='Asesores'>
                        <ul>
                            <li>
                                <Link href="/asesor" className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4">
                                    <i className="fa-solid fa-users"></i>Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href="/asesor/ver-movil" className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4">
                                    <i className="fa-solid fa-mobile-screen"></i>Ver móvil
                                </Link>
                            </li>
                            <li>
                                <Link href="/asesor/ver-fijo" className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4">
                                    <i className="fa-solid fa-phone"></i>Ver fijo
                                    
        
                                </Link>
                            
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </aside>
    )
}
