"use client"

import React from 'react'
import { useState } from 'react'

export default function SearchInput() {
    const [search, setSearch] = useState("");
    return (
        <div className="relative w-full mb-4">
            <i className="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-2 text-primary"></i>
            <input
                type="text"
                placeholder="Buscar OT..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 pl-10 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
        </div>
    )
}
