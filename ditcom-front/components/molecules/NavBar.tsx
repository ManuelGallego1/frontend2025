import React, { useState, useEffect } from 'react';
import SideBarButton from '../atoms/SideBarButton';
import SideBar from './SideBar';
import Cookies from 'js-cookie';
import { logoutUser } from '@/libs/api-service';

export default function NavBar({ onSidebarToggle }: { onSidebarToggle: (isOpen: boolean) => void }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        onSidebarToggle(sidebarOpen);
    }, [sidebarOpen, onSidebarToggle]);

    useEffect(() => {
        const userCookie = Cookies.get('user');
        if (userCookie) {
            const user = JSON.parse(userCookie);
            setUserName(user.name);
        } else {
            setUserName('Iniciar sesión');
        }
    }, []);

    const handleLogout = async () => {
        await logoutUser();
    };

    return (
        <div>
            <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <nav className="flex h-15 justify-between items-center p-4 bg-black duration-500 ease-linear dark:bg-boxdark">
                <div className="flex items-center">
                    <SideBarButton sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                </div>
                <div className="flex items-center text-white">
                    <span className="mr-4"><i className="fa-solid fa-circle-user"></i> {userName}</span>
                    <span className="mr-4"><i className="fa-solid fa-sliders"></i> Ajustes</span>
                    <span className="mr-4 cursor-pointer" onClick={handleLogout}><i className="fa-solid fa-right-from-bracket"></i> Salir</span>
                </div>
            </nav>
        </div>
    );
}