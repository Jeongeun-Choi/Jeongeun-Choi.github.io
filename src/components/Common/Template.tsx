import styled from "@emotion/styled";
import React, { FunctionComponent, ReactNode } from "react";
import Footer from "./Footer";
import GlobalStyle from "./GlobalStyle";

type TemplateProps = {
  children: ReactNode;
};

const Template: FunctionComponent<TemplateProps> = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  );
};

export default Template;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
