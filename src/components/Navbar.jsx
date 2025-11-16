import { useState } from "react";
import "../static/css/Navbar.css";
import { Input, Button, Menu } from "antd";
import { SearchOutlined, HeartOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (e) => {
    if (e.key === "favorites") {
      navigate("/favorites");
    }
    setHamburgerOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          🎬 <span className="brand-name">FilMora</span>
        </a>
        <div className="tagline">Scroll Less, Watch More</div>
      </div>

      <div className="hamburger-icon" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
        {hamburgerOpen ? <CloseOutlined /> : <MenuOutlined />}
      </div>

      <div className={`navbar-right ${hamburgerOpen ? "open" : ""}`}>
        <div className="search-container">
          <Input
            placeholder="Search your next blockbuster"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onPressEnter={handleSearch}
            className="search-input"
            onClick={() => navigate("/search")}
          />
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={handleSearch}
            className="search-button"
          >
            Search
          </Button>
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname.substring(1)]}
          onClick={handleMenuClick}
          className="navbar-menu"
        >
          <Menu.Item key="favorites" icon={<HeartOutlined />}>
            Favorites
          </Menu.Item>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
