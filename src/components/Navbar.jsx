import "../Navbar.css";
import { Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Navbar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          IMDb MOVIES 🍿
        </a>
      </div>

      <div className="navbar-center">
        <Space.Compact style={{ width: 400 }}>
          <Input
            placeholder="Search a movie"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onPressEnter={handleSearch}
            style={
              {
                borderRadius: "29px"
              }
            }
          />
          <Button type="primary" icon={<SearchOutlined />} onClick={handleSearch} className="custom-search-button" style={
              {
                borderRadius: "29px",
                backgroundColor: "black",
                marginLeft: "8px"                
              }
            }>
            Search🎬
          </Button>
        </Space.Compact>
      </div>
    </nav>
  );
};

export default Navbar;
