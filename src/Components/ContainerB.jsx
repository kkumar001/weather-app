import React from 'react'
import BasicTooltip from './BasicTooltip'

const ContainerB = () => {
  return (
    <div className='w-[25%] h-[100%]'>
        <BasicTooltip w='100%' h='80%' bgColor={'bg-teal-200'} />
           <BasicTooltip w='100%' h='20%' bgColor={'bg-pink-500'} />
    </div>
  )
}

export default ContainerB