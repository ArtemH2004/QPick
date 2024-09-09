import React from "react";
import styled from "styled-components";
import { Container } from "@/common/styles/GlobalStyles";
import { Header } from "@/common/components/header/Header";
import { Footer } from "@/common/components/footer/Footer";

const Wrapper = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 28px;
`;

interface PageWrapperProps {
  content: React.ReactNode;
}

export const PageWrapper = ({ content }: PageWrapperProps) => {
  return (
    <Container>
      <Wrapper>
        <Header />
        {content}
        <Footer />
      </Wrapper>
    </Container>
  );
};
