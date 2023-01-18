import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/weather.jpg"
import bitsOfCode from "../../Assets/Projects/youtube.jpg";
import chatify from "../../Assets/Projects/Tata1mg.png";
import sugar from "../../Assets/Projects/sugar.png";
import gearbest from "../../Assets/Projects/netflix.jpg";

function Projects({project}) {
  return (
    <Container fluid className="project-section" ref={project} >
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Redmi_clone"
              description="Redmi_clone is a redmi mobile company website that provide the all
              information about it`s product. "
              stack={[
                "Javascript",
               "CSS",
               "HTML",
              ]}
              ghLink="https://github.com/prashant1307/redmi_clone"
              demoLink="https://elegant-crisp-f2194d.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Youtube Clone,"
              stack={["Javascript", "ReactJs", "Redux", "CSS","HTML"]}
              description="This is youtube website`s clone where anybody can watch video like youtube"
              ghLink="https://github.com/bheemup/youtube_clone"
              demoLink="https://capable-stardust-de6d51.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Weather App"
              stack={["Javascript","HTML","Express","Node.js","CSS"]}
              description="It is weather app where you can watch real-time temprature of your city."
              ghLink="https://github.com/bheemup/weatherApp"
              demoLink="https://weather-bheem.up.railway.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sugar}
              isBlog={false}
              title="Sugar Cosmetic"
              stack={["Javascript", "HTML", "CSS", "Bootsrap"]}
              description="Sugar cosmetic is selling online beauty products, This
              is the site where you can see various cosmetic products."
              ghLink="https://github.com/ravinishadcoder/SUGAR-Cosmetic-Clone"
              demoLink="https://zingy-druid-0af270.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gearbest}
              isBlog={false}
              title="Netflix Clone"
              stack={["Javascript", "HTML", "CSS", "React","Axios"]}
              description="It is netflix website`s clone, here you can see a good UI and play movies trailer."
              ghLink="https://github.com/bheemup/netflix_clone"
              demoLink="https://netflix-clone-bheem.netlify.app/"
            />
          </Col>

          {/*  */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
