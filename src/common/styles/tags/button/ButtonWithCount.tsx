import styled from "styled-components";
import {
  absCenter,
  absTopRight,
  flexCenter,
  hoverActive,
  resetButton,
  square,
} from "../../mixins";
import { Link } from "react-router-dom";
import Basket from "../../../../../public/images/basket.svg";
import Liked from "../../../../../public/images/liked.svg";
import { borders, colors, fonts } from "../../styleConstants";

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
  link?: string;
}

export const ButtonWithCount = ({
  count,
  title,
  link,
}: ButtonWithCountProps) => {
  return (
    <Link to={link || '/'}>
      <Button title={title}>
        <ButtonImg src={title === "Корзина" ? Basket : Liked} alt={title} />
        <ButtonCountWrapper>
          <Count>{count}</Count>
        </ButtonCountWrapper>
      </Button>
    </Link>
  );
};
