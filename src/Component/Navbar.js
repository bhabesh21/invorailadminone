import SearchBar from "material-ui-search-bar";
import { useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Menu, MenuItem, IconButton } from '@mui/material';


export default function Header() {


  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchValue);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>

      <Navbar expand="lg" className="px-4 mt-2 ">
        <Container >
          {/* <Navbar.Brand href="#">Bran</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="me-auto">
              <div className="d-flex">
                <SearchBar
                  value={searchValue}
                  onChange={(newValue) => setSearchValue(newValue)}
                  onRequestSearch={handleSearch}
                  style={{ border: " 1px solid #009AF0", width: "400px" }}
                />
              </div>
            </Nav>
            <Nav className="d-flex align-items-center gap-3">
              <EmailIcon className="nav-icon" aria-label="Email" />
              <CircleNotificationsIcon className="nav-icon" aria-label="Notifications" />
              <SettingsIcon className="nav-icon" aria-label="Settings" />
              <NavDropdown title="Mr. Biju Sing" id="userDropdown">
                <NavDropdown.Item href="#action1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action2">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">Logout</NavDropdown.Item>
              </NavDropdown>
              <div>
                <IconButton
                  edge="end"
                  aria-controls="account-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  color="inherit"
                >
                  <AccountCircleIcon />
                </IconButton>
                <Menu
                  id="account-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <hr   className="w-100 px-4"/> */}






    </>
  )
}