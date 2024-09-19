import styled from "styled-components";
import { flexCenter, resetButton } from "@/common/styles/mixins";
import { colors, borders } from "@/common/styles/styleConstants";
import { VisuallyHidden } from "@/common/styles/GlobalStyles";

const Button = styled("button")<{ $card: string; $isActive?: boolean }>`
  ${resetButton}
  ${flexCenter}
  width: 100%;
  aspect-ratio: 2;
  border: ${borders.grayBorder};
  border-color: ${(props) => props.$isActive === true && colors.orange};
  border-radius: ${borders.mediumBorderRadius};
  background-color: transparent;
  position: relative;
`;

const Image = styled("img")`
  width: 75%;
  height: 75%;
  object-fit: contain;
  object-position: center;
`;

interface PaymentCardButtonProps {
  card: "sbp" | "addCard";
  click?: () => void;
  isActive?: boolean;
  children?: React.ReactNode;
}

export const PaymentCardButton = ({
  card,
  click,
  isActive,
  children,
}: PaymentCardButtonProps) => {
  return (
    <li>
      <Button $card={card} title={card} onClick={click} $isActive={isActive}>
        <VisuallyHidden>{card}</VisuallyHidden>
        <Image src={`public/images/bank/${card}.svg`} alt={card} />
        {children}
      </Button>
    </li>
  );
};
