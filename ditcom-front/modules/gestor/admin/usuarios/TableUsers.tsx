import Pagination from '@/components/atoms/Pagination';
import React from 'react';
export default function TableUsers() {
  return (
    <div className="rounded-lg border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Lista Usuarios
      </h4>

      <div className="flex flex-col overflow-y-auto max-h-[60vh] h-[60vh]">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-bold uppercase xsm:text-base">
              Usuario
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-bold uppercase xsm:text-base">
              Rol
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-bold uppercase xsm:text-base">
              Acciones
            </h5>
          </div>
        </div>

        {[
          { usuario: 'John Doe', rol: 'Admin' },
          { usuario: 'Jane Smith', rol: 'User' },
          { usuario: 'Mike Johnson', rol: 'Editor' },
          { usuario: 'Jack Brown', rol: 'Admin' },
          { usuario: 'John Doe', rol: 'Admin' },
          { usuario: 'John Doe', rol: 'Admin' },
          { usuario: 'Jane Smith', rol: 'User' },
          { usuario: 'Mike Johnson', rol: 'Editor' },
          { usuario: 'Jack Brown', rol: 'Admin' },
          { usuario: 'John Doe', rol: 'Admin' },
          { usuario: 'John Doe', rol: 'Admin' },
          { usuario: 'Jane Smith', rol: 'User' },
          { usuario: 'Mike Johnson', rol: 'Editor' },
          { usuario: 'Jack Brown', rol: 'Admin' },
          { usuario: 'John Doe', rol: 'Admin' },
        ].map((user, index) => (
          <div
            key={index}
            className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4"
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{user.usuario}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{user.rol}</p>
            </div>
            <div className="flex items-center justify-center gap-3 p-2.5 xl:p-5">
              <button className="text-primary dark:text-primary"><i className="fa-solid fa-pen-to-square"></i> Editar</button>
              <button className="text-red-500 dark:text-red-500">Eliminar <i className="fa-solid fa-trash"></i></button>
            </div>
          </div>
        ))}
        <Pagination totalPages={20} />
      </div>


    </div>
  );
}
