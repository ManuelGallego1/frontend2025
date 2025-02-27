"use client";

import React, { useState } from "react";
import VerInfoButton from "@/components/atoms/VerInfoButton";
import EditarButton from "@/components/atoms/EditarButton";
import EliminarButton from "@/components/atoms/EliminarButton";
import DownloadButton from "../atoms/DownloadButton";

export default function TableFijo() {
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const data = [
    {
      FechaInstalacion: "15/02/2025",
      FechaLegalizacion: "15/02/2025",
      ServiciosAdicionales: "Tv Satelital",
      Estrato: "3",
      Cuenta: "16069741",
      OT: "428170760",
      TipoProducto: "Fibra",
      TotalServicios: 1,
      TotalAdicionales: 0,
      ClienteInfo: (
        <VerInfoButton />
      ),
      SedeInfo: (
        <VerInfoButton />
      ),
      Estado: "Digitado",
      Convergente: "No",
      Ciudad: "Armenia",
      Acciones: (
        <div className="flex space-x-3">
          <EditarButton />
          <EliminarButton />
        </div>
      ),
    },
    {
      FechaInstalacion: "17/02/2025",
      FechaLegalizacion: "17/02/2025",
      ServiciosAdicionales: "Triple Digital Intermedio Plus 200MB",
      Estrato: "4",
      Cuenta: "16072554",
      OT: "428179890",
      TipoProducto: "Residencial",
      TotalServicios: 3,
      TotalAdicionales: 0,
      ClienteInfo: (
        <VerInfoButton />
      ),
      SedeInfo: (
        <VerInfoButton />
      ),
      Estado: "Digitado",
      Convergente: "No",
      Ciudad: "Quimbaya",
      Acciones: (
        <div className="flex space-x-3">
          <EditarButton />
          <EliminarButton />
        </div>
      ),
    },
    {
      FechaInstalacion: "25/02/2025",
      FechaLegalizacion: "25/02/2025",
      ServiciosAdicionales: "Triple Digital Intermedio Plus 200MB",
      Estrato: "4",
      Cuenta: "16069871",
      OT: "428170890",
      TipoProducto: "Fibra",
      TotalServicios: 3,
      TotalAdicionales: 0,
      ClienteInfo: (
        <VerInfoButton />
      ),
      SedeInfo: (
        <VerInfoButton />
      ),
      Estado: "Digitado",
      Convergente: "Si",
      Ciudad: "Armenia",
      Acciones: (
        <div className="flex space-x-3">
          <EditarButton />
          <EliminarButton />
        </div>
      ),
    },
    {
      FechaInstalacion: "26/02/2025",
      FechaLegalizacion: "26/02/2025",
      ServiciosAdicionales: "Triple Digital Intermedio Plus 350MB",
      Estrato: "3",
      Cuenta: "16066781",
      OT: "428170876",
      TipoProducto: "Fibra",
      TotalServicios: 3,
      TotalAdicionales: 0,
      ClienteInfo: (
        <VerInfoButton />
      ),
      SedeInfo: (
        <VerInfoButton />
      ),
      Estado: "Digitado",
      Convergente: "No",
      Ciudad: "Bogota",
      Acciones: (
        <div className="flex space-x-3">
          <EditarButton />
          <EliminarButton />
        </div>
      ),
    },
    {
      FechaInstalacion: "26/02/2025",
      FechaLegalizacion: "26/02/2025",
      ServiciosAdicionales: "Triple Digital Intermedio Plus 350MB",
      Estrato: "3",
      Cuenta: "16066781",
      OT: "428170876",
      TipoProducto: "Fibra",
      TotalServicios: 3,
      TotalAdicionales: 0,
      ClienteInfo: (
        <VerInfoButton />
      ),
      SedeInfo: (
        <VerInfoButton />
      ),
      Estado: "Digitado",
      Convergente: "No",
      Ciudad: "Bogota",
      Acciones: (
        <div className="flex space-x-3">
          <EditarButton />
          <EliminarButton />
        </div>
      ),
    },
    {
      FechaInstalacion: "26/02/2025",
      FechaLegalizacion: "26/02/2025",
      ServiciosAdicionales: "Triple Digital Intermedio Plus 350MB",
      Estrato: "3",
      Cuenta: "16066781",
      OT: "428170876",
      TipoProducto: "Fibra",
      TotalServicios: 3,
      TotalAdicionales: 0,
      ClienteInfo: (
        <VerInfoButton />
      ),
      SedeInfo: (
        <VerInfoButton />
      ),
      Estado: "Digitado",
      Convergente: "No",
      Ciudad: "Bogota",
      Acciones: (
        <div className="flex space-x-3">
          <EditarButton />
          <EliminarButton />
        </div>
      ),
    },
    {
      FechaInstalacion: "26/02/2025",
      FechaLegalizacion: "26/02/2025",
      ServiciosAdicionales: "Triple Digital Intermedio Plus 350MB",
      Estrato: "3",
      Cuenta: "16066781",
      OT: "428170876",
      TipoProducto: "Fibra",
      TotalServicios: 3,
      TotalAdicionales: 0,
      ClienteInfo: (
        <VerInfoButton />
      ),
      SedeInfo: (
        <VerInfoButton />
      ),
      Estado: "Digitado",
      Convergente: "No",
      Ciudad: "Bogota",
      Acciones: (
        <div className="flex space-x-3">
          <EditarButton />
          <EliminarButton />
        </div>
      ),
    },
    {
      FechaInstalacion: "26/02/2025",
      FechaLegalizacion: "26/02/2025",
      ServiciosAdicionales: "Triple Digital Intermedio Plus 350MB",
      Estrato: "3",
      Cuenta: "16066781",
      OT: "428170876",
      TipoProducto: "Fibra",
      TotalServicios: 3,
      TotalAdicionales: 0,
      ClienteInfo: (
        <VerInfoButton />
      ),
      SedeInfo: (
        <VerInfoButton />
      ),
      Estado: "Digitado",
      Convergente: "No",
      Ciudad: "Bogota",
      Acciones: (
        <div className="flex space-x-3">
          <EditarButton />
          <EliminarButton />
        </div>
      ),
    },
    {
      FechaInstalacion: "26/02/2025",
      FechaLegalizacion: "26/02/2025",
      ServiciosAdicionales: "Triple Digital Intermedio Plus 350MB",
      Estrato: "3",
      Cuenta: "16066781",
      OT: "428170876",
      TipoProducto: "Fibra",
      TotalServicios: 3,
      TotalAdicionales: 0,
      ClienteInfo: (
        <VerInfoButton />
      ),
      SedeInfo: (
        <VerInfoButton />
      ),
      Estado: "Digitado",
      Convergente: "No",
      Ciudad: "Bogota",
      Acciones: (
        <div className="flex space-x-3">
          <EditarButton />
          <EliminarButton />
        </div>
      ),
    },
  ];


  const formattedDateFilter = dateFilter.split("-").reverse().join("/");


  const filteredData = data.filter(
    (user) =>
      user.OT.toLowerCase().includes(search.toLowerCase()) &&
      (dateFilter === "" || user.FechaInstalacion === formattedDateFilter)
  );

  return (
    <div className="rounded-lg border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xl font-bold text-black dark:text-white">
          Mis ventas
        </h4>
        <DownloadButton />
      </div>

      <div className="relative w-full mb-4">
        <i className="fa-solid fa-search absolute left-3 top-1/3 transform -translate-y-2 text-gray-500"></i>
        <input
          type="text"
          placeholder="Buscar OT..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-md border border-gray-300 p-2 pl-10 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        />
      </div>

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

      <div className="overflow-x-auto">
        <div className="max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="bg-gray-200 dark:bg-meta-4 text-center font-bold uppercase">
                <th className="p-2 border">Fecha de Instalación</th>
                <th className="p-2 border">Fecha de Legalización</th>
                <th className="p-2 border">Servicios Adicionales</th>
                <th className="p-2 border">Estrato</th>
                <th className="p-2 border">Cuenta</th>
                <th className="p-2 border">OT</th>
                <th className="p-2 border">Tipo de Producto</th>
                <th className="p-2 border">Total de Servicios</th>
                <th className="p-2 border">Total de Adicionales</th>
                <th className="p-2 border">Cliente Info</th>
                <th className="p-2 border">Sede Info</th>
                <th className="p-2 border">Estado</th>
                <th className="p-2 border">Convergente</th>
                <th className="p-2 border">Ciudad</th>
                <th className="p-2 border">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((user, index) => (
                <tr
                  key={index}
                  className="border-b border-stroke text-center dark:border-strokedark"
                >
                  <td className="p-2 border">{user.FechaInstalacion}</td>
                  <td className="p-2 border">{user.FechaLegalizacion}</td>
                  <td className="p-2 border">{user.ServiciosAdicionales}</td>
                  <td className="p-2 border">{user.Estrato}</td>
                  <td className="p-2 border">{user.Cuenta}</td>
                  <td className="p-2 border">{user.OT}</td>
                  <td className="p-2 border">{user.TipoProducto}</td>
                  <td className="p-2 border">{user.TotalServicios}</td>
                  <td className="p-2 border">{user.TotalAdicionales}</td>
                  <td className="p-2 border">{user.ClienteInfo}</td>
                  <td className="p-2 border">{user.SedeInfo}</td>
                  <td className="p-2 border">{user.Estado}</td>
                  <td className="p-2 border">{user.Convergente}</td>
                  <td className="p-2 border">{user.Ciudad}</td>
                  <td className="p-2 border">{user.Acciones}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
