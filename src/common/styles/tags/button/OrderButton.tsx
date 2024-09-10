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

const Button = styled("button")`
  ${resetButton}
  ${flexCenter}
  ${absBottom}
  z-index: 1;

  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.semiBold};
  width: 100%;
  height: 65px;
  border-radius: ${borders.mediumBorderRadius};
  background-color: ${colors.blackAccent};
  color: ${colors.whiteTotal};

  ${buttonHoverActive}
  ${opacityHoverActive}
`;

export const OrderButton = () => {
  const lang = getLanguage();

  return <Button>{lang.order}</Button>;
};
