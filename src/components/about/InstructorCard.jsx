"use client";
import Image from 'next/image'
import { Card } from 'react-bootstrap'
import "./instructor-card.scss"

export const InstructorCard = ({firstName, lastName, image, title}) => {

    const fullName = firstName + lastName;


  return (
    <Card className="instructor-card">
      <Image
        src={`/img/instructors/${image}`}
        width={400}
        height={500}
        className="card-img-top card-img-bottom"
        alt={fullName}
      />

      <Card.Title>
        <h4>{fullName}</h4>
        <h6>{title}</h6>
      </Card.Title>
    </Card>
  );
}
