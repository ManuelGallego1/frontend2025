import Link from 'next/link'
import React from 'react'

export default function VerMovilButton() {
  return (
    <div className="flex flex-col items-center gap-6 mt-7">
        <Link href="/pyme/ver-movil">
      <button className="flex items-center gap-3 px-8 placeholder:py-4 bg-white text-primary text-3xl font-semibold rounded-lg">
        <i className="fa-solid fa-eye text-primary "></i>
        Móvil
      </button>
      </Link>
    </div>
  )
}

