import { getLanguage } from "@/common/helpers/getLanguage";
import {
  NavigationList,
  NavOrderButton,
} from "@/common/styles/tags/button/NavOrderButton";
import {
  OrderObnaitingDeliveryWrapper,
  OrderObtainingText,
  OrderObtainingTitle,
} from "@/pages/order/components/obtaining/styles";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useActions } from "@/store/actions";
import { OrderDelivery } from "@/pages/order/components/obtaining/OrderDelivery";
import { OrderSelfPickup } from "@/pages/order/components/obtaining/OrderSelfPickup";

export const OrderObtaining = () => {
  const lang = getLanguage();
  const { setAddress } = useActions();
  const order = useSelector((state: RootState) => state.order.address);

  const handleDeliveryClick = (id: number) => {
    setAddress({
      ...order,
      address:
        id === 1 ? lang.defaultAddressVoronezh : lang.defaultAddressMoscow,
    });
  };

  const handleChange = (key: string, value: string) => {
    setAddress({ ...order, [key]: value });
  };

  return (
    <>
      <OrderObnaitingDeliveryWrapper>
        <OrderObtainingTitle>
          {order.type === "selfPickup" ? lang.selfPickup : lang.delivery}
        </OrderObtainingTitle>
        <OrderObtainingText>{`${
          order.type === "delivery" &&
          order.address !== lang.defaultAddressVoronezh &&
          order.address !== lang.defaultAddressMoscow
            ? "999 ₽"
            : lang.free
        }`}</OrderObtainingText>
      </OrderObnaitingDeliveryWrapper>

      <NavigationList>
        <NavOrderButton
          isActive={order.type === "selfPickup"}
          title={lang.selfPickup}
          click={() => setAddress({ ...order, type: "selfPickup" })}
        />
        <NavOrderButton
          isActive={order.type === "delivery"}
          title={lang.delivery}
          click={() => setAddress({ ...order, type: "delivery" })}
        />
      </NavigationList>

      {order.type === "delivery" ? (
        <OrderDelivery order={order} handleChange={handleChange} />
      ) : (
        <OrderSelfPickup
          orderAddress={order.address}
          handleDeliveryClick={handleDeliveryClick}
        />
      )}
    </>
  );
};
