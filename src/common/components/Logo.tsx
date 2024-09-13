import styled from "styled-components";
import { Link } from "react-router-dom";
import { VisuallyHidden } from "@/common/styles/GlobalStyles";
import { scrollToTop } from "../helpers/scrollToTop";

const logo = "public/images/icons/logo.svg";

const LogoLink = styled(Link)``;

export const Logo = () => {
  return (
    <LogoLink to="/home" onClick={scrollToTop}>
      <VisuallyHidden>
        <h1>QPick Logo</h1>
      </VisuallyHidden>
      <img src={logo} alt="QPick Logo" width={85} height={30} />
    </LogoLink>
  );
};
