import styled from "styled-components";
import { fonts } from "@/common/styles/styleConstants";
import { clampText, linkHoverActive } from "@/common/styles/mixins";
import { Link } from "react-router-dom";

const LinkTo = styled("a")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  ${linkHoverActive}
`;

const NavLink = styled(Link)`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  ${linkHoverActive}
`;

interface FooterLinkProps {
  title: string;
  link?: string;
  navLink?: string;
}

export const FooterLink = ({ title, link, navLink }: FooterLinkProps) => {
  return (
    <li>
      {!!navLink ? (
        <NavLink to={navLink}>{title}</NavLink>
      ) : (
        <LinkTo href={link}>{title}</LinkTo>
      )}
    </li>
  );
};
