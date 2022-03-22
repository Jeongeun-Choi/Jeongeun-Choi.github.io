import styled from "@emotion/styled";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React, { FunctionComponent } from "react";
import ProfileImage from "./ProfileImage";

type IntroductionProps = {
  profileImage: IGatsbyImageData;
};

const Introduction: FunctionComponent<IntroductionProps> = ({
  profileImage,
}) => {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />

        <div>
          <SubTitle>안녕하세요</SubTitle>
          <Title>I'm Junior Frontend Developer Eun.</Title>
        </div>
      </Wrapper>
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  background-color: #f4f1de;
  color: #636363;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`;

const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Title = styled.div`
  margin-top: 5px;
  font-size: 30px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export default Introduction;
