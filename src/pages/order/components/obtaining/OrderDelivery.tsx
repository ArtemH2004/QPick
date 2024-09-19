import {
  OrderForm,
  OrderTextInputWrapper,
} from "@/pages/order/components/styles";
import { TextInput } from "@/common/styles/tags/input/TextInput";
import { getLanguage } from "@/common/helpers/getLanguage";
import { OrderAddress } from "@/store/reducers/order/types";

interface OrderDeliveryProps {
    order: OrderAddress;
    handleChange: (key: string, value: string) => void;
}

export const OrderDelivery = ({order, handleChange}: OrderDeliveryProps) => {
  const lang = getLanguage();
  return (
    <OrderForm>
      <TextInput
        id="address"
        title={lang.address}
        type="text"
        value={order.address}
        placeholder={lang.defaultAddress}
        onChange={(e) => handleChange("address", e.target.value)}
        required={true}
      />

      <OrderTextInputWrapper>
        <TextInput
          id="apartment"
          title={lang.apartment}
          type="text"
          value={order.apartment}
          placeholder="36"
          onChange={(e) => handleChange("apartment", e.target.value)}
          required={false}
        />

        <TextInput
          id="entrance"
          title={lang.entrance}
          type="text"
          value={order.entrance}
          placeholder="2"
          onChange={(e) => handleChange("entrance", e.target.value)}
          required={false}
        />
      </OrderTextInputWrapper>

      <OrderTextInputWrapper>
        <TextInput
          id="floor"
          title={lang.floor}
          type="text"
          value={order.floor}
          placeholder="10"
          onChange={(e) => handleChange("floor", e.target.value)}
          required={false}
        />

        <TextInput
          id="intercom"
          title={lang.intercom}
          type="text"
          value={order.intercom}
          placeholder="36"
          onChange={(e) => handleChange("intercom", e.target.value)}
          required={false}
        />
      </OrderTextInputWrapper>

      <TextInput
        id="commentDelivery"
        title={lang.commentDelivery}
        type="text"
        value={order.comment}
        placeholder=""
        onChange={(e) => handleChange("comment", e.target.value)}
        required={false}
      />
    </OrderForm>
  );
};
