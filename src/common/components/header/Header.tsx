import { ButtonWithCount } from "@/common/styles/tags/button/ButtonWithCount";
import { Logo } from "@/common/components/Logo";
import { HeaderItem, HeaderList, HeaderWrapper } from "@/common/components/header/styles";
import { getLanguage } from "@/common/helpers/getLanguage";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const Header = () => {
  const lang = getLanguage();
  const favoritesCount = useSelector((state: RootState) => state.favorites.card.length);
  const basketCount = useSelector((state: RootState) => state.basket.card.length);

  return (
    <HeaderWrapper>
      <Logo />
      <HeaderList>
        <HeaderItem>
          <ButtonWithCount count={favoritesCount} title={lang.favorites} icon="favorites" link="favorites" />
        </HeaderItem>
        <HeaderItem>
          <ButtonWithCount count={basketCount} title={lang.basket} icon="basket" link="basket" />
        </HeaderItem>
      </HeaderList>
    </HeaderWrapper>
  );
};
