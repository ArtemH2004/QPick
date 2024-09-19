import { OrderContentItem, OrderItemTitle } from "@/pages/order/components/styles";
import { OrderPayment } from "@/pages/order/components/payment/OrderPayment";
import { OrderObtaining } from "@/pages/order/components/obtaining/OrderObtaining";
import { OrderRecipient } from "@/pages/order/components/recipient/OrderRecipient";
import { OrderProducts } from "@/pages/order/components/products/OrderProducts";

interface OrderItemProps {
    title: string;
    type: string;
}

export const OrderItem = ({title, type}: OrderItemProps) => {
  return (
    <OrderContentItem>
      <OrderItemTitle>{title}</OrderItemTitle>
      {type === 'payment' && <OrderPayment />}
      {type === 'obtaining' && <OrderObtaining />}
      {type === 'recipient' && <OrderRecipient />}
      {type === 'products' && <OrderProducts />}
    </OrderContentItem>
  );
};
