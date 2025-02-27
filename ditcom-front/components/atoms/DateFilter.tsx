export default function DateFilter() {
    return (
        <div className="relative w-full mb-4">
            <div className="flex items-center mb-4">
                <i className="fa-solid fa-calendar absolute left-3 top-1/3 transform -translate-y-2 text-gray-500"></i>
                <input
                    type="date"
                    placeholder="Fecha inicio"
                    className="w-full rounded-md border border-gray-300 p-2 pl-10 dark:border-gray-600 dark:bg-gray-800 dark:text-white mr-2"
                />
                <input
                    type="date"
                    placeholder="Fecha fin"
                    className="w-full rounded-md border border-gray-300 p-2 pl-10 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                />
            </div>
            <button className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600">
                Filtrar
            </button>
        </div>
    )
}
