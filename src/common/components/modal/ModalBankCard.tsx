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

const formatCardNumber = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
};

const formatDate = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 2) {
    return `${digits.slice(0, 2)} / ${digits.slice(2)}`;
  }
  return digits;
};

const formatCvv = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 3);
  return digits;
};

const validateCardNumber = (value: string) => {
  const digits = value.replace(/\D/g, "");
  return digits.length === 16;
};

const validateDate = (value: string) => {
  const [month, year] = value.split("/");
  const monthNum = parseInt(month, 10);
  const yearNum = parseInt(year, 10);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;

  return (
    monthNum >= 1 &&
    monthNum <= 12 &&
    (yearNum > currentYear || (yearNum === currentYear && monthNum >= currentMonth))
  );
};

const validateCvv = (value: string) => {
  const digits = value.replace(/\D/g, "");
  return digits.length === 2 || digits.length === 3;
};


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

  const validateForm = () => {
    const isValidNumber = /^\d{4} \d{4} \d{4} \d{4}$/.test(card.number);
    const isValidDate = /^(0[1-9]|1[0-2])\d \ \d{2}$/.test(card.date);
    const isValidCvv = /^\d{3}$/.test(card.cvv);
    return isValidNumber && isValidDate && isValidCvv;
  };

  const handleChangeSave = () => {
    const isValid = validateForm();
    setSaveButtonActive(isValid);
  };
  
  const handleChange = (key: string, value: string) => {
    let formattedValue = value;
    if (key === "number") {
      formattedValue = formatCardNumber(value);
    } else if (key === "date") {
      formattedValue = formatDate(value);
    } else if (key === "cvv") {
      formattedValue = formatCvv(value);
    }
  
    setCard({ ...card, [key]: formattedValue });
  
    const isValid =
      validateCardNumber(card.number) &&
      validateDate(card.date) &&
      validateCvv(card.cvv);
  
    setSaveButtonActive(isValid);
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
