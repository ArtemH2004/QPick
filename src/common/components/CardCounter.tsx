import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import styled from "styled-components";
import { clampText, flexCenter } from "@/common/styles/mixins";
import { colors, fonts } from "@/common/styles/styleConstants";
import { getLanguage } from "@/common/helpers/getLanguage";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useActions } from "@/store/actions";
import { ProductCard } from "@/store/reducers/card/types";

const CardCountWrapper = styled("div")`
  ${flexCenter}
  column-gap: 25px;
`;

const CardCount = styled("span")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.semiBold};
  color: ${colors.blackTotal};
  user-select: none;
`;

interface CardCounterProps {
  index: number;
  card: ProductCard;
}

export const CardCounter = ({ index, card }: CardCounterProps) => {
  const lang = getLanguage();
  const basket = useSelector((state: RootState) => state.basket.count[index]);
  const { increaseCardCount, decreaseCardCount, replaceCardFromBasket } = useActions();

  const handleIncreaseClick = () => {
    increaseCardCount(card);
  };

  const handleDecreaseClick = () => {
    basket === 1 && replaceCardFromBasket(card);
    decreaseCardCount(card);
  };

  return (
    <CardCountWrapper>
      <ButtonWithIcon
        icon="minus"
        title={lang.minus}
        color="orange"
        click={handleDecreaseClick}
      />
      <CardCount>{basket}</CardCount>
      <ButtonWithIcon
        icon="plus"
        title={lang.plus}
        color="orange"
        isActive={basket === 9}
        click={handleIncreaseClick}
      />
    </CardCountWrapper>
  );
};
