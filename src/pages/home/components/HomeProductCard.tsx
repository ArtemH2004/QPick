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
  HomeProductCardOldPrice,
  HomeProductCardPrice,
  HomeProductCardPriceWrapper,
  HomeProductCardStarCount,
  HomeProductCardStarIcon,
  HomeProductCardStarWrapper,
  HomeProductCardTitle,
} from "@/pages/home/components/styles";
import { useActions } from "@/store/actions";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { CardCounter } from "@/common/components/CardCounter";
import { VisuallyHidden } from "@/common/styles/GlobalStyles";
import { memo } from "react";
import { FavoritesButton } from "@/common/styles/tags/button/FavoritesButton";

const star = "public/images/icons/star.svg";

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
            <HomeProductCardStarWrapper title={lang.raiting}>
              <VisuallyHidden>{lang.raiting}</VisuallyHidden>
              <HomeProductCardStarIcon src={star} alt={lang.raiting} />
              <HomeProductCardStarCount>
                {card.raiting}
              </HomeProductCardStarCount>
            </HomeProductCardStarWrapper>
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
