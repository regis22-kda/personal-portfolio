import { Typography, Button } from "antd";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { useCallback } from "react";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 70 },
            color: { value: "#1677ff" },
            links: { enable: true, color: "#1677ff", distance: 150 },
            move: { enable: true, speed: 2 },
            size: { value: 3 },
            opacity: { value: 0.6 },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100 } },
          },
        }}
      />
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
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Title style={{ fontSize: "3rem", color: "white" }}>
            Hello, I’m <span style={{ color: "#1677ff" }}>Rheganandar Bagas</span>
          </Title>
          <Paragraph style={{ fontSize: "18px", color: "#f0f0f0", maxWidth: "600px", margin: "0 auto" }}>
            A developer who creates modern, interactive web applications with React, TypeScript, and Ant Design.
          </Paragraph>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button type="primary" size="large" href="/projects" style={{ marginTop: "20px" }}>
              Explore My Work
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
