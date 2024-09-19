import styled from "styled-components";
import {
  cardHoverActive,
  clampText,
  clampWidth,
  flexCenter,
  square,
  styledWrapper,
} from "@/common/styles/mixins";
import { borders, colors, device, fonts } from "@/common/styles/styleConstants";
import { HomeProductCardItemButton } from "@/pages/home/components/styles";

export const OrderContentItem = styled("li")`
  width: 100%;
  padding: 20px 25px;
  ${styledWrapper}
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  @media ${device.mobileL} {
    padding: 15px 20px;
  }

  @media ${device.mobileM} {
    padding: 15px;
  }
`;

export const OrderItemTitle = styled("h3")`
  ${clampText(fonts.sizes.subtitleMobile, fonts.sizes.subtitle)}
  font-weight: ${fonts.weights.semiBold};
  color: ${colors.blue};

  @media ${device.mobileL} {
    margin-left: 5px;
  }

  @media ${device.mobileM} {
    margin-left: 10px;
  }
`;

//Order Payment
export const OrderPaymentList = styled("ul")`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;

export const OrderForm = styled("form")`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const OrderTextInputWrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;

//Order Obtaining
export const OrderObnaitingDeliveryWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 50px;
  width: 100%;
  padding: 10px 25px;
  border: ${borders.defaultBorder};
  border-radius: ${borders.defaultBorderRadius};
`;

export const OrderObnaitingList = styled("ul")`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const OrderObtainingItem = styled("li")`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:not(:last-child) {
    padding-top: 0;
    border-bottom: ${borders.grayBorder};
  }
`;

export const OrderObtainingTitle = styled("h4")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.semiBold};
  color: ${colors.blue};
`;

export const OrderObtainingAddress = styled("address")`
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  color: ${colors.blackTotal};
`;

export const OrderObtainingTime = styled("time")`
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  color: ${colors.grayText};
`;

export const OrderObtainingText = styled("p")`
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  color: ${colors.grayText};
`;

export const OrderObnaitingRowWrapper = styled("div")<{ $alignStart: boolean }>`
  display: flex;
  align-items: ${(props) => (props.$alignStart === true ? "start" : "center")};
  justify-content: space-between;
  column-gap: 20px;

  @media ${device.mobileL} {
    row-gap: 10px;
    flex-direction: column;
    align-items: ${(props) => (props.$alignStart === true ? "start" : "end")};
  }
`;

export const OrderObnaitingColumnWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const OrderObnaitingButtonWrapper = styled("div")`
  ${clampWidth(200, 250)}

  @media ${device.mobileM} {
    width: 100%;
    padding-inline: 20px;
  }
`;

//Order Products
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
