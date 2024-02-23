import React from 'react'
import BasicTooltip from './BasicTooltip'

const ContainerA = () => {
    return (
        <div className='w-[35%] h-[100%] flex flex-col'>
           <BasicTooltip w={'100%'} h={'60%'} bgColor={'bg-teal-600'} />
           <BasicTooltip w={'100%'} h={'40%'} bgColor={'bg-yellow-500'} />
        </div>
    )
}

export default ContainerA