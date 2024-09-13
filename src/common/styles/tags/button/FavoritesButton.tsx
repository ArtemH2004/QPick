import styled from "styled-components";
import {
  flexCenter,
  hoverActive,
  resetButton,
  square,
} from "@/common/styles/mixins";
import { borders } from "@/common/styles/styleConstants";
import { VisuallyHidden } from "@/common/styles/GlobalStyles";

const favorites = "public/images/icons/liked.svg";
const favoritesActive = "public/images/icons/likedActive.svg";

const Button = styled("button")`
  ${flexCenter};
  ${resetButton};
  ${square(50)};
  border-radius: ${borders.circleBorderRadius};

  ${hoverActive}
`;

const Icon = styled("img")`
  ${square(25)}
  object-fit: contain;
  object-position: center;
`;

interface FavoritesButtonProps {
  title: string;
  isActive?: boolean;
  click?: () => void;
}

export const FavoritesButton = ({
  title,
  isActive,
  click,
}: FavoritesButtonProps) => {
  return (
    <Button title={title} onClick={click}>
      <VisuallyHidden>{title}</VisuallyHidden>
      <Icon src={isActive ? favoritesActive : favorites} alt={title} />
    </Button>
  );
};
