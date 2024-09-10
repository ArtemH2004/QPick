import { getLanguage } from "@/common/helpers/getLanguage";
import { ProductCard } from "@/common/interfaces/ProductCard";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import {
  BasketProductCardArticle,
  BasketProductCardContentWrapper,
  BasketProductCardCount,
  BasketProductCardCountWrapper,
  BasketProductCardEndWrapper,
  BasketProductCardImage,
  BasketProductCardInnerWrapper,
  BasketProductCardItem,
  BasketProductCardMiddleWrapper,
  BasketProductCardPrice,
  BasketProductCardTitle,
} from "@/pages/basket/components/styles";
import { useState } from "react";

interface BasketProductCardProps {
  card: ProductCard;
}

export const BasketProductCard = ({ card }: BasketProductCardProps) => {
  const lang = getLanguage();

  const [count, setCount] = useState(0);

  return (
    <BasketProductCardItem>
      <BasketProductCardArticle>
        <BasketProductCardContentWrapper>
          <BasketProductCardInnerWrapper>
            <BasketProductCardImage src={card.img} alt={card.title} />
            <BasketProductCardCountWrapper>
                <ButtonWithIcon icon="minus" title={lang.minus} color="orange" />
                <BasketProductCardCount>{count}</BasketProductCardCount>
                <ButtonWithIcon icon="plus" title={lang.plus} color="orange" />
            </BasketProductCardCountWrapper>
          </BasketProductCardInnerWrapper>

          <BasketProductCardMiddleWrapper>
            <BasketProductCardTitle>{card.title}</BasketProductCardTitle>
            <BasketProductCardPrice $color="gray">{`${card.price} ₽`}</BasketProductCardPrice>
          </BasketProductCardMiddleWrapper>
        </BasketProductCardContentWrapper>

        <BasketProductCardEndWrapper>
          <ButtonWithIcon icon="bin" title={lang.delete} />
          <BasketProductCardPrice>{`${card.price} ₽`}</BasketProductCardPrice>
        </BasketProductCardEndWrapper>
      </BasketProductCardArticle>
    </BasketProductCardItem>
  );
};
