import { Spinner } from '@nextui-org/react'
import React from 'react'

const Loader = () => {
  return (
    <>
     <div className="flex gap-4 m-auto mb-5">
      <Spinner className='m-auto' size='lg' color="success"/>
    </div> 
    </>
  )
}

export default Loader