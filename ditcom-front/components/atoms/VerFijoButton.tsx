import Link from 'next/link'
import React from 'react'

export default function VerFijoButton() {
  return (
    <div className="flex flex-col items-center gap-6 mt-7">
        <Link href="/pyme/ver-fijo">
      <button className="flex items-center gap-3 px-8 py-4 bg-white text-primary border-primary text-3xl font-semibold rounded-lg">
        <i className="fa-solid fa-eye mr-1 text-primary"></i>
        Fijo
      </button>
      </Link>
    </div>
  )
}
