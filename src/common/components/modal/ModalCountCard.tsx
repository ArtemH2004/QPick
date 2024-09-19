import Modal from "@/common/components/modal/Modal";
import {
  ModalCountCardContentWrapper,
  ModalCountCardCount,
  ModalCountCardCurrentPrice,
  ModalCountCardImage,
  ModalCountCardInnerWrapper,
  ModalCountCardOldPrice,
  ModalCountCardPrice,
  ModalCountCardPriceWrapper,
  ModalMorePriceWrapper,
  ModalMoreTitle,
} from "@/common/components/modal/styles";
import { getLanguage } from "@/common/helpers/getLanguage";
import { normalizePrice } from "@/common/helpers/normalizePrice";
import { productPrice } from "@/common/helpers/productPrice";
import { ProductCard } from "@/store/reducers/card/types";

interface ModalCountCardProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  card: ProductCard;
  count: number;
}

export const ModalCountCard = ({
  isOpen,
  setOpen,
  card,
  count,
}: ModalCountCardProps) => {
  const lang = getLanguage();
  return (
    <Modal isOpen={isOpen} onClose={() => setOpen(false)} title={lang.product}>
      <ModalCountCardInnerWrapper>
        <ModalCountCardImage src={card.img} alt={card.title} />

        <ModalCountCardContentWrapper>
          <ModalMoreTitle>{card.title}</ModalMoreTitle>

          <ModalCountCardPriceWrapper>
            <ModalMorePriceWrapper>
              <ModalCountCardCurrentPrice>{`${normalizePrice(
                productPrice(card.price, count)
              )} ₽`}</ModalCountCardCurrentPrice>
              {!!card.oldPrice && (
                <ModalCountCardOldPrice>{`${normalizePrice(
                  productPrice(card.oldPrice, count)
                )} ₽`}</ModalCountCardOldPrice>
              )}
            </ModalMorePriceWrapper>

            {count > 1 && (
              <ModalCountCardPrice>{`${normalizePrice(card.price)} ₽ / ${
                lang.pcs
              }`}</ModalCountCardPrice>
            )}
          </ModalCountCardPriceWrapper>

          <ModalCountCardCount>{`${count} ${lang.pcs}`}</ModalCountCardCount>
        </ModalCountCardContentWrapper>
      </ModalCountCardInnerWrapper>
    </Modal>
  );
};
