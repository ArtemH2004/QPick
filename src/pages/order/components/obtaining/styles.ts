import styled from "styled-components";
import { clampText, clampWidth } from "@/common/styles/mixins";
import { borders, colors, device, fonts } from "@/common/styles/styleConstants";

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
