import { normalizePrice } from "@/common/helpers/normalizePrice";
import { OrderButton } from "@/common/styles/tags/button/OrderButton";
import {
  BasketTotalHeader,
  BasketTotalSection,
  BasketTotalTitle,
  BasketTotalValue,
} from "@/pages/basket/components/styles";

interface BasketTotalProps {
  title: string;
  link?: string;
  click?: () => void;
  value?: number;
  isActive: boolean;
}

export const BasketTotal = ({ title, link, click, value, isActive }: BasketTotalProps) => {
  return (
    <BasketTotalSection>
      <BasketTotalHeader>
        <BasketTotalTitle>{title}</BasketTotalTitle>
        <BasketTotalValue>{`₽ ${normalizePrice(!!value ? value : 0)}`}</BasketTotalValue>
      </BasketTotalHeader>

      <OrderButton isActive={isActive} link={link} click={click} />
    </BasketTotalSection>
  );
};
