"use client";

import React, { useState } from "react";
import VerInfoButton from "@/components/atoms/VerInfoButton";
import EditarButton from "../atoms/EditarButton";
import EliminarButton from "../atoms/EliminarButton";
import DownloadButton from "../atoms/DownloadButton";

export default function TableMovil() {
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const data = [
    {
      Fecha: "01/02/2025",
      MIN: "3245678965",
      IMEI: "864158072347116",
      ICCID: "57101702403812439",
      Tipo: "Reposición",
      Plan: (
        <VerInfoButton />
      ),
      CelularInfo: (
        <VerInfoButton />
      ),
      ClienteInfo: (
        <VerInfoButton />
      ),
      Factura: "FSTA-19264",
      IngresoCaja: "0",
      ValorTotal: "940900",
      SedeInfo: (
        <VerInfoButton />
      ),
      Financiera: "N/A",
      CoordinadorInfo: (
        <VerInfoButton />
      ),
      Estado: "Pendiente",
      Acciones: (
        <div className="flex space-x-3">
          <EditarButton />
          <EliminarButton />
        </div>
      ),
    },
    {
      Fecha: "25/01/2025",
      MIN: "3104400157",
      IMEI: "864158072347116",
      ICCID: "57101702403812439	",
      Tipo: "Reposición",
      Plan: (
        <VerInfoButton />
      ),
      CelularInfo: (
        <VerInfoButton />
      ),
      ClienteInfo: (
        <VerInfoButton />
      ),
      Factura: "FCHI 08085",
      IngresoCaja: "ICCH8354",
      ValorTotal: "797520",
      SedeInfo: (
        <VerInfoButton />
      ),
      Financiera: "N/A",
      CoordinadorInfo: (
        <VerInfoButton />
      ),
      Estado: "Pendiente",
      Acciones: (
        <div className="flex space-x-3">
          <EditarButton />
          <EliminarButton />
        </div>
      ),
    },
    {
      Fecha: "15/02/2025",
      MIN: "3226094508	",
      IMEI: "353283531156011",
      ICCID: "57101702312809854	",
      Tipo: "Reposición",
      Plan: (
        <VerInfoButton />
      ),
      CelularInfo: (
        <VerInfoButton />
      ),
      ClienteInfo: (
        <VerInfoButton />
      ),
      Factura: "FCAL-4503",
      IngresoCaja: "ICCA--6342",
      ValorTotal: "519900",
      SedeInfo: (
        <VerInfoButton />
      ),
      Financiera: "N/A",
      CoordinadorInfo: (
        <VerInfoButton />
      ),
      Estado: "Exitosa",
      Acciones: (
        <div className="flex space-x-3">
          <EditarButton />
          <EliminarButton />
        </div>
      ),
    },
    {
      Fecha: "16/02/2025",
      MIN: "3143993251",
      IMEI: "000000000000000",
      ICCID: "57101702407954711",
      Tipo: "WB",
      Plan: (
        <VerInfoButton />
      ),
      CelularInfo: (
        <VerInfoButton />
      ),
      ClienteInfo: (
        <VerInfoButton />
      ),
      Factura: "FSTA-19257",
      IngresoCaja: "ICSR-20564",
      ValorTotal: "14500",
      SedeInfo: (
        <VerInfoButton />
      ),
      Financiera: "N/A",
      CoordinadorInfo: (
        <VerInfoButton />
      ),
      Estado: "Pendiente",
      Acciones: (
        <div className="flex space-x-3">
          <EditarButton />
          <EliminarButton />
        </div>
      ),
    },
    {
      Fecha: "18/02/2025",
      MIN: "3217209799",
      IMEI: "863649070340047",
      ICCID: "57101702312770947",
      Tipo: "kit prepago",
      Plan: (
        <VerInfoButton />
      ),
      CelularInfo: (
        <VerInfoButton />
      ),
      ClienteInfo: (
        <VerInfoButton />
      ),
      Factura: "FSTA-19262",
      IngresoCaja: "0",
      ValorTotal: "462000",
      SedeInfo: (
        <VerInfoButton />
      ),
      Financiera: "N/A",
      CoordinadorInfo: (
        <VerInfoButton />
      ),
      Estado: "Pendiente",
      Acciones: (
        <div className="flex space-x-3">
          <EditarButton />
          <EliminarButton />
        </div>
      ),
    },
    {
      Fecha: "19/02/2025",
      MIN: "3237971721",
      IMEI: "000000000000000",
      ICCID: "57101702403832912",
      Tipo: "portabilidad postpago",
      Plan: (
        <VerInfoButton />
      ),
      CelularInfo: (
        <VerInfoButton />
      ),
      ClienteInfo: (
        <VerInfoButton />
      ),
      Factura: "0",
      IngresoCaja: "0",
      ValorTotal: "38900",
      SedeInfo: (
        <VerInfoButton />
      ),
      Financiera: "N/A",
      CoordinadorInfo: (
        <VerInfoButton />
      ),
      Estado: "Exitosa",
      Acciones: (
        <div className="flex space-x-3">
          <EditarButton />
          <EliminarButton />
        </div>
      ),
    },
    {
      Fecha: "17/02/2025",
      MIN: "3104547602",
      IMEI: "000000000000000",
      ICCID: "57101702309976088",
      Tipo: "up grade	",
      Plan: (
        <VerInfoButton />
      ),
      CelularInfo: (
        <VerInfoButton />
      ),
      ClienteInfo: (
        <VerInfoButton />
      ),
      Factura: "0",
      IngresoCaja: "13395",
      ValorTotal: "44900",
      SedeInfo: (
        <VerInfoButton />
      ),
      Financiera: "N/A",
      CoordinadorInfo: (
        <VerInfoButton />
      ),
      Estado: "Pendiente",
      Acciones: (
        <div className="flex space-x-3">
          <EditarButton />
          <EliminarButton />
        </div>
      ),
    },
    {
      Fecha: "19/02/2025",
      MIN: "3128543743",
      IMEI: "865698070794354",
      ICCID: "57101702403812484",
      Tipo: "Reposición",
      Plan: (
        <VerInfoButton />
      ),
      CelularInfo: (
        <VerInfoButton />
      ),
      ClienteInfo: (
        <VerInfoButton />
      ),
      Factura: "FSTA-19265",
      IngresoCaja: "0",
      ValorTotal: "1015520",
      SedeInfo: (
        <VerInfoButton />
      ),
      Financiera: "N/A",
      CoordinadorInfo: (
        <VerInfoButton />
      ),
      Estado: "Exitosa",
      Acciones: (
        <div className="flex space-x-3">
          <EditarButton />
          <EliminarButton />
        </div>
      ),
    },
    {
      Fecha: "21/02/2025",
      MIN: "3104547602",
      IMEI: "000000000000000",
      ICCID: "57101702309976088",
      Tipo: "Up Grade",
      Plan: (
        <VerInfoButton />
      ),
      CelularInfo: (
        <VerInfoButton />
      ),
      ClienteInfo: (
        <VerInfoButton />
      ),
      Factura: "FSTA-19264",
      IngresoCaja: "0",
      ValorTotal: "940900",
      SedeInfo: (
        <VerInfoButton />
      ),
      Financiera: "N/A",
      CoordinadorInfo: (
        <VerInfoButton />
      ),
      Estado: "Exitosa",
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
      user.MIN.toLowerCase().includes(search.toLowerCase()) &&
      (dateFilter === "" || user.Fecha === formattedDateFilter)
  );

  return (
    <div className="rounded-lg border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xl font-bold text-black dark:text-white">
          Mis ventas
        </h4>
        <DownloadButton/>
      </div>

      <div className="relative w-full mb-4">
        <i className="fa-solid fa-search absolute left-3 top-1/3 transform -translate-y-2 text-gray-500"></i>
        <input
          type="text"
          placeholder="Buscar MIN..."
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
                <th className="p-2 border">Fecha</th>
                <th className="p-2 border">MIN</th>
                <th className="p-2 border">IMEI</th>
                <th className="p-2 border">ICCID</th>
                <th className="p-2 border">Tipo</th>
                <th className="p-2 border">Plan</th>
                <th className="p-2 border">Celular Info</th>
                <th className="p-2 border">Cliente Info</th>
                <th className="p-2 border">Factura</th>
                <th className="p-2 border">Ingreso Caja</th>
                <th className="p-2 border">Valor Total</th>
                <th className="p-2 border">Sede Info</th>
                <th className="p-2 border">Financiera</th>
                <th className="p-2 border">Coordinador Info</th>
                <th className="p-2 border">Estado</th>
                <th className="p-2 border">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((user, index) => (
                <tr
                  key={index}
                  className="border-b border-stroke text-center dark:border-strokedark"
                >
                  <td className="p-2 border">{user.Fecha}</td>
                  <td className="p-2 border">{user.MIN}</td>
                  <td className="p-2 border">{user.IMEI}</td>
                  <td className="p-2 border">{user.ICCID}</td>
                  <td className="p-2 border">{user.Tipo}</td>
                  <td className="p-2 border">{user.Plan}</td>
                  <td className="p-2 border">{user.CelularInfo}</td>
                  <td className="p-2 border">{user.ClienteInfo}</td>
                  <td className="p-2 border">{user.Factura}</td>
                  <td className="p-2 border">{user.IngresoCaja}</td>
                  <td className="p-2 border">{user.ValorTotal}</td>
                  <td className="p-2 border">{user.SedeInfo}</td>
                  <td className="p-2 border">{user.Financiera}</td>
                  <td className="p-2 border">{user.CoordinadorInfo}</td>
                  <td className="p-2 border">{user.Estado}</td>
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
