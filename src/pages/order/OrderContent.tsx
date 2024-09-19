import { getLanguage } from "@/common/helpers/getLanguage";
import { scrollToTop } from "@/common/helpers/scrollToTop";
import {
  BasketContentSection,
  BasketContentTitle,
  BasketContentWrapper,
  BasketInnerWrapper,
  BasketProductCardList,
} from "@/pages/basket/components/styles";
import { useEffect } from "react";
import { BasketTotal } from "@/pages/basket/components/BasketTotal";
import { totalPrice } from "@/common/helpers/totalPrice";
import { OrderItem } from "@/pages/order/components/OrderItem";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const OrderContentList = styled(BasketProductCardList)`
  flex-direction: column;
`;

export const OrderContent = () => {
  const lang = getLanguage();
  const order = useSelector((state: RootState) => state.order);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <BasketInnerWrapper>
      <BasketContentTitle>{lang.order}</BasketContentTitle>

      <BasketContentWrapper>
        <BasketContentSection>
          <OrderContentList>
            <OrderItem title={lang.paymentMethod} type="payment" />
            <OrderItem title={lang.obtaining} type="obtaining" />
            <OrderItem title={lang.recipientDetails} type="recipient" />
            <OrderItem title={lang.selectedProducts} type="products" />
          </OrderContentList>
        </BasketContentSection>

        <BasketTotal title={lang.total} value={totalPrice()} isActive={!!order.card && !!order.recipient && !!order.address.address ? false : true} />
      </BasketContentWrapper>
    </BasketInnerWrapper>
  );
};
