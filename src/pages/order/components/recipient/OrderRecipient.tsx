import { getLanguage } from "@/common/helpers/getLanguage";
import {
  OrderForm,
  OrderTextInputWrapper,
} from "@/pages/order/components/styles";
import { TextInput } from "@/common/styles/tags/input/TextInput";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useActions } from "@/store/actions";
import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton";

const validateName = (name: string) => {
  const regex = /^[a-zA-Zа-яА-ЯёЁ\s'-]+$/;
  return regex.test(name);
};

const validatePhone = (value: string) => {
  const regex = /^[0-9]+$/;
  return regex.test(value);
};

export const OrderRecipient = () => {
  const lang = getLanguage();
  const { setRecipient, clearRecipient } = useActions();
  const recipient = useSelector((state: RootState) => state.order.recipient);

  const handleChange = (key: string, value: string) => {
    let isValid = true;

    if (key === "phone") {
      if (!validatePhone(value)) {
        isValid = false;
      }
    } else if (key === "name" || key === "surname") {
      if (!validateName(value)) {
        isValid = false;
      }
    }

    if (isValid) {
      setRecipient({ ...recipient, [key]: value });
    }
  };

  const handleReset = () => {
    clearRecipient();
  };

  return (
    <OrderForm>
      <OrderTextInputWrapper>
        <TextInput
          id="name"
          title={lang.name}
          type="text"
          value={recipient.name}
          placeholder={lang.defaultName}
          onChange={(e) => handleChange("name", e.target.value)}
          required={true}
        />

        <TextInput
          id="surname"
          title={lang.surname}
          type="text"
          value={recipient.surname}
          placeholder={lang.defaultSurname}
          onChange={(e) => handleChange("surname", e.target.value)}
          required={true}
        />
      </OrderTextInputWrapper>

      <TextInput
        id="phone"
        title={lang.phone}
        type="text"
        value={recipient.phone}
        placeholder="8(800)555-35-35"
        onChange={(e) => handleChange("phone", e.target.value)}
        required={true}
      />

      <BlackWhiteButton
        title={lang.reset}
        color="black"
        click={handleReset}
        isActive={!!recipient.name || !!recipient.surname || !!recipient.phone}
      />
    </OrderForm>
  );
};
