import styled from "styled-components";
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

const Button = styled("button")<{$isActive: boolean}>`
  ${resetButton}
  ${flexCenter}
  ${absBottom}
  z-index: 1;

  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.semiBold};
  width: 100%;
  height: 65px;
  border-radius: ${borders.mediumBorderRadius};
  background-color: ${(props) => props.$isActive ? colors.grayText : colors.blackAccent};
  pointer-events: ${(props) => props.$isActive && 'none'};
  color: ${colors.whiteTotal};

  ${buttonHoverActive}
  ${opacityHoverActive}
`;

interface OrderButtonProps {
  isActive: boolean;
}

export const OrderButton = ({isActive}: OrderButtonProps) => {
  const lang = getLanguage();

  return <Button $isActive={isActive}>{lang.order}</Button>;
};
