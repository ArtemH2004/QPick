import { ModalBankCard } from "@/common/components/modal/ModalBankCard";
import { PaymentCardButton } from "@/common/styles/tags/button/PaymentCardButton";
import { OrderCardItem } from "@/pages/order/components/payment/OrderCardItem";
import { OrderPaymentList } from "@/pages/order/components/payment/styles";
import { RootState } from "@/store/store";
import { useState } from "react";
import { useSelector } from "react-redux";

export const OrderPayment = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const card = useSelector((state: RootState) => state.order.card);
  const [currentCard, setCurrentCard] = useState(false);

  const handleClick = () => {
    setCurrentCard(false);
  };

  const handleAddCardClick = () => {
    const isValid = card.number === "" && card.date === "" && card.cvv === "";
    setCurrentCard(!isValid && true);
    !isModalOpen && isValid && setModalOpen(true);
  };

  const handleEditCardClick = () => {
    !isModalOpen && setModalOpen(true);
  };

  return (
    <>
      <ModalBankCard isOpen={isModalOpen} setOpen={setModalOpen} card={card} />

      <OrderPaymentList>
        <PaymentCardButton
          card="sbp"
          isActive={!currentCard}
          click={handleClick}
        />
        <PaymentCardButton
          card="addCard"
          isActive={currentCard}
          click={handleAddCardClick}
        >
          {!!card.number && !!card.date && !!card.cvv && (
            <OrderCardItem card={card} click={handleEditCardClick} />
          )}
        </PaymentCardButton>
      </OrderPaymentList>
    </>
  );
};
