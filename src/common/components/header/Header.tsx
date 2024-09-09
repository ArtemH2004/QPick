import { ButtonWithCount } from "@/common/styles/tags/button/ButtonWithCount";
import { Logo } from "@/common/components/Logo";
import { HeaderItem, HeaderList, HeaderWrapper } from "@/common/components/header/styles";
import { getLanguage } from "@/common/helpers/getLanguage";

export const Header = () => {
  const lang = getLanguage();
  return (
    <HeaderWrapper>
      <Logo />
      <HeaderList>
        <HeaderItem>
          <ButtonWithCount count={0} title={lang.favorites} />
        </HeaderItem>
        <HeaderItem>
          <ButtonWithCount count={2} title={lang.basket} link="basket" />
        </HeaderItem>
      </HeaderList>
    </HeaderWrapper>
  );
};
