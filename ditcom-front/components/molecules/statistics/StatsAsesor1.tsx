import React from 'react';

export default function StatsAsesor2() {
    return (
        <div className="mb-2 w-[70vw] min-h-[150px] rounded-lg border border-stroke bg-white py-6 px-7.5 shadow-default flex items-center dark:border-strokedark dark:bg-boxdark">
            
            
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mr-4">
                <i className="fa-solid fa-chart-simple text-5xl text-primary"></i>
            </div>

        
            <div className="flex-grow text-left">
                <h4 className="text-title-md font-bold text-black dark:text-white">
                    Total de ventas al mes
                </h4>
                <span className="text-5xl font-semibold text-primary dark:text-white">
                    200
                </span>
            </div>
        </div>
    );
}
