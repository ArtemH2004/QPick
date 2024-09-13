import { ButtonWithCount } from "@/common/styles/tags/button/ButtonWithCount";
import { Logo } from "@/common/components/Logo";
import { HeaderItem, HeaderList, HeaderWrapper } from "@/common/components/header/styles";
import { getLanguage } from "@/common/helpers/getLanguage";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const Header = () => {
  const lang = getLanguage();
  const card = useSelector((state: RootState) => state)
  
  return (
    <HeaderWrapper>
      <Logo />
      <HeaderList>
        <HeaderItem>
          <ButtonWithCount count={card.favorites.card.length} title={lang.favorites} icon="favorites" link="favorites" />
        </HeaderItem>
        <HeaderItem>
          <ButtonWithCount count={card.basket.card.length} title={lang.basket} icon="basket" link="basket" />
        </HeaderItem>
      </HeaderList>
    </HeaderWrapper>
  );
};
