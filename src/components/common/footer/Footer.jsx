import { config } from "@/helpers/config"
import { Container, Row, Col } from "react-bootstrap"
import { Logo } from "../header/Logo"
import { MainMenu } from "../header/MainMenu"
import { SocialMenu } from "./SocialMenu"
import { ContactMenu } from "./ContactMenu"
import "./footer.scss"


export const Footer = () => {
  return (
    <footer>
        <Container>
            <Row>
                <Col xs={12}>
                <Logo theme="light"></Logo>
                <p className="mt-3">
                    {config.project.description}
                </p>
                </Col>
               
                <Col xs={6} xl={4}>
                <h3>Links</h3>
                <MainMenu></MainMenu>
                </Col>

                 <Col xs={6} xl={4}>
                <h3>Social</h3>
                <SocialMenu/>
                </Col>
 <Col xs={6} xl={4}>
                <h3>Contact</h3>
                <ContactMenu/>
                </Col>


            </Row>
        </Container>
    </footer>
  )
}
