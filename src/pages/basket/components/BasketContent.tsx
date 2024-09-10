import { getLanguage } from "@/common/helpers/getLanguage";
import {
  BasketContentSection,
  BasketContentTitle,
  BasketContentWrapper,
  BasketInnerWrapper,
  BasketProductCardList,
} from "@/pages/basket/components/styles";
import { BasketTotal } from "@/pages/basket/components/BasketTotal";
import { BasketProductCard } from "@/pages/basket/components/BasketProductCard";
import { headphones } from "@/data/headphones";

export const BasketContent = () => {
  const lang = getLanguage();
  return (
    <BasketInnerWrapper>
      <BasketContentTitle>{lang.basket}</BasketContentTitle>

      <BasketContentWrapper>
        <BasketContentSection>
          <BasketProductCardList>
            <BasketProductCard card={headphones[0]} />
          </BasketProductCardList>
        </BasketContentSection>

        <BasketTotal title={lang.total} value={2957} />
      </BasketContentWrapper>
    </BasketInnerWrapper>
  );
};
