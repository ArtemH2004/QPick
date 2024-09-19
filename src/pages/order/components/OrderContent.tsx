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
import { useActions } from "@/store/actions";

const OrderContentList = styled(BasketProductCardList)`
  flex-direction: column;
`;

export const OrderContent = () => {
  const lang = getLanguage();
  const { clearBasket } = useActions();
  const order = useSelector((state: RootState) => state.order);
  const isFilled =
    !!order.card.number &&
    !!order.card.date &&
    !!order.card.cvv &&
    !!order.recipient.name &&
    !!order.recipient.surname &&
    !!order.recipient.phone &&
    !!order.address.address;

  useEffect(() => {
    scrollToTop();
  }, []);

  const handleClick = () => {
    alert(lang.orderPlaced)
    clearBasket();
  };

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

        <BasketTotal
          title={lang.total}
          value={totalPrice(
            order.address.type === "selfPickup" &&
              (order.address.address === lang.defaultAddressVoronezh ||
                order.address.address === lang.defaultAddressMoscow)
              ? 999
              : 0
          )}
          isActive={isFilled ? false : true}
          click={handleClick}
          link="/home"
        />
      </BasketContentWrapper>
    </BasketInnerWrapper>
  );
};
