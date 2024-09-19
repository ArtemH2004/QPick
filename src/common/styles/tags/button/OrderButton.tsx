import styled, { css } from "styled-components";
import {
  absBottom,
  buttonHoverActive,
  clampText,
  flexCenter,
  opacityHoverActive,
  resetButton,
} from "@/common/styles/mixins";
import { getLanguage } from "@/common/helpers/getLanguage";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
import { Link } from "react-router-dom";

const styledButton = css`
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
`;

const Button = styled("button")<{ $isActive: boolean }>`
  ${styledButton}
  ${resetButton}

  background-color: ${(props) =>
    props.$isActive ? colors.grayText : colors.blackAccent};
  pointer-events: ${(props) => props.$isActive && "none"};
`;

const LinkTo = styled(Link)<{ $isActive: boolean }>`
  ${styledButton}
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
    <>
      {!!link ? (
        <LinkTo to={link} $isActive={isActive}>
          {lang.checkoutButton}
        </LinkTo>
      ) : (
        <Button $isActive={isActive} onClick={click}>
          {lang.buyButton}
        </Button>
      )}
    </>
  );
};
