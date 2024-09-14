import { HomeProductCardPrice } from "@/pages/home/components/styles";
import { colors } from "@/common/styles/styleConstants";
import styled from "styled-components";
import { flexCenter } from "@/common/styles/mixins";
import { VisuallyHidden } from "../styles/GlobalStyles";
import { getLanguage } from "../helpers/getLanguage";

const star = "public/images/icons/star.svg";

export const StarWrapper = styled("div")`
  ${flexCenter}
  column-gap: 10px;
  user-select: none;
`;

export const StarIcon = styled("img")`
  width: 23px;
  height: 22px;
  object-fit: contain;
  object-position: center;
`;

export const StarCount = styled(HomeProductCardPrice)`
  color: ${colors.grayText};
`;

interface StarProps {
    raiting: number;
}

export const Star = ({raiting}: StarProps) => {
  const lang = getLanguage();

  return (
    <StarWrapper title={lang.raiting}>
      <VisuallyHidden>{lang.raiting}</VisuallyHidden>
      <StarIcon src={star} alt={lang.raiting} />
      <StarCount>{raiting}</StarCount>
    </StarWrapper>
  );
};
