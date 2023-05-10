import styled from "@emotion/styled";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Search } from "@mui/icons-material";
const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <Header>
      <NavbarContainer>
        <Link href="/">
          <Logo>
            <Rise>RISE</Rise> <Blog>BLOG</Blog>
          </Logo>
        </Link>

        <NavLinks open={menuOpen}>
          <li>
            <Link href="/" passHref>
              <NavLink
                className={router.pathname == "/" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </Link>
          </li>

          <li>
            <Link href="/allblogs" passHref>
              <NavLink
                className={router.pathname == "/allblogs" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Articles
              </NavLink>
            </Link>
          </li>

          <li>
            <Link href="/about" passHref>
              <NavLink
                className={router.pathname == "/about" ? "active" : ""}
                onClick={handleLinkClick}
              >
                About
              </NavLink>
            </Link>
          </li>

          <li>
            <Link href="/contact" passHref>
              <NavLink
                className={router.pathname == "/contact" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Contact
              </NavLink>
            </Link>
          </li>

          <li>
            <Link href="/" passHref>
              <NavLink onClick={handleLinkClick}>
                <Search fontSize="small" />
              </NavLink>
            </Link>
          </li>
        </NavLinks>

        <HamBurgerMenu onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </HamBurgerMenu>
      </NavbarContainer>
    </Header>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  z-index: 1;
`;
const Rise = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #1c1c1c;
`;
const Blog = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #7851e9;
`;

const NavLinks = styled.div`
  display: flex;

  & li {
    list-style: none;
    margin-left: 28px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
  }
  & a.active {
    color: #3652e1;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    display: ${({ open }) => (open ? "flex" : "none")};
    align-items: center;
    position: absolute;
    top:50px;
    left: 0;
    width: 100%;
    height:100%
    padding: 0 20px;
    background-color: #fff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    z-index: 1;

    & li {
      margin-top: 20px;
      margin-left: 0;
    }
  }
`;

const NavLink = styled.a`
  color: black;
`;

const Header = styled.div`
  padding: 0px 8%;
`;
const HamBurgerMenu = styled.div`
  display: none;
  @media (width<800px) {
    display: block;
    z-index: 5;
  }
`;
const MenuBar = styled.div`
  position: absolute;
  right: 8%;
  top: 3.4%;
`;
