import { getLanguage } from "@/common/helpers/getLanguage";
import {
  NavigationList,
  NavOrderButton,
} from "@/common/styles/tags/button/NavOrderButton";
import { useState } from "react";
import {
  OrderForm,
  OrderObnaitingButtonWrapper,
  OrderObnaitingColumnWrapper,
  OrderObnaitingDeliveryWrapper,
  OrderObnaitingList,
  OrderObnaitingRowWrapper,
  OrderObtainingAddress,
  OrderObtainingItem,
  OrderObtainingText,
  OrderObtainingTime,
  OrderObtainingTitle,
  OrderTextInputWrapper,
} from "@/pages/order/components/styles";
import { TextInput } from "@/common/styles/tags/input/TextInput";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useActions } from "@/store/actions";
import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton";

export const OrderObtaining = () => {
  const lang = getLanguage();
  const { setAddress } = useActions();
  const [deliveryPoint, setDeliveryPoint] = useState(0);
  const order = useSelector((state: RootState) => state.order.address);

  const handleDeliveryClick = (i: number) => {
    setDeliveryPoint(i)
    setAddress({...order, address: i.toString() });
  }

  const handleChange = (key: string, value: string) => {
    setAddress({ ...order, [key]: value });
  };

  return (
    <>
      <OrderObnaitingDeliveryWrapper>
        <OrderObtainingTitle>
          {order.type === "selfPickup" ? lang.selfPickup : lang.delivery}
        </OrderObtainingTitle>
        <OrderObtainingText>{lang.free}`</OrderObtainingText>
      </OrderObnaitingDeliveryWrapper>

      <NavigationList>
        <NavOrderButton
          isActive={order.type === "selfPickup"}
          title={lang.selfPickup}
          click={() => setAddress({...order, type: "selfPickup"})}
        />
        <NavOrderButton
          isActive={order.type === "delivery"}
          title={lang.delivery}
          click={() => setAddress({...order, type: "delivery"})}
        />
      </NavigationList>

      {order.type === "delivery" ? (
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
      ) : (
        <OrderObnaitingList>
          <OrderObtainingItem>
            <OrderObnaitingRowWrapper $alignStart={true}>
              <OrderObnaitingColumnWrapper>
                <OrderObtainingTitle>
                  {lang.defaultMallVoronezh}
                </OrderObtainingTitle>
                <OrderObtainingAddress>
                  {lang.defaultAddressVoronezh}
                </OrderObtainingAddress>
              </OrderObnaitingColumnWrapper>

              <OrderObtainingTime>{`${lang.everyday}: 9.00 - 21.00`}</OrderObtainingTime>
            </OrderObnaitingRowWrapper>

            <OrderObnaitingRowWrapper $alignStart={false}>
              <OrderObtainingText>{`${lang.shelfLife} — 7 ${lang.days}`}</OrderObtainingText>
              <OrderObnaitingButtonWrapper>
                <BlackWhiteButton
                  title={deliveryPoint === 1 ? lang.chosen : lang.choose}
                  color="black"
                  click={() => handleDeliveryClick(1)}
                  isActive={deliveryPoint === 1 ? false : true}
                />
              </OrderObnaitingButtonWrapper>
            </OrderObnaitingRowWrapper>
          </OrderObtainingItem>

          <OrderObtainingItem>
            <OrderObnaitingRowWrapper $alignStart={true}>
              <OrderObnaitingColumnWrapper>
                <OrderObtainingTitle>
                  {lang.defaultMallMoscow}
                </OrderObtainingTitle>
                <OrderObtainingAddress>
                  {lang.defaultAddressMoscow}
                </OrderObtainingAddress>
              </OrderObnaitingColumnWrapper>

              <OrderObtainingTime>{`${lang.everyday}: 9.00 - 21.00`}</OrderObtainingTime>
            </OrderObnaitingRowWrapper>

            <OrderObnaitingRowWrapper $alignStart={false}>
              <OrderObtainingText>{`${lang.shelfLife} — 7 ${lang.days}`}</OrderObtainingText>
              <OrderObnaitingButtonWrapper>
                <BlackWhiteButton
                  title={deliveryPoint === 2 ? lang.chosen : lang.choose}
                  color="black"
                  click={() => handleDeliveryClick(2)}
                  isActive={deliveryPoint === 2 ? false : true}
                />
              </OrderObnaitingButtonWrapper>
            </OrderObnaitingRowWrapper>
          </OrderObtainingItem>
        </OrderObnaitingList>
      )}
    </>
  );
};
