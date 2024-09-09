import { ButtonWithCount } from "../../styles/tags/button/ButtonWithCount";
import { Logo } from "../Logo";
import { HeaderItem, HeaderList, HeaderWrapper } from "./styles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <HeaderList>
        <HeaderItem>
          <ButtonWithCount count={0} title="Нравится" />
        </HeaderItem>
        <HeaderItem>
          <ButtonWithCount count={2} title="Корзина" link="basket" />
        </HeaderItem>
      </HeaderList>
    </HeaderWrapper>
  );
};
