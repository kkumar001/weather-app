import React from 'react'
import BasicTooltip from './BasicTooltip'

const ContainerC = () => {
    return (
        <div className='w-[60%] h-[100%]'>
            <div className=' w-full h-[35%] flex'>
                <BasicTooltip w={'60%'} h={'100%'} bgColor={'bg-gray-500'} />
                <BasicTooltip w={'40%'} h={'100%'} bgColor={'bg-green-400'} />
            </div>
            <div className='w-full h-[65%] flex'>
                <div className='w-[30%] h-full'>
                    <BasicTooltip w={'100%'} h={'70%'} bgColor={'bg-pink-700'} />
                    <BasicTooltip w={'100%'} h={'30%'} bgColor={'bg-green-400'} />
                </div>
                <div className='w-[70%] h-full flex flex-col'>
                    <div className='w-full h-[60%] flex'>
                        <BasicTooltip w={'30%'} h={'100%'} bgColor={'bg-violet-400'}/>
                        <BasicTooltip w={'70%'} h={'100%'} bgColor={'bg-gray-300'}/>
                    </div>
                    <div className='w-full h-[40%] flex'>
                        <BasicTooltip w={'35%'} h={'100%'} bgColor={'bg-orange-400'}/>
                        <BasicTooltip w={'30%'} h={'100%'} bgColor={'bg-purple-100'}/>
                        <BasicTooltip w={'35%'} h={'100%'} bgColor={'bg-teal-400'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContainerC