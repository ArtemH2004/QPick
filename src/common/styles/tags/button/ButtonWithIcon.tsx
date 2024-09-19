import styled from "styled-components";
import {
  flexCenter,
  hoverActive,
  resetButton,
  square,
} from "@/common/styles/mixins";
import { borders, colors } from "@/common/styles/styleConstants";
import { VisuallyHidden } from "@/common/styles/GlobalStyles";

const Button = styled("button")<{ $color?: string; $isActive?: boolean }>`
  ${flexCenter};
  ${resetButton};
  ${square(30)};
  border-radius: ${borders.circleBorderRadius};
  background-color: ${(props) =>
    props.$color === "orange" ? colors.orangeAccent : "transparent"};
  background-color: ${(props) => props.$isActive && colors.blackShadow};
  z-index: 2;

  ${hoverActive}
`;

const Icon = styled("img")`
  ${square(14)}
  object-fit: contain;
  object-position: center;
`;

interface ButtonWithIconProps {
  title: string;
  icon: string;
  color?: string;
  isActive?: boolean;
  click?: () => void;
}

export const ButtonWithIcon = ({
  title,
  icon,
  color,
  isActive,
  click,
}: ButtonWithIconProps) => {
  return (
    <Button $color={color} $isActive={isActive} title={title} onClick={click}>
      <VisuallyHidden>{title}</VisuallyHidden>
      <Icon src={`public/images/icons/${icon}.svg`} alt={title} />
    </Button>
  );
};
