import styled from "styled-components";
import {
  absCenter,
  absTopRight,
  flexCenter,
  hoverActive,
  square,
} from "@/common/styles/mixins";
import { Link } from "react-router-dom";
import {
  borders,
  colors,
  fonts,
  transitions,
} from "@/common/styles/styleConstants";
import { scrollToTop } from "@/common/helpers/scrollToTop";

const basket = "public/images/icons/basket.svg";
const favorites = "public/images/icons/liked.svg";

const NavLink = styled(Link)`
  ${square(60)}
  border-radius: ${borders.circleBorderRadius};
`;

const LinkWrapper = styled("div")`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: inherit;
  transition: ${transitions.fastTransition};
  ${hoverActive}
`;

const Image = styled("img")`
  ${absCenter}
  z-index: 1;
  ${square(25)}
`;

export const CountWrapper = styled("div")`
  ${flexCenter}
  ${absTopRight}
  z-index: 2;
  ${square(18)}
  background-color: ${colors.orange};
  border-radius: inherit;
`;

const Count = styled("span")`
  color: ${colors.whiteTotal};
  font-size: ${fonts.sizes.small};
  font-weight: ${fonts.weights.medium};
  text-align: center;
  line-height: 1.1;
`;

interface ButtonWithCountProps {
  count: number;
  title: string;
  icon: string;
  link?: string;
}

export const ButtonWithCount = ({
  count,
  title,
  icon,
  link,
}: ButtonWithCountProps) => {
  return (
    <NavLink to={link || "/"} onClick={scrollToTop} title={title}>
      <LinkWrapper>
        <Image src={icon === "basket" ? basket : favorites} alt={title} />
        {count !== 0 && (
          <CountWrapper>
            <Count>{count}</Count>
          </CountWrapper>
        )}
      </LinkWrapper>
    </NavLink>
  );
};
