import { getLanguage } from "@/common/helpers/getLanguage";
import { ProductCard } from "@/store/reducers/card/types";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import {
  BasketProductCardArticle,
  BasketProductCardContentWrapper,
  BasketProductCardEndWrapper,
  BasketProductCardImage,
  BasketProductCardInnerWrapper,
  BasketProductCardItem,
  BasketProductCardItemButton,
  BasketProductCardMiddleWrapper,
  BasketProductCardPrice,
  BasketProductCardTitle,
} from "@/pages/basket/components/styles";
import { useActions } from "@/store/actions";
import { normalizePrice } from "@/common/helpers/normalizePrice";
import { CardCounter } from "@/common/components/CardCounter";
import { memo, useState } from "react";
import { ModalMore } from "@/common/components/modal/ModalMore";

interface BasketProductCardProps {
  index: number;
  card: ProductCard;
}

export const BasketProductCard = memo(({ index, card }: BasketProductCardProps) => {
  const lang = getLanguage();
  const { setCardInBasket, replaceCardFromBasket } = useActions();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddClick = () => {
    setCardInBasket(card);
  };

  const handleReplaceClick = () => {
    replaceCardFromBasket(card);
  }

  return (
    <BasketProductCardItem>
      <BasketProductCardArticle>
      <BasketProductCardItemButton onClick={() => setModalOpen(true)} />
        <ModalMore
          isOpen={isModalOpen}
          setOpen={setModalOpen}
          inBasket={true}
          handleBasket={handleAddClick}
          indexBasket={index}
          isaFavoritesActive={false}
          card={card}
        />

        <BasketProductCardContentWrapper>
          <BasketProductCardInnerWrapper>
            <BasketProductCardImage src={card.img} alt={card.title} />
            <CardCounter index={index} card={card} />
          </BasketProductCardInnerWrapper>

          <BasketProductCardMiddleWrapper>
            <BasketProductCardTitle>{card.title}</BasketProductCardTitle>
            <BasketProductCardPrice $color="gray">{`${normalizePrice(card.price)} ₽`}</BasketProductCardPrice>
          </BasketProductCardMiddleWrapper>
        </BasketProductCardContentWrapper>

        <BasketProductCardEndWrapper>
          <ButtonWithIcon icon="bin" title={lang.delete} click={handleReplaceClick} />
          <BasketProductCardPrice>{`${normalizePrice(card.price)} ₽`}</BasketProductCardPrice>
        </BasketProductCardEndWrapper>
      </BasketProductCardArticle>
    </BasketProductCardItem>
  );
});
