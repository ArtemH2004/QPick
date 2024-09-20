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
import { useEffect } from "react";
import { scrollToTop } from "@/common/helpers/scrollToTop";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { totalPrice } from "@/common/helpers/totalPrice";
import { Empty } from "@/common/components/Empty";
import { changeTitle } from "@/common/helpers/changeTitle";

export const BasketContent = () => {
  const lang = getLanguage();
  const price = totalPrice();

  const basket = useSelector((state: RootState) => state.basket.card);

  useEffect(() => {
    scrollToTop();
    changeTitle('basket');
  }, []);

  return (
    <BasketInnerWrapper>
      <BasketContentTitle>{lang.basket}</BasketContentTitle>

      <BasketContentWrapper>
        <BasketContentSection>
          {basket.length !== 0 ? (
            <BasketProductCardList>
              {basket.map((item, index) => (
                <BasketProductCard key={index} index={index} card={item} />
              ))}
            </BasketProductCardList>
          ) : (
            <Empty icon="basket" title={lang.basketEmpty} />
          )}
        </BasketContentSection>

        <BasketTotal title={lang.total} value={price} link="/order" isActive={price !== 0 ? false : true} />
      </BasketContentWrapper>
    </BasketInnerWrapper>
  );
};
