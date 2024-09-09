import styled from "styled-components";
import { flexCenter, square } from "@/common/styles/mixins";

export const HeaderWrapper = styled("header")`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 50px;
`;

export const HeaderList = styled("ul")`
  ${flexCenter};
`;

export const HeaderItem = styled("li")`
  ${square(60)}
`;
