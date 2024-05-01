import { Box } from '@radix-ui/themes'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const LoadingNewIssuepage = () => {
  return (
    <Box className='max-w-xl'>
       <Skeleton/>
       <Skeleton  height="20 rem"/>
    </Box>
  )
}

export default LoadingNewIssuepage