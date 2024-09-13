import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import styled from "styled-components";
import { clampText, flexCenter } from "@/common/styles/mixins";
import { colors, fonts } from "@/common/styles/styleConstants";
import { getLanguage } from "@/common/helpers/getLanguage";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useActions } from "@/store/actions";
import { useState } from "react";
import { ProductCard } from "@/store/reducers/card/types";

const CardCountWrapper = styled("div")`
  ${flexCenter}
  column-gap: 25px;
`;

const CardCount = styled("span")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.semiBold};
  color: ${colors.blackTotal};
`;

interface CardCounterProps {
  index: number;
  card: ProductCard;
}

export const CardCounter = ({ index, card }: CardCounterProps) => {
  const lang = getLanguage();
  const basket = useSelector((state: RootState) => state.basket.count[index]);
  const { increaseCardCount, decreaseCardCount } = useActions();
  const [count, setCount] = useState(basket);

  const handleIncreaseClick = () => {
    increaseCardCount(card);
    setCount(count + 1);
  };

  const handleDecreaseClick = () => {
    decreaseCardCount(card);
    setCount(count - 1);
  };

  return (
    <CardCountWrapper>
      <ButtonWithIcon
        icon="minus"
        title={lang.minus}
        color="orange"
          isActive={count === 1}
        click={handleDecreaseClick}
      />
      <CardCount>{count}</CardCount>
      <ButtonWithIcon
        icon="plus"
        title={lang.plus}
        color="orange"
        isActive={count === 9}
        click={handleIncreaseClick}
      />
    </CardCountWrapper>
  );
};
