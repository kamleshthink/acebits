import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import firebase from "firebase/app";

import logo from "../../assets/images/logo.png";

import "./Header.css";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));
  const [show, setShow] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  // Handle scroll effect for navbar color change - black on hero section, white on other sections
  React.useEffect(() => {
    const handleScroll = () => {
      // Get hero section height (approximately 100vh)
      const heroHeight = window.innerHeight;
      const scrollThreshold = heroHeight * 0.8; // 80% of hero height for better transition
      
      console.log('Scroll Y:', window.scrollY, 'Threshold:', scrollThreshold, 'isScrolled:', isScrolled);
      
      if (window.scrollY > scrollThreshold) {
        console.log('Setting navbar to WHITE');
        setIsScrolled(true); // White navbar when scrolled down
      } else {
        console.log('Setting navbar to BLACK');
        setIsScrolled(false); // Black navbar on hero section
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  // Handle window resize for responsive design
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const handleLogout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <Navbar 
      collapseOnSelect 
      expand="lg" 
      className={isScrolled ? 'navbar-scrolled' : 'navbar-default'}
      style={{
        paddingTop: '15px !important',
        paddingBottom: '15px !important',
        backgroundColor: isScrolled ? 'rgba(255,255,255,0.95) !important' : 'rgba(0,0,0,0.85) !important',
        backdropFilter: isScrolled ? 'blur(20px) !important' : 'blur(15px) !important',
        boxShadow: isScrolled ? '0 4px 25px rgba(0,0,0,0.08) !important' : '0 4px 20px rgba(0,0,0,0.3) !important',
        borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05) !important' : '1px solid rgba(255,255,255,0.1) !important',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important',
        position: 'fixed !important',
        top: '0 !important',
        left: '0 !important',
        right: '0 !important',
        zIndex: '1000 !important'
      }}
    >
      <Container>
        <LinkContainer to="">
          <Navbar.Brand>
            <Image src={logo} style={{ width: "70px" }} className="img-fluid" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav w-100 justify-content-end">
          <Nav className="ml-auto">
            <LinkContainer to="/about">
              <Nav.Link style={{
                color: isScrolled ? '#1f2937' : 'rgba(255,255,255,0.95)',
                fontSize: '14px',
                padding: '12px 15px',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}>About</Nav.Link>
            </LinkContainer>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Features"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
              style={{
                color: isScrolled ? '#1f2937' : 'rgba(255,255,255,0.95)',
                fontSize: '14px',
                padding: '12px 15px',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
            >
              <NavDropdown.Item>
                <LinkContainer to="/department">
                  <Nav.Link>Department details</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <LinkContainer to="/team">
                  <Nav.Link>Team details</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
              {/* <NavDropdown.Item>
                <LinkContainer to="/gmb-geogrid">
                  <Nav.Link>GMB GEOGRID</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item> */}
              <NavDropdown.Item>
                <LinkContainer to="/blogs">
                  <Nav.Link>Blogs</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/constitution">
              <Nav.Link style={{
                color: isScrolled ? '#1f2937' : 'rgba(255,255,255,0.95)',
                fontSize: isMobile ? '11px' : '14px',
                padding: isMobile ? '6px 8px' : '12px 15px',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                minWidth: isMobile ? '80px' : 'auto',
                textAlign: 'center'
              }}>Constitution</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/magazine">
              <Nav.Link style={{
                color: isScrolled ? '#1f2937' : 'rgba(255,255,255,0.95)',
                fontSize: '14px',
                padding: '12px 15px',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}>Magazine</Nav.Link>
            </LinkContainer>
            {!user && (
              <LinkContainer to="/login">
                <Nav.Link style={{
                  color: isScrolled ? '#1f2937' : 'rgba(255,255,255,0.95)',
                  fontSize: '14px',
                  padding: '12px 15px',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}>Login</Nav.Link>
              </LinkContainer>
            )}
            {!user && (
              <LinkContainer to="/">
                <Nav.Link style={{
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  padding: '12px 25px',
                  color: '#fff',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}>Home</Nav.Link>
              </LinkContainer>
            )}

            {user && (
              <NavDropdown
                title={user.email && user.email.split("@")[0]}
                id="navbarScrollingDropdown"
                style={{
                  color: isScrolled ? '#1f2937' : 'rgba(255,255,255,0.95)',
                  fontSize: '14px',
                  padding: '12px 15px',
                  fontWeight: 600,
                  transition: 'all 0.3s ease'
                }}
              >
                {user.role === "subscriber" ? (
                  <NavDropdown.Item key="subscriber">
                    <Link to="/user/history">Dashboard</Link>
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item key="admin">
                    <Link to="/admin/dashboard">Admin Dashboard</Link>
                  </NavDropdown.Item>
                )}
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
