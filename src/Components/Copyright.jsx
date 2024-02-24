import React from 'react'

const Copyright = () => {
  return (
    <div className='w-full h-auto flex items-center text-center justify-center p-4 bg-slate-50 rounded-t-3xl'>
        <p className=''>All Rights Reserved {String.fromCharCode(169)} 2024 <br /> Designed by <b>Kailash Kumar</b> with <span className='text-red-700 text-xl'>{String.fromCharCode(9829)}</span></p>
    </div>
  )
}

export default Copyright