import styled from "styled-components";
import { clampText, opacityHoverActive, resetButton } from "@/common/styles/mixins";
import { colors, fonts } from "@/common/styles/styleConstants";

const Button = styled("button")<{ $isActive: boolean }>`
  ${resetButton}
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  font-weight: ${fonts.weights.bold};
  color: ${(props) => (props.$isActive ? colors.orange : colors.blackAccent)};
  ${opacityHoverActive}
`;

interface LanguageButtonProps {
  title: string;
}

export const LanguageButton = ({ title }: LanguageButtonProps) => {
  const language = sessionStorage.getItem("language") || 'Рус';

  const handleChangeLanguage = (language: string) => {
    sessionStorage.setItem("language", language);
    document.location.reload();
  };
  return (
    <Button
      $isActive={language === title}
      onClick={() => handleChangeLanguage(title === "Рус" ? "Рус" : "Eng")}
    >
      {title}
    </Button>
  );
};
