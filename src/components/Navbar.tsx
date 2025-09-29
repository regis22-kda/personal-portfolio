import { Layout, Menu, Switch } from "antd";
import { Link, useLocation } from "react-router-dom";
import { BulbOutlined, MoonOutlined } from "@ant-design/icons";

const { Header } = Layout;

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode }) => {
  const location = useLocation();
  const selectedKey = location.pathname === "/" ? "/" : location.pathname;

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ color: "white", fontWeight: "bold", marginRight: "30px" }}>
        My Portfolio
      </div>

      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[selectedKey]}
        items={[
          { key: "/", label: <Link to="/">Home</Link> },
          { key: "/cv", label: <Link to="/cv">CV</Link> },
          { key: "/projects", label: <Link to="/projects">Projects</Link> },
        ]}
      />

      <Switch
        checked={isDarkMode}
        onChange={setIsDarkMode}
        checkedChildren={<MoonOutlined />}
        unCheckedChildren={<BulbOutlined />}
      />
    </Header>
  );
};

export default Navbar;
