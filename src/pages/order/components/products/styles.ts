import styled from "styled-components";
import {
  cardHoverActive,
  clampText,
  flexCenter,
  square,
  styledWrapper,
} from "@/common/styles/mixins";
import { borders, colors, device, fonts } from "@/common/styles/styleConstants";
import { HomeProductCardItemButton } from "@/pages/home/components/styles";

export const OrderProductsList = styled("ul")`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

export const OrderProductsItem = styled("li")`
  width: 100%;
`;

export const OrderProductsArticle = styled("article")`
  ${styledWrapper}
  width: 100%;
  padding: 10px;
  ${flexCenter}
  flex-direction: column;
  row-gap: 10px;
  position: relative;
`;

export const OrderProductsButton = styled(HomeProductCardItemButton)`
  ${cardHoverActive}
`;

export const OrderProductsImage = styled("img")`
  ${square(100)}
  object-fit: contain;
  object-position: center;
  border-radius: ${borders.smallBorderRadius};
`;

export const OrderProductsCount = styled("span")`
  position: absolute;
  top: 10%;
  right: 10%;
  z-index: 1;
  padding-inline: 5px;
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.semiBold};
  color: ${colors.blackAccent};
  background-color: ${colors.whiteAccent};
  border-radius: inherit;
`;

export const OrderProductsPrice = styled("span")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.semiBold};
  color: ${colors.orange};

  @media ${device.mobile} {
    display: none;
  }
`;
