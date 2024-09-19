import { getLanguage } from "@/common/helpers/getLanguage";
import { OrderCard } from "@/store/reducers/order/types";
import Modal from "@/common/components/modal/Modal";
import {
  OrderForm,
  OrderTextInputWrapper,
} from "@/pages/order/components/styles";
import { TextInput } from "@/common/styles/tags/input/TextInput";
import { useActions } from "@/store/actions";
import { ModalButtonWrapper } from "@/common/components/modal/styles";
import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton";
import { useState } from "react";

interface ModalBankCardProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  card: OrderCard;
}

export const ModalBankCard = ({
  isOpen,
  setOpen,
  card,
}: ModalBankCardProps) => {
  const lang = getLanguage();
  const [isSaveButtonActive, setSaveButtonActive] = useState(
    !!card.number && !!card.date && !!card.cvv
  );
  const { setCard, clearCard } = useActions();

  const handleClose = () => {
    const isValid = !!card.number && !!card.date && !!card.cvv;
    !isValid && clearCard();
    setOpen(false);
  };

  const handleReset = () => {
    clearCard();
    setSaveButtonActive(false);
  };

  const handleClickSave = () => {
    setOpen(false);
    setSaveButtonActive(false);
  };

  const handleChangeSave = () => {
    const isValid = !!card.number && !!card.date && !!card.cvv;
    setSaveButtonActive(isValid ? true : false);
  };

  const handleChange = (key: string, value: string) => {
    const isValid = !!card.number && !!card.date && !!card.cvv;
    setSaveButtonActive(isValid ? true : false);

    setCard({ ...card, [key]: value });
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={lang.linkCard}>
      <OrderForm>
        <TextInput
          id="phone"
          title={lang.cardNumber}
          type="phone"
          value={card.number}
          placeholder="0000 0000 0000 0000"
          onChange={(e) => handleChange("number", e.target.value)}
          required={true}
        />

        <OrderTextInputWrapper>
          <TextInput
            id="date"
            title={lang.cardDate}
            type="text"
            value={card.date}
            placeholder={lang.defaultCardDate}
            onChange={(e) => handleChange("date", e.target.value)}
            required={true}
          />

          <TextInput
            id="cvv"
            title={lang.cardCvv}
            type="text"
            value={card.cvv}
            placeholder="⋅⋅⋅"
            onChange={(e) => handleChange("cvv", e.target.value)}
            required={true}
          />
        </OrderTextInputWrapper>
      </OrderForm>

      <ModalButtonWrapper>
        <BlackWhiteButton title={lang.reset} click={handleReset} />
        <BlackWhiteButton
          title={lang.save}
          color="black"
          isActive={isSaveButtonActive}
          click={handleClickSave}
          change={handleChangeSave}
        />
      </ModalButtonWrapper>
    </Modal>
  );
};
