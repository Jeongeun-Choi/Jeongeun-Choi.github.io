import styled from "@emotion/styled";
import React, { FunctionComponent, useEffect, useRef } from "react";

const src = "https://utteranc.es/client.js";
const repo = "Jeongeun-Choi/jeongeun.github.io";

type UtterancAttributesType = {
  src: string;
  repo: string;
  "issue-term": string;
  label: string;
  theme: string;
  crossorigin: string;
  async: string;
};

const CommentWidget: FunctionComponent = () => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current === null) {
      return;
    }

    const utterances: HTMLScriptElement = document.createElement("script");

    const attributes: UtterancAttributesType = {
      src,
      repo,
      "issue-term": "pathname",
      label: "Comment",
      theme: "github-light",
      crossorigin: "anonymous",
      async: "true",
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    element.current?.appendChild(utterances);
  }, []);

  return <UtteranceWrapper ref={element} />;
};

export default CommentWidget;

const UtteranceWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;
