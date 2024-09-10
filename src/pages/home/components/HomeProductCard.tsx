import { getLanguage } from "@/common/helpers/getLanguage";
import { ProductCard } from "@/common/interfaces/productCard";
import { BuyButton } from "@/common/styles/tags/button/BuyButton";
import {
  HomeProductCardArticle,
  HomeProductCardContentWrapper,
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

const star = "public/images/icons/star.svg";

interface HomeProductCardProps {
  card: ProductCard;
}

export const HomeProductCard = ({ card }: HomeProductCardProps) => {
  const lang = getLanguage();

  return (
    <HomeProductCardItem>
      <HomeProductCardArticle>
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
              <HomeProductCardStarIcon src={star} alt={lang.raiting} />
              <HomeProductCardStarCount>{card.raiting}</HomeProductCardStarCount>
            </HomeProductCardStarWrapper>
            <BuyButton id={card.id} />
          </HomeProductCardFooter>
        </HomeProductCardContentWrapper>
      </HomeProductCardArticle>
    </HomeProductCardItem>
  );
};
