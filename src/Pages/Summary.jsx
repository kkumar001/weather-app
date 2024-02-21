import React from 'react'
import Header from '../Components/Header'
import ContainerA from '../Components/ContainerA'
import ContainerB from '../Components/ContainerB'
import ContainerC from '../Components/ContainerC'

const Summary = () => {
    return (
        <div className='w-full h-screen bg-blue-100'>
            <Header />
            <div className='w-full h-[calc(100vh-64px)] flex items-center justify-center p-2'>
                <div className='w-full h-full flex bg-slate-50 rounded-xl border-4 border-blue-800'>
                    <ContainerA  />
                    <ContainerB  />
                    <ContainerC  />
                </div>
            </div>
        </div>
    )
}

export default Summary