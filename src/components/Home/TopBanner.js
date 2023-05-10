import React from "react";
import styled from "@emotion/styled";
import BannerSlider from "./Slider";
const TopBanner = () => {
  return (
    <>
      <BannerContainer>
        <BannerSlider />
      </BannerContainer>
    </>
  );
};

export default TopBanner;

const BannerContainer = styled.div`
  margin-top: 67px;
`;
