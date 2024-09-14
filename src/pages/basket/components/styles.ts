import { cardHoverActive, clampText, flexCenter, styledWrapper } from "@/common/styles/mixins";
import {
  colors,
  device,
  fonts,
  transitions,
} from "@/common/styles/styleConstants";
import {
  HomeContentSection,
  HomeContentTitle,
  HomeProductCardImage,
  HomeProductCardItemButton,
  HomeProductCardPrice,
  HomeProductCardTitle,
} from "@/pages/home/components/styles";
import styled from "styled-components";

export const BasketInnerWrapper = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 13px;
`;

export const BasketContentWrapper = styled("div")`
  width: 100%;
  min-height: 75vh;
  display: flex;
  align-items: start;
  justify-content: space-between;
  column-gap: 50px;

  @media ${device.mobile} {
    flex-direction: column-reverse;
    justify-content: start;
    align-items: center;
    row-gap: 35px;
  }

  @media ${device.mobileL} {
    row-gap: 25px;
  }
`;

export const BasketContentSection = styled(HomeContentSection)`
  width: auto;
`;

export const BasketContentTitle = styled(HomeContentTitle)`
  color: ${colors.blue};
`;

export const BasketProductCardList = styled("ul")`
  width: 633px;
  display: flex;
  flex-direction: column-reverse;
  row-gap: 30px;

  @media ${device.tablet} {
    width: 450px;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const BasketProductCardItem = styled("li")`
  width: 100%;
  height: 218px;
`;

export const BasketProductCardArticle = styled("article")`
  ${styledWrapper}
  padding: 18px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: ${transitions.fastTransition};
  position: relative;
  
  ${cardHoverActive}

  @media ${device.mobileM} {
    padding: 10px;
  }
`;

export const BasketProductCardItemButton = styled(HomeProductCardItemButton)``;

export const BasketProductCardContentWrapper = styled("div")`
  ${flexCenter}
  column-gap: 23px;
`;

export const BasketProductCardInnerWrapper = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 19px;
`;

export const BasketProductCardImage = styled(HomeProductCardImage)`
  width: 146px;
  height: 136px;
`;

export const BasketProductCardMiddleWrapper = styled("div")`
  display: flex;
  align-items: start;
  flex-direction: column;
  row-gap: 12px;
`;

export const BasketProductCardTitle = styled(HomeProductCardTitle)`
  font-weight: ${fonts.weights.medium};
`;

export const BasketProductCardPrice = styled(HomeProductCardPrice)<{
  $color?: string;
}>`
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  color: ${(props) =>
    props.$color === "gray" ? colors.grayActive : colors.blue};

  @media ${device.mobileM} {
    display: ${(props) => props.$color !== "gray" && "none"};
  }
`;

export const BasketProductCardEndWrapper = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;

export const BasketTotalSection = styled("section")`
  ${styledWrapper}
  display: flex;
  align-items: start;
  width: 350px;
  height: 120px;
  padding: 20px;

  position: relative;

  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const BasketTotalHeader = styled("header")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 50px;
`;

export const BasketTotalTitle = styled("h2")`
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  font-weight: ${fonts.weights.semiBold};
  text-transform: uppercase;
  color: ${colors.blackTotal};
`;

export const BasketTotalValue = styled("span")`
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  font-weight: ${fonts.weights.semiBold};
  color: ${colors.blackTotal};
`;
