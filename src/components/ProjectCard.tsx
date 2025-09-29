import { Card, Typography, Tag, Button } from "antd";
import { GithubOutlined, GlobalOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { Project } from "../pages/Project.constants";

const { Title, Paragraph } = Typography;

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div whileHover={{ scale: 1.05 }}>
    <Card
      hoverable
      cover={<img alt={project.title} src={project.image} />}
      style={{ borderRadius: "8px", overflow: "hidden" }}
    >
      <Title level={4}>{project.title}</Title>
      <Paragraph>{project.description}</Paragraph>

      <div style={{ marginBottom: "10px" }}>
        {project.tags.map((tag, i) => (
          <Tag color="blue" key={i}>
            {tag}
          </Tag>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          type="primary"
          icon={<GlobalOutlined />}
          href={project.demo}
          target="_blank"
        >
          Demo
        </Button>
        <Button
          icon={<GithubOutlined />}
          href={project.github}
          target="_blank"
        >
          Code
        </Button>
      </div>
    </Card>
  </motion.div>
);

export default ProjectCard;
