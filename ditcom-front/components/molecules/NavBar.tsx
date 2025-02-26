import React, { useState, useEffect } from 'react'
import SideBarButton from '../atoms/SideBarButton'
import SideBar from './SideBar';

export default function NavBar({ onSidebarToggle }: { onSidebarToggle: (isOpen: boolean) => void }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        onSidebarToggle(sidebarOpen);
    }, [sidebarOpen, onSidebarToggle]);

    return (
        <div>
            <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <nav className="flex h-15 justify-between items-center p-4 bg-black duration-500 ease-linear dark:bg-boxdark">
                <div className="flex items-center">
                    <SideBarButton sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                </div>
                <div className="flex items-center">
                    <span className="mr-4"><i className="fa-solid fa-circle-user"></i> Nombre Usuario</span>
                    <span className="mr-4"><i className="fa-solid fa-sliders"></i> Ajustes</span>
                    <span className="mr-4"><i className="fa-solid fa-right-from-bracket"></i> Salir</span>
                </div>
            </nav>
        </div>
    )
}
