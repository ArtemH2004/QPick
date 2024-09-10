import styled from "styled-components";
import {
  absCenter,
  absTopRight,
  flexCenter,
  hoverActive,
  resetButton,
  square,
} from "@/common/styles/mixins";
import { Link } from "react-router-dom";
import { borders, colors, fonts } from "@/common/styles/styleConstants";

const basket = 'public/images/icons/basket.svg';
const favorites = 'public/images/icons/liked.svg';

const Button = styled("button")`
  ${resetButton};
  ${square(60)}
  position: relative;
  border-radius: ${borders.circleBorderRadius};

  ${hoverActive}
`;

const ButtonImg = styled("img")`
  ${absCenter}
  z-index: 1;
  ${square(25)}
`;

export const ButtonCountWrapper = styled("div")`
  ${flexCenter}
  ${absTopRight}
  z-index: 2;
  ${square(18)}
  background-color: ${colors.orange};
  border-radius: inherit;
`;

const Count = styled("span")`
  color: ${colors.whiteTotal};
  font-size: ${fonts.sizes.small};
  font-weight: ${fonts.weights.medium};
  text-align: center;
  line-height: 1.1;
`;

interface ButtonWithCountProps {
  count: number;
  title: string;
  icon: string;
  link?: string;
}

export const ButtonWithCount = ({
  count,
  title,
  icon,
  link,
}: ButtonWithCountProps) => {
  return (
    <Link to={link || '/'}>
      <Button title={title}>
        <ButtonImg src={icon === 'basket' ? basket : favorites} alt={title} />
        <ButtonCountWrapper>
          <Count>{count}</Count>
        </ButtonCountWrapper>
      </Button>
    </Link>
  );
};
