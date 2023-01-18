import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn ,FaGoogle} from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { SiHashnode,SiLeetcode } from "react-icons/si";
function Home2({ contact }) {
  return (
    <Container fluid className="home-about-section" id="about" ref={contact}>
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/bheemup"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:bheem501425@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaGoogle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/bheem501425/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiLeetcode/>
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bheem-ratan-a3961922b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
