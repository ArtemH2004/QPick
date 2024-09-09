import styled from "styled-components";
import QPickLogo from "../../../public/images/logo.svg";
import { Link } from "react-router-dom";
import { VisuallyHidden } from "../styles/GlobalStyles";

const LogoLink = styled(Link)``;

export const Logo = () => {
  return (
    <LogoLink to="/">
      <VisuallyHidden>
        <h1>QPick Logo</h1>
      </VisuallyHidden>
      <img src={QPickLogo} alt="QPick Logo" width={85} height={30} />
    </LogoLink>
  );
};
