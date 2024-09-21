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

const formatPhoneNumber = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  const formattedNumber = digits.replace(
    /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
    "$1($2)$3-$4-$5"
  );
  return formattedNumber;
};

const validateName = (value: string) => {
  const nameRegex = /^[A-Za-zА-Яа-яЁё\s-]+$/; 
  return value.length >= 0 && nameRegex.test(value);
};

export const OrderRecipient = () => {
  const lang = getLanguage();
  const { setRecipient, clearRecipient } = useActions();
  const recipient = useSelector((state: RootState) => state.order.recipient);

  const handleChange = (key: string, value: string) => {
    if (key === "phone") {
      const formattedValue = formatPhoneNumber(value);
      setRecipient({ ...recipient, [key]: formattedValue });
    } else {
      let isValid = true;

      if (key === "name" || key === "surname") {
        isValid = validateName(value);
        if (!isValid) {
          value = ""; 
        }
      }
  
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
