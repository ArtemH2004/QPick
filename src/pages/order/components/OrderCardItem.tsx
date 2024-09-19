import { getLanguage } from "@/common/helpers/getLanguage";
import { clampText } from "@/common/styles/mixins";
import { colors, device, fonts } from "@/common/styles/styleConstants";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { OrderCard } from "@/store/reducers/order/types";
import styled from "styled-components";

const Wrapper = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${colors.whiteTotal};
  border-radius: inherit;

  width: 100%;
  height: 100%;
  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  @media ${device.mobile} {
    padding: 10px;
  }

  @media ${device.mobileL} {
    padding: 15px;
  }
`;

const SpanText = styled("span")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.semiBold};
  color: ${colors.grayText};
`;

const SpanNumber = styled(SpanText)`
  font-weight: ${fonts.weights.medium};
`;

const ContentWrapper = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 50;
`;

interface OrderCardItemProps {
  card: OrderCard;
  click: () => void;
}

export const OrderCardItem = ({ card, click }: OrderCardItemProps) => {
  const lang = getLanguage();
  return (
    <Wrapper>
      <ContentWrapper>
        <SpanText>{lang.yourCard}</SpanText>
        <ButtonWithIcon title={lang.edit} icon="edit" click={click} />
      </ContentWrapper>

      <SpanNumber>{card.number}</SpanNumber>

      <ContentWrapper>
        <SpanNumber>{card.date}</SpanNumber>
        <SpanNumber>***</SpanNumber>
      </ContentWrapper>
    </Wrapper>
  );
};
