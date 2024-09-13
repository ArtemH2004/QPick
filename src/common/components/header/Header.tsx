import { ButtonWithCount } from "@/common/styles/tags/button/ButtonWithCount";
import { Logo } from "@/common/components/Logo";
import { HeaderItem, HeaderList, HeaderWrapper } from "@/common/components/header/styles";
import { getLanguage } from "@/common/helpers/getLanguage";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const Header = () => {
  const lang = getLanguage();
  const basket = useSelector((state: RootState) => state.basket.card)
  
  return (
    <HeaderWrapper>
      <Logo />
      <HeaderList>
        <HeaderItem>
          <ButtonWithCount count={0} title={lang.favorites} icon="favorites" />
        </HeaderItem>
        <HeaderItem>
          <ButtonWithCount count={basket.length} title={lang.basket} icon="basket" link="basket" />
        </HeaderItem>
      </HeaderList>
    </HeaderWrapper>
  );
};
