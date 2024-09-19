import { getLanguage } from "@/common/helpers/getLanguage";
import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton";
import {
  OrderObnaitingButtonWrapper,
  OrderObnaitingColumnWrapper,
  OrderObnaitingList,
  OrderObnaitingRowWrapper,
  OrderObtainingAddress,
  OrderObtainingItem,
  OrderObtainingText,
  OrderObtainingTime,
  OrderObtainingTitle,
} from "@/pages/order/components/obtaining/styles";

interface OrderSelfPickupProps {
  deliveryPoint: number;
  handleDeliveryClick: (id: number) => void;
}

export const OrderSelfPickup = ({deliveryPoint, handleDeliveryClick}: OrderSelfPickupProps) => {
  const lang = getLanguage();
  return (
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

          <OrderObtainingTime dateTime="09:00/21:00">{`${lang.everyday}: 9.00 - 21.00`}</OrderObtainingTime>
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
            <OrderObtainingTitle>{lang.defaultMallMoscow}</OrderObtainingTitle>
            <OrderObtainingAddress>
              {lang.defaultAddressMoscow}
            </OrderObtainingAddress>
          </OrderObnaitingColumnWrapper>

          <OrderObtainingTime dateTime="09:00/21:00">{`${lang.everyday}: 9.00 - 21.00`}</OrderObtainingTime>
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
  );
};
