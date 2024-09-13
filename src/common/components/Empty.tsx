import styled from "styled-components";
import {
  clampText,
  flexCenter,
  square,
} from "@/common/styles/mixins";
import { colors, device, fonts } from "@/common/styles/styleConstants";

const basket = "public/images/icons/basket.svg";
const favorites = "public/images/icons/liked.svg";

const Wrapper = styled("div")`
  width: 633px;
  padding-block: 25px;
  margin-inline: auto;
  ${flexCenter}
  flex-direction: column;
  row-gap: 10px;

  @media ${device.tablet} {
    width: 450px;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`;

const Icon = styled("img")`
  ${square(50)}
  object-fit: contain;
  object-position: center;
  user-select: none;
`;

const Text = styled("p")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.grayText};
  text-align: center;
  user-select: none;
`;

interface EmptyProps {
  icon: string;
  title: string;
}

export const Empty = ({ icon, title }: EmptyProps) => {
  return (
    <Wrapper>
      <Icon src={icon === "basket" ? basket : favorites} alt={title} />
      <Text>{title}</Text>
    </Wrapper>
  );
};
