import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <Header>
      <NavbarContainer>
        <Link href="/">
          <Logo>
            <Rise>RISE</Rise> <Blog>BLOG</Blog>
          </Logo>
        </Link>

        <NavLinks>
          <li>
            <Link href="/" passHref>
              <NavLink className={router.pathname == "/" ? "active" : ""}>
                {" "}
                Home
              </NavLink>
            </Link>
          </li>

          <li>
            <Link href="/allblogs" passHref>
              <NavLink
                className={router.pathname == "/allblogs" ? "active" : ""}
              >
                Articles
              </NavLink>
            </Link>
          </li>

          <li>
            <Link href="/about" passHref>
              <NavLink className={router.pathname == "/about" ? "active" : ""}>
                About
              </NavLink>
            </Link>
          </li>

          <li>
            <Link href="/contact" passHref>
              <NavLink
                className={router.pathname == "/contact" ? "active" : ""}
              >
                Contact
              </NavLink>
            </Link>
          </li>

          <li>
            <Link href="/" passHref>
              <NavLink>
                <SearchIcon fontSize="small" />
              </NavLink>
            </Link>
          </li>
        </NavLinks>
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
`;

const NavLink = styled.a`
  color: black;
`;

const Header = styled.div`
  padding: 0px 8%;
`;
