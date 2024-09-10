import styled from "styled-components";
import { Link } from "react-router-dom";
import { VisuallyHidden } from "@/common/styles/GlobalStyles";

const logo = "public/images/icons/logo.svg";

const LogoLink = styled(Link)``;

export const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <LogoLink to="/" onClick={scrollToTop}>
      <VisuallyHidden>
        <h1>QPick Logo</h1>
      </VisuallyHidden>
      <img src={logo} alt="QPick Logo" width={85} height={30} />
    </LogoLink>
  );
};
