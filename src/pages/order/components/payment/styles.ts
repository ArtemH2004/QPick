import styled from "styled-components";
import { device } from "@/common/styles/styleConstants";

export const OrderPaymentList = styled("ul")`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;