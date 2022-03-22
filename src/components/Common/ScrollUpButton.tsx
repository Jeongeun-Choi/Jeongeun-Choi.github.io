import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const ScrollUpButton = () => {
  const handleScrollUp = useCallback(() => {
    if (window.scrollY) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <ButtonContainer onClick={handleScrollUp}>
      <Icon icon={faArrowUp} />
    </ButtonContainer>
  );
};

export default ScrollUpButton;

const ButtonContainer = styled.button`
  position: fixed;
  top: 85%;
  left: 90%;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid #3d405b;
  background-color: #3d405b;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    top: 90%;
  }
`;

const Icon = styled(({ ...props }: { icon: IconDefinition }) => (
  <FontAwesomeIcon {...props} />
))`
  font-size: 25px;
  color: #f2f2f2;
`;
