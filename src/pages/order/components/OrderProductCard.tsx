import { ProductCard } from "@/store/reducers/card/types";
import { normalizePrice } from "@/common/helpers/normalizePrice";
import { productPrice } from "@/common/helpers/productPrice";
import {
  OrderProductsArticle,
  OrderProductsButton,
  OrderProductsCount,
  OrderProductsImage,
  OrderProductsItem,
  OrderProductsPrice,
} from "@/pages/order/components/styles";
import { ModalCountCard } from "@/common/components/modal/ModalCountCard";
import { useState } from "react";

interface OrderProductCardProps {
  card: ProductCard;
  count: number;
}

export const OrderProductCard = ({ card, count }: OrderProductCardProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <OrderProductsItem>
      <OrderProductsArticle>
        <OrderProductsButton onClick={() => setModalOpen(true)} />
        <ModalCountCard
          isOpen={isModalOpen}
          setOpen={setModalOpen}
          card={card}
          count={count}
        />
        <OrderProductsImage src={card.img} alt={card.title} />
        {count > 1 && <OrderProductsCount>{`x${count}`}</OrderProductsCount>}

        <OrderProductsPrice>{`${normalizePrice(
          productPrice(card.price, count)
        )} ₽`}</OrderProductsPrice>
      </OrderProductsArticle>
    </OrderProductsItem>
  );
};
