import { ProductCard } from "@/store/reducers/card/types";
import Modal from "@/common/components/modal/Modal";
import {
  ModalMoreAboutTitle,
  ModalMoreAboutWrapper,
  ModalMoreContentWrapper,
  ModalMoreCurrentPrice,
  ModalMoreDescription,
  ModalMoreFavoritesWrapper,
  ModalMoreImage,
  ModalMoreImageWrapper,
  ModalMoreInnerWrapper,
  ModalMoreOldPrice,
  ModalMorePriceWrapper,
  ModalMoreTitle,
  ModalMoreWrapper,
} from "@/common/components/modal/styles";
import { Star } from "@/common/components/Star";
import { normalizePrice } from "@/common/helpers/normalizePrice";
import { BuyButton } from "@/common/styles/tags/button/BuyButton";
import { CardCounter } from "@/common/components/CardCounter";
import { FavoritesButton } from "@/common/styles/tags/button/FavoritesButton";
import { getLanguage } from "@/common/helpers/getLanguage";

interface ModalMoreProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  inBasket: boolean;
  handleBasket: () => void;
  indexBasket: number;
  isaFavoritesActive: boolean;
  inFavorites?: boolean;
  handleFavorites?: () => void;
  card: ProductCard;
}

export const ModalMore = ({
  isOpen,
  setOpen,
  inBasket,
  handleBasket,
  indexBasket,
  isaFavoritesActive,
  inFavorites,
  handleFavorites,
  card,
}: ModalMoreProps) => {
  const lang = getLanguage();
  return (
    <Modal isOpen={isOpen} onClose={() => setOpen(false)} title={lang.about}>
      <ModalMoreWrapper>
        <ModalMoreImageWrapper>
          <ModalMoreImage src={card.img} alt={card.title} />

          {isaFavoritesActive && (
            <ModalMoreFavoritesWrapper>
              <FavoritesButton
                title={
                  inFavorites ? lang.removeFromFavorites : lang.addToFavorites
                }
                isActive={inFavorites}
                click={handleFavorites}
              />
            </ModalMoreFavoritesWrapper>
          )}
        </ModalMoreImageWrapper>

        <ModalMoreContentWrapper>
          <ModalMoreInnerWrapper>
            <ModalMoreTitle>{card.title}</ModalMoreTitle>
            <Star raiting={card.raiting} />
          </ModalMoreInnerWrapper>

          <ModalMoreAboutWrapper>
            <ModalMoreAboutTitle>{lang.characteristics}</ModalMoreAboutTitle>
            <ModalMoreDescription>{card.description}</ModalMoreDescription>
          </ModalMoreAboutWrapper>

          <ModalMoreInnerWrapper>
            <ModalMorePriceWrapper>
              <ModalMoreCurrentPrice>{`${normalizePrice(
                card.price
              )} ₽`}</ModalMoreCurrentPrice>
              {!!card.oldPrice && (
                <ModalMoreOldPrice>{`${normalizePrice(
                  card.oldPrice
                )} ₽`}</ModalMoreOldPrice>
              )}
            </ModalMorePriceWrapper>

            {!inBasket ? (
              <BuyButton click={handleBasket} />
            ) : (
              <CardCounter index={indexBasket} card={card} />
            )}
          </ModalMoreInnerWrapper>
        </ModalMoreContentWrapper>
      </ModalMoreWrapper>
    </Modal>
  );
};
