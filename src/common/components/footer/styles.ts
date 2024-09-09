import styled from "styled-components";
import { flexCenter, styledWrapper } from "@/common/styles/mixins";
import { device } from "@/common/styles/styleConstants";

export const FooterWrapper = styled("footer")`
  ${styledWrapper}
  width: 100%;
  padding: 30px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 50px;

  @media ${device.mobile} {
    padding: 20px;
    ${flexCenter}
    flex-direction: column;
    row-gap: 30px;
  }

  @media ${device.mobileM} {
    padding: 15px;
    row-gap: 20px;
  }
`;

export const FooterContent = styled("div")`
  ${flexCenter}
  column-gap: 174px;
  height: 83px;

  @media ${device.tablet} {
    column-gap: 125px;
  }

  @media ${device.mobileL} {
    column-gap: 50px;
  }

  @media ${device.mobileM} {
    height: auto;
    flex-direction: column;
    row-gap: 5px;
  }
`;

export const FooterList = styled("ul")`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 5px;
`;
