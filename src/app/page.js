import { Welcome } from '@/components/about/Welcome'
import { Spacer } from '@/components/common/spacer/Spacer'
import { FeaturedCourses } from '@/components/home/FeaturedCourses'
import { MobileApp } from '@/components/home/MobileApp'
import { Slider } from '@/components/home/Slider'
import { UpcomingEvents } from '@/components/home/UpcomingEvents'
import React from 'react'

const HomePage = () => {
  return (
    <>
    <Slider/>
    <Spacer/>
    <Welcome/>
    <Spacer/>
    <FeaturedCourses/>
    <Spacer/>
     <UpcomingEvents />
    <Spacer />
    <MobileApp />
    
    </>
  )
}

export default HomePage