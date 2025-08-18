import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { Col, Container, Row } from "react-bootstrap";
import {Skeleton} from "primereact/skeleton";

export default function loading() {



  return (
    <>
      <PageHeader title="Courses" />
      <Spacer />
      <Container>
        <Row xs={1} md={2} lg={3} xxl={4} className="g-5">
          {Array.from({ length: 20 }, (v, i) => i).map((item) => (
            <Col key={item}>
            <Skeleton height="20rem" animation="wave" />
            </Col>
          ))}
        </Row>
      </Container>
      <Spacer />
    </>
  );
}
