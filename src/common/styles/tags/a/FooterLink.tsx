import styled from "styled-components";
import { fonts } from "@/common/styles/styleConstants";
import { clampText, linkHoverActive } from "@/common/styles/mixins";

const LinkTo = styled("a")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  ${linkHoverActive}
`;

interface FooterLinkProps {
  title: string;
  link?: string;
}

export const FooterLink = ({ title, link }: FooterLinkProps) => {
  return (
    <li>
      <LinkTo href={link}>{title}</LinkTo>
    </li>
  );
};
