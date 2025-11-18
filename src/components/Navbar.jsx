import { useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import { SearchOutlined, HeartOutlined, MenuOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import "../static/css/navbar.css"; 

const { Header } = Layout;

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (e) => {
    navigate(`/${e.key}`);
    setDrawerVisible(false); 
  };

  const menuItems = [
    {
      key: "favorites",
      icon: <HeartOutlined />,
      label: "Favorites",
    },
    {
      key: "search",
      icon: <SearchOutlined />,
      label: "Search",
    },
  ];

  const currentKey = location.pathname.substring(1) || 'home'; 

  return (
    <Header className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          🎬 <span className="brand-name">FilMora</span>
        </a>
        <div className="tagline">Scroll Less, Watch More</div>
      </div>

      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[currentKey]}
        onClick={handleMenuClick}
        items={menuItems}
        style={{ flex: 1, minWidth: 0, justifyContent: 'flex-end' }}
        className="desktop-menu"
      />

      <Button
        type="primary"
        icon={<MenuOutlined className="hamburger-icon-style"/>}
        onClick={() => setDrawerVisible(true)}
        className="mobile-menu-button"
      />

      <Drawer
        title="Move to:"
        placement="right"
        onClick={() => setDrawerVisible(false)}
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        className="mobile-drawer"
      >
        <Menu
          mode="vertical"
          selectedKeys={[currentKey]}
          onClick={handleMenuClick}
          items={menuItems}
        />
      </Drawer>
    </Header>
  );
};

export default Navbar;
