import { getLanguage } from "@/common/helpers/getLanguage";
import {
  OrderForm,
  OrderTextInputWrapper,
} from "@/pages/order/components/styles";
import { TextInput } from "@/common/styles/tags/input/TextInput";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useActions } from "@/store/actions";

export const OrderRecipient = () => {
  const lang = getLanguage();
  const { setRecipient } = useActions();
  const recipient = useSelector((state: RootState) => state.order.recipient);

  const handleChange = (key: string, value: string) => {
    setRecipient({ ...recipient, [key]: value });
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
        type="phone"
        value={recipient.phone}
        placeholder="88005553535"
        onChange={(e) => handleChange("phone", e.target.value)}
        required={true}
      />
    </OrderForm>
  );
};
