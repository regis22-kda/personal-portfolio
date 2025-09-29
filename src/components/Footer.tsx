import { Layout } from "antd";

const { Footer } = Layout;

const FooterBar = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      © {new Date().getFullYear()} My Portfolio | Built with React, TypeScript & Ant Design
    </Footer>
  );
};

export default FooterBar;
