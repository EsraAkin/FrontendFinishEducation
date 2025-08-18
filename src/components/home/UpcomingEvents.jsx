import { Container } from "react-bootstrap"
import { SectionTitle } from "../common/section-title/SectionTitle"
import events from "@/helpers/data/events.json";
import { UpcomingEventsCarousel } from "./UpcomingEventsCarousel";


export const UpcomingEvents = () => {



    const upcomingEvents = events.filter(item => new Date(item.date) > new Date);

  return (
    <Container>
        <SectionTitle>
            Upcoming Events
        </SectionTitle>
        <UpcomingEventsCarousel upcomingEvents={upcomingEvents} />
    </Container>
  )
}
