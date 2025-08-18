import { PageHeader } from "@/components/common/page-header/PageHeader"
import { Spacer } from "@/components/common/spacer/Spacer"
import { Courses } from "@/components/courses/Courses"

export const metadata={
    title:"Courses",
    description: "Explore the variety of courses we offer to help you reach your goals. Learn from our experienced educators and take your learning to the next level. Let's get started!",
}

export default function CoursesPage() {
  return (
    <>
    <PageHeader title="Courses"/>
    <Spacer/>
    <Courses/>
    <Spacer/>
    </>
  )
}
