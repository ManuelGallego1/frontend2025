'use client'

import Graph01 from '@/components/molecules/graphics/Graph01'
import Graph02 from '@/components/molecules/graphics/Graph02'
import Stats01 from '@/components/molecules/statistics/Stats01'
import Stats02 from '@/components/molecules/statistics/Stats02'
import Stats03 from '@/components/molecules/statistics/Stats03'
import Stats04 from '@/components/molecules/statistics/Stats04'
import React from 'react'

export default function page() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6 xl:grid-cols-4 4xl:gap-7.5">
      <div className='col-span-1 flex space-x-4'>
        <Stats01 />
        <Stats02 />
      </div>
      <div className='col-span-1 flex justify-between space-x-4'>
        <Stats03 />
        <Stats04 />
      </div>
      <div className="col-span-2 flex space-x-4">
        <Graph01 />
        <Graph02 />
      </div>
    </div>
  );
}
