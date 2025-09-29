import { Typography, Button, Avatar } from "antd";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { useCallback } from "react";

import { particlesConfig } from "../configs/particlesConfig";
import { avatarAnimation, buttonAnimation, textAnimation } from "../configs/homeAnimations";
const { Title, Paragraph } = Typography;

const Home = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
      <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        {/* Background Particles */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
          style={{ position: "absolute", top: 0, left: 0 }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
            padding: "0 20px",
          }}
        >
          {/* Avatar */}
          <motion.div {...avatarAnimation}>
            <Avatar
              size={120}
              src="https://via.placeholder.com/150"
              style={{ marginBottom: "1.5rem", border: "3px solid #1677ff" }}
            />
          </motion.div>

          {/* Intro Text */}
          <motion.div {...textAnimation}>
            <Title style={{ fontSize: "3rem", color: "white", marginBottom: "0.5rem" }}>
              Hi, I’m <span style={{ color: "#1677ff" }}>Rheganandar Bagas</span>
            </Title>
            <Paragraph style={{ fontSize: "20px", color: "#f0f0f0", marginBottom: "2rem" }}>
              I build modern, interactive web applications using{" "}
              <b>React</b>, <b>TypeScript</b>, and <b>Ant Design</b>.
            </Paragraph>
          </motion.div>

          {/* Call To Actions */}
          <motion.div {...buttonAnimation} style={{ display: "flex", gap: "20px" }}>
            <Button type="primary" size="large" href="/projects">
              View My Projects
            </Button>
            <Button size="large" href="/cv">
              View My CV
            </Button>
          </motion.div>
        </div>
      </div>
  );
};

export default Home;
