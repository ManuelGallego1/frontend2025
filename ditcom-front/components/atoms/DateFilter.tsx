"use client";

import React, { useState } from 'react'

const data = [
    { MIN: "example1", Fecha: "01/01/2023" },
    { MIN: "example2", Fecha: "02/01/2023" },
    // Add more data as needed
];

export default function DateFilter() {
    const [dateFilter, setDateFilter] = useState("");
    const formattedDateFilter = dateFilter.split("-").reverse().join("/");


    const filteredData = data.filter(
        (user) =>
            user.MIN.toLowerCase().includes(search.toLowerCase()) &&
            (dateFilter === "" || user.Fecha === formattedDateFilter)
    );
    return (
        <div className="relative w-full mb-4">
            <i className="fa-solid fa-calendar absolute left-3 top-1/3 transform -translate-y-2 text-gray-500"></i>
            <input
                type="date"
                placeholder="Filtrar por fecha..."
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 pl-10 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
        </div>
    )
}
