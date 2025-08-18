import { Welcome } from '@/components/about/Welcome'
import { Spacer } from '@/components/common/spacer/Spacer'
import { Slider } from '@/components/home/Slider'
import React from 'react'

const HomePage = () => {
  return (
    <>
    <Slider/>
    <Spacer/>
    <Welcome/>
    <Spacer/>
    
    </>
  )
}

export default HomePage