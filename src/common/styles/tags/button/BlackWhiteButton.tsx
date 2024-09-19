import styled from "styled-components";
import {
  buttonHoverActive,
  clampText,
  flexCenter,
  opacityHoverActive,
  resetButton,
} from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";

const Button = styled("button")<{ $color?: string; $isActive?: boolean }>`
  ${resetButton}
  ${flexCenter}
  width: 100%;
  height: 50px;
  color: ${(props) => (!!props.$color ? colors.whiteTotal : colors.blackTotal)};
  background-color: ${(props) =>
    !!props.$color
      ? props.$isActive === false
        ? colors.grayText
        : colors.blackTotal
      : "transparent"};
  pointer-events: ${(props) => props.$isActive === false && "none"};
  border: ${borders.defaultBorder};
  border-color:  ${(props) => props.$isActive === false && colors.grayText};
  border-radius: ${borders.mediumBorderRadius};

  ${opacityHoverActive}
  ${buttonHoverActive}
`;

const Span = styled("span")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
`;

interface BlackWhiteButtonProps {
  title: string;
  color?: string;
  click?: () => void;
  isActive?: boolean;
}

export const BlackWhiteButton = ({
  title,
  color,
  click,
  isActive,
}: BlackWhiteButtonProps) => {
  return (
    <Button onClick={click} $color={color} $isActive={isActive}>
      <Span>{title}</Span>
    </Button>
  );
};
