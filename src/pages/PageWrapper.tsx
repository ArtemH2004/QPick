import styled from "styled-components";
import { Container } from "@/common/styles/GlobalStyles";
import { Header } from "@/common/components/header/Header";
import { Footer } from "@/common/components/footer/Footer";
import { Outlet } from "react-router-dom";

const Wrapper = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 28px;
`;

export const PageWrapper = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Outlet />
        <Footer />
      </Wrapper>
    </Container>
  );
};
