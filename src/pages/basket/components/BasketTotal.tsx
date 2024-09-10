import { OrderButton } from "@/common/styles/tags/button/OrderButton";
import {
  BasketTotalHeader,
  BasketTotalSection,
  BasketTotalTitle,
  BasketTotalValue,
} from "@/pages/basket/components/styles";

interface BasketTotalProps {
  title: string;
  value?: number;
}

export const BasketTotal = ({ title, value }: BasketTotalProps) => {
  return (
    <BasketTotalSection>
      <BasketTotalHeader>
        <BasketTotalTitle>{title}</BasketTotalTitle>
        <BasketTotalValue>{`₽ ${!!value ? value : 0}`}</BasketTotalValue>
      </BasketTotalHeader>

      <OrderButton />
    </BasketTotalSection>
  );
};
