import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/veryjohn.JPG";
import "../style/About.css";

function About() {
  return (
    // About section
    <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={avatar} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  About Very john
                </Card.Title>
                <Card.Text>
                I am a creative designer and developer, who aims to work with small businesses and marginalized communities to bring their passions to life. I offer both design and development services of web applications or websites!
                </Card.Text>
                <Card.Text>
                I came from Finance section after served with great served with great marketting skills from almost 6 wonderfull years, now I have decided to serve programming  <strong>(coding)</strong> sector with full dedication and modern ideas that will be more usefull for your business and user assesiblity aspects.
        
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export About
export default About;
