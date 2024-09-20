import { Logo } from "@/common/components/Logo";
import { changeTitle } from "@/common/helpers/changeTitle";
import { getLanguage } from "@/common/helpers/getLanguage";
import {
  buttonHoverActive,
  clampText,
  flexCenter,
} from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled("div")`
  width: 100vw;
  height: 100vh;
  ${flexCenter}
  flex-direction: column;
  row-gap: 20px;
`;

const LogoWrapper = styled("div")`
  transform: scale(1.5);
`;

const Numbers = styled("span")`
  font-size: 150px;
  font-weight: ${fonts.weights.bold};
  color: ${colors.orange};
  letter-spacing: 5px;
  line-height: 1;
`;

const Message = styled("p")`
  ${clampText(fonts.sizes.titleMobile, fonts.sizes.title)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.grayText};
`;

const NavLink = styled(Link)`
  ${clampText(fonts.sizes.subtitleMobile, fonts.sizes.subtitle)}
  padding: 10px 30px;
  border: ${borders.defaultBorder};
  border-radius: ${borders.mediumBorderRadius};
  ${buttonHoverActive}
`;

export const ErrorPage = () => {
  const lang = getLanguage();

  useEffect(() => {
    changeTitle("error");
  }, []);

  return (
    <Section>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Numbers>404</Numbers>
      <Message>{lang.errorMessage}</Message>
      <NavLink to={"/home"}>{lang.homeLink}</NavLink>
    </Section>
  );
};
