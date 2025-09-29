import { Typography, Row, Col, Card, Timeline, Tag, Divider } from "antd";
import { UserOutlined, BookOutlined, ToolOutlined } from "@ant-design/icons";

import { education, experience, skills } from "../configs/cvData";

const { Title, Paragraph } = Typography;

const CV = () => {
  return (
      <div style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Title level={1}>Rheganandar Bagas</Title>
          <Paragraph type="secondary">
            Frontend Developer | React | TypeScript | Ant Design
          </Paragraph>
        </div>

        <Divider />

        {/* Education & Experience */}
        <Row gutter={[24, 24]}>
          {/* Education */}
          <Col xs={24} md={12}>
            <Title level={3}>
              <BookOutlined /> Education
            </Title>
            <Timeline
              items={education.map((edu) => ({
                children: (
                  <Card size="small" title={edu.title} variant="borderless">
                    <Paragraph>{edu.subtitle}</Paragraph>
                    <Paragraph type="secondary">{edu.period}</Paragraph>
                  </Card>
                ),
              }))}
            />
          </Col>

          {/* Experience */}
          <Col xs={24} md={12}>
            <Title level={3}>
              <UserOutlined /> Experience
            </Title>
            <Timeline
              items={experience.map((exp) => ({
                children: (
                  <Card size="small" title={exp.title} variant="borderless">
                    <Paragraph>{exp.subtitle}</Paragraph>
                    <Paragraph type="secondary">{exp.period}</Paragraph>
                    {exp.description && (
                        Array.isArray(exp.description) ? (
                          <ul style={{ paddingLeft: "20px" }}>
                            {exp.description.map((point, i) => (
                              <li key={i}>
                                <Paragraph>{point}</Paragraph>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <Paragraph>{exp.description}</Paragraph>
                        )
                      )}
                  </Card>
                ),
              }))}
            />
          </Col>
        </Row>

        <Divider />

        {/* Skills */}
        <div style={{ marginTop: "2rem" }}>
          <Title level={3}>
            <ToolOutlined /> Skills
          </Title>
          <Row gutter={[16, 16]}>
            {skills.map((category, idx) => (
              <Col xs={24} sm={12} key={idx}>
                <Card title={category.title} variant="outlined">
                  {category.skills.map((skill, i) => (
                    <Tag color={category.color} key={i}>
                      {skill}
                    </Tag>
                  ))}
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
  );
};

export default CV;
