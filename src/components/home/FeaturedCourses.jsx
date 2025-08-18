import React from 'react'
import { SectionTitle } from '../common/section-title/SectionTitle'
import { Courses } from '../courses/Courses'

export const FeaturedCourses = () => {
  return (
    <div className='featured-courses'>
        <SectionTitle>Featured Courses</SectionTitle>
        <Courses/>
        </div>
  )
}
