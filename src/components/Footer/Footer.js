import React from "react";
import styled from "@emotion/styled";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <FooterContainer>
        <CopyRight>&copy;{year} RiseBlog. All rights reserved</CopyRight>
      </FooterContainer>
    </>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: 123px;
  background: #3652e1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CopyRight = styled.div`
  color: white;
`;
