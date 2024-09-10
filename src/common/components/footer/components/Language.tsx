import { getLanguage } from "@/common/helpers/getLanguage";
import { flexCenter, square } from "@/common/styles/mixins";
import { LanguageButton } from "@/common/styles/tags/button/LanguageButton";
import styled from "styled-components";

const language = "public/images/icons/language.svg";

const Wrapper = styled("div")`
  ${flexCenter}
  column-gap: 17px;
`;

const Icon = styled("img")`
  ${square(20)}
`;

export const Language = () => {
  const lang = getLanguage();

  return (
    <Wrapper>
      <Icon src={language} alt={lang.language} />
      <LanguageButton title="Рус" />
      <LanguageButton title="Eng" />
    </Wrapper>
  );
};
