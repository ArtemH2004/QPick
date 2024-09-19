import { getLanguage } from "@/common/helpers/getLanguage";
import { ProductCard } from "@/store/reducers/card/types";
import { BuyButton } from "@/common/styles/tags/button/BuyButton";
import {
  HomeProductCardArticle,
  HomeProductCardContentWrapper,
  HomeProductCardFavoritesWrapper,
  HomeProductCardFooter,
  HomeProductCardHeader,
  HomeProductCardImage,
  HomeProductCardItem,
  HomeProductCardItemButton,
  HomeProductCardOldPrice,
  HomeProductCardPrice,
  HomeProductCardPriceWrapper,
  HomeProductCardTitle,
} from "@/pages/home/components/styles";
import { useActions } from "@/store/actions";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { CardCounter } from "@/common/components/CardCounter";
import { memo, useState } from "react";
import { FavoritesButton } from "@/common/styles/tags/button/FavoritesButton";
import { ModalMore } from "@/common/components/modal/ModalMore";
import { Star } from "@/common/components/Star";

interface HomeProductCardProps {
  card: ProductCard;
}

export const HomeProductCard = memo(({ card }: HomeProductCardProps) => {
  const lang = getLanguage();
  const basket = useSelector((state: RootState) => state.basket);
  const favorites = useSelector((state: RootState) => state.favorites);
  const { setCardInBasket, setCardInFavorites, replaceCardFromFavorites } =
    useActions();

  const cardIndexInBasket = basket.card.findIndex(
    (item) => item.id === card.id
  );
  const isCardInBasket = basket.card.some((item) => item.id === card.id);
  const isCardInFavorites =
    favorites.card.some((item) => item.id == card.id) || false;
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddClick = () => {
    setCardInBasket(card);
  };

  const handleFavoritesClick = () => {
    !isCardInFavorites
      ? setCardInFavorites(card)
      : replaceCardFromFavorites(card);
  };

  return (
    <HomeProductCardItem>
      <HomeProductCardArticle>
        <HomeProductCardItemButton onClick={() => setModalOpen(true)} />
        <ModalMore
          isOpen={isModalOpen}
          setOpen={setModalOpen}
          inBasket={isCardInBasket}
          handleBasket={handleAddClick}
          indexBasket={cardIndexInBasket}
          isaFavoritesActive={true}
          inFavorites={isCardInFavorites}
          handleFavorites={handleFavoritesClick}
          card={card}
        />
        <HomeProductCardFavoritesWrapper>
          <FavoritesButton
            title={
              isCardInFavorites ? lang.removeFromFavorites : lang.addToFavorites
            }
            isActive={isCardInFavorites}
            click={handleFavoritesClick}
          />
        </HomeProductCardFavoritesWrapper>
        <HomeProductCardImage src={card.img} alt={card.title} />

        <HomeProductCardContentWrapper>
          <HomeProductCardHeader>
            <HomeProductCardTitle>{card.title}</HomeProductCardTitle>

            <HomeProductCardPriceWrapper>
              <HomeProductCardPrice>{`${card.price} ₽`}</HomeProductCardPrice>
              <HomeProductCardOldPrice>
                {!!card.oldPrice && `${card.oldPrice} ₽`}
              </HomeProductCardOldPrice>
            </HomeProductCardPriceWrapper>
          </HomeProductCardHeader>

          <HomeProductCardFooter>
            <Star raiting={card.raiting} />
            {!isCardInBasket ? (
              <BuyButton click={handleAddClick} />
            ) : (
              <CardCounter index={cardIndexInBasket} card={card} />
            )}
          </HomeProductCardFooter>
        </HomeProductCardContentWrapper>
      </HomeProductCardArticle>
    </HomeProductCardItem>
  );
});
