import { Typography, Row, Col } from "antd";
import ProjectCard from "../components/ProjectCard";
import { projects } from "./Project.constants";


const { Title } = Typography;

const Projects = () => {
  return (
      <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: "2rem" }}>
          My Projects
        </Title>

        <Row gutter={[24, 24]}>
          {projects.map((project, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </div>
  );
};

export default Projects;
