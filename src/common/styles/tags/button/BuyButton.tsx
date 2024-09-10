import { getLanguage } from "@/common/helpers/getLanguage";
import styled from "styled-components";
import { buttonHoverActive, clampText, opacityHoverActive, resetButton } from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";

const Button = styled("button")`
  ${resetButton};
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)};
  font-weight: ${fonts.weights.semiBold};
  color: ${colors.blackTotal};
  border-radius: ${borders.mediumBorderRadius};
  padding: 5px 10px;
  ${buttonHoverActive}
  ${opacityHoverActive}
`;

interface BuyButtonProps {
  id: number;
}

export const BuyButton = ({ id }: BuyButtonProps) => {
  const lang = getLanguage();

  return <Button>{lang.buyButton}</Button>;
};
