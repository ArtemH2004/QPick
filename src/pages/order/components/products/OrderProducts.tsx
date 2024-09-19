import { OrderProductsList } from "@/pages/order/components/products/styles";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { OrderProductCard } from "@/pages/order/components/products/OrderProductCard";

export const OrderProducts = () => {
  const basket = useSelector((state: RootState) => state.basket);

  return (
    <OrderProductsList>
      {basket.card.map((item, index) => (
        <OrderProductCard key={index} count={basket.count[index]} card={item} />
      ))}
    </OrderProductsList>
  );
};
