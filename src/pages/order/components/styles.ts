import styled from "styled-components";
import { clampText, styledWrapper } from "@/common/styles/mixins";
import { colors, device, fonts } from "@/common/styles/styleConstants";

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
