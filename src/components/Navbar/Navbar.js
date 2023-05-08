import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <NavbarContainer>
        <Logo>
          <Rise>RISE</Rise> <Blog>BLOG</Blog>
        </Logo>
        <NavLinks>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/allblogs">Articles</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>

          <li>
            <Link href="/">Search </Link>
          </li>
        </NavLinks>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  width: 100%;
  height: 66px;
  padding: 0px 100px;
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
  }
`;
