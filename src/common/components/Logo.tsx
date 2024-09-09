import styled from "styled-components";
import { Link } from "react-router-dom";
import { VisuallyHidden } from "@/common/styles/GlobalStyles";

const logo = 'public/images/logo.svg';

const LogoLink = styled(Link)``;

export const Logo = () => {
  return (
    <LogoLink to="/">
      <VisuallyHidden>
        <h1>QPick Logo</h1>
      </VisuallyHidden>
      <img src={logo} alt="QPick Logo" width={85} height={30} />
    </LogoLink>
  );
};
