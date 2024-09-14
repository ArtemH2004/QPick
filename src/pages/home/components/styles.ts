import {
  absCenter,
  cardHoverActive,
  clampText,
  flexCenter,
  resetButton,
  styledWrapper,
} from "@/common/styles/mixins";
import {
  colors,
  device,
  fonts,
  transitions,
} from "@/common/styles/styleConstants";
import styled from "styled-components";

export const HomeContentSection = styled("section")`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media ${device.mobileL} {
    row-gap: 10px;
  }
`;

export const HomeContentTitle = styled("h2")`
  ${clampText(fonts.sizes.subtitleMobile, fonts.sizes.subtitle)}
  font-weight: ${fonts.weights.semiBold};
  color: ${colors.grayText};
`;

export const HomeProductCardList = styled("ul")`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const HomeProductCardItem = styled("li")`
  margin-inline: auto;
  width: 100%;
  max-width: 350px;
  height: 407px;

  @media ${device.tablet} {
    max-width: 100%;
    width: 100%;
  }

  @media ${device.mobile} {
    height: 375px;
  }
`;

export const HomeProductCardArticle = styled("article")`
  ${styledWrapper}
  padding: 15px 20px 25px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 30px;
  transition: ${transitions.fastTransition};
  position: relative;

  ${cardHoverActive}

  @media ${device.mobileL} {
    padding: 10px 15px 20px;
    row-gap: 20px;
  }
`;

export const HomeProductCardItemButton = styled("button")`
  ${resetButton}
  ${absCenter}
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;

export const HomeProductCardFavoritesWrapper = styled("div")`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 2;
  ${flexCenter}
`;

export const HomeProductCardImage = styled("img")`
  margin-inline: auto;
  width: 219px;
  height: 237px;
  object-fit: contain;
  object-position: center;
`;

export const HomeProductCardContentWrapper = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  @media ${device.mobile} {
    row-gap: 5px;
  }
`;

export const HomeProductCardHeader = styled("header")`
  height: 45px;
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const HomeProductCardTitle = styled("h3")`
  white-space: nowrap;
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.semiBold};
  color: ${colors.blue};
`;

export const HomeProductCardPriceWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeProductCardPrice = styled("span")`
  white-space: nowrap;
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.semiBold};
  color: ${colors.orange};
`;

export const HomeProductCardOldPrice = styled("span")`
  white-space: nowrap;
  ${clampText(fonts.sizes.extraSmallMobile, fonts.sizes.extraSmall)}
  font-weight: ${fonts.weights.semiBold};
  color: ${colors.orangeAccent};
  text-decoration: line-through;
`;

export const HomeProductCardFooter = styled("footer")`
  min-height: 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
