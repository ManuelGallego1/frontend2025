import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa FontAwesome

export default function StatsAsesor2() {
    return (
        <div className="w-full min-h-[150px] rounded-lg border border-stroke bg-white py-6 px-7.5 shadow-default flex items-center dark:border-strokedark dark:bg-boxdark">
            
            {/* Contenedor del icono */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mr-4">
                <i className="fa-solid fa-chart-simple text-5xl"></i>
            </div>

            {/* Contenedor de texto */}
            <div className="flex-grow text-left">
                <h4 className="text-title-md font-bold text-black dark:text-white">
                    Total de ventas al mes
                </h4>
                <span className="text-5xl font-bold text-black dark:text-white">
                    70
                </span>
            </div>
        </div>
    );
}
