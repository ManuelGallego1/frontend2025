"use client"

import React, { useState } from 'react';

export default function Pagination({ totalPages }: { totalPages: number }) {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };

    const getPageNumbers = () => {
        const startPage = currentPage;
        const endPage = Math.min(currentPage + 2, totalPages);
        const pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <div className='flex justify-center mt-5 w-full'>
            <nav aria-label="Page navigation example bg-dark dark:bg-boxdark">
                <ul className="inline-flex -space-x-px text-white h-10">
                    <li>
                        <button
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-darkbox border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-primary"
                        >
                            Previous
                        </button>
                    </li>
                    {getPageNumbers().map((page) => (
                        <li key={page}>
                            <button
                                onClick={() => handlePageClick(page)}
                                className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-primary ${currentPage === page ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:text-white' : 'text-gray-500 bg-darkbox dark:bg-gray-800 dark:text-gray-400'}`}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-darkbox border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-primary"
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
