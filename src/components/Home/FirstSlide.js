import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
const FirstSlide = () => {
  return (
    <>
      <SlideContainer>
        <CircleContainer>
          <img src="/Circles.png" alt="circle" />
        </CircleContainer>
        <SmilyImage>
          <Image
            src="/smilywomen.png"
            alt="smily-women"
            width={586}
            height={387}
          />
        </SmilyImage>
        <TextBox>
          <p>
            Write Your <br />
            Article
            <br /> here
          </p>
          <ButtonContainer>Create Account</ButtonContainer>
        </TextBox>
      </SlideContainer>
    </>
  );
};

export default FirstSlide;
const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
`;

const SmilyImage = styled.div``;
const TextBox = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: right;
  flex-direction: column;

  & p {
    margin: 0px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 90px;
    line-height: 109px;
    letter-spacing: -0.015em;
    color: #1c1c1c;
    display: flex;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
const ButtonContainer = styled.button`
  box-shadow: none;
  margin: 30px 0px 120px 0px;
  padding: 20px 40px;
  background: #3652e1;
  pointer: cursor;
  border-radius: 90px;
  color: white;
  align-items: center;
  font-size: 16px;
`;
const CircleContainer = styled.div`
  position: absolute;
  top: -20px;
`;
