import styled from "styled-components";
import {
  absBottom,
  buttonHoverActive,
  clampText,
  flexCenter,
  opacityHoverActive,
} from "@/common/styles/mixins";
import { getLanguage } from "@/common/helpers/getLanguage";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
import { Link } from "react-router-dom";

const LinkTo = styled(Link)<{ $isActive: boolean }>`
  ${flexCenter}
  ${absBottom}
  z-index: 1;

  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.semiBold};
  width: 100%;
  height: 65px;
  border-radius: ${borders.mediumBorderRadius};
  color: ${colors.whiteTotal};

  ${buttonHoverActive}
  ${opacityHoverActive}

  background-color: ${(props) =>
    props.$isActive ? colors.grayText : colors.blackAccent};
  pointer-events: ${(props) => props.$isActive && "none"};
`;

interface OrderButtonProps {
  isActive: boolean;
  link?: string;
  click?: () => void;
}

export const OrderButton = ({ isActive, link, click }: OrderButtonProps) => {
  const lang = getLanguage();

  return (
    <LinkTo to={link || '/'} $isActive={isActive} onClick={click}>
      {!!click ? lang.buyButton : lang.checkoutButton}
    </LinkTo>
  );
};
