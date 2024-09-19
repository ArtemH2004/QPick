import styled from "styled-components";
import {
  absBottom,
  clampText,
  flexCenter,
  hoverActive,
  resetButton,
} from "@/common/styles/mixins";
import {
  borders,
  colors,
  fonts,
  transitions,
} from "@/common/styles/styleConstants";

export const NavigationList = styled("ul")`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NavigationItem = styled("li")`
  width: 100%;
  ${flexCenter}
`;

const NavigationButton = styled("button")<{ $isActive: boolean }>`
  ${resetButton}
  width: 100%;
  padding-block: 10px;
  border-top-left-radius: ${borders.mediumBorderRadius};
  border-top-right-radius: ${borders.mediumBorderRadius};
  ${flexCenter}
  column-gap: 10px;
  font-weight: ${fonts.weights.medium};
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)};
  color: ${(props) => (props.$isActive ? colors.blackTotal : colors.grayText)};
  position: relative;

  &::before,
  &::after {
    content: "";
    ${absBottom}
    z-index: 1;
  }

  &::before {
    width: 100%;
    height: 2px;
    background-color: ${(props) => !props.$isActive && colors.grayText};
  }

  &::after {
    width: ${(props) => (props.$isActive ? "100%" : "0%")};
    height: 3px;
    background-color: ${(props) => props.$isActive && colors.blackTotal};
    transition: ${transitions.fastTransition};
  }

  ${hoverActive}
`;

interface NavOrderButtonProps {
  isActive: boolean;
  click: () => void;
  title: string;
}

export const NavOrderButton = ({
  isActive,
  click,
  title,
}: NavOrderButtonProps) => {
  return (
    <NavigationItem>
      <NavigationButton $isActive={isActive} onClick={click}>
        <span>{title}</span>
      </NavigationButton>
    </NavigationItem>
  );
};
