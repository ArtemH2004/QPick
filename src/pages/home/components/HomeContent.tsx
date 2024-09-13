import { getLanguage } from "@/common/helpers/getLanguage";
import { headphones } from "@/store/data/headphones";
import { HomeProductCard } from "@/pages/home/components/HomeProductCard";
import {
  HomeContentSection,
  HomeContentTitle,
  HomeProductCardList,
} from "@/pages/home/components/styles";
import { useEffect } from "react";
import { scrollToTop } from "@/common/helpers/scrollToTop";

export const HomeContent = () => {
  const lang = getLanguage();

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      {!!headphones && (
        <HomeContentSection>
          <HomeContentTitle>{lang.headphones}</HomeContentTitle>
          <HomeProductCardList>
            {headphones.map(
              (item, index) =>
                item.type === "wired" && (
                  <HomeProductCard key={index} card={item} />
                )
            )}
          </HomeProductCardList>
        </HomeContentSection>
      )}

      {!!headphones && (
        <HomeContentSection>
          <HomeContentTitle>{lang.wirelessHeadphones}</HomeContentTitle>

          <HomeProductCardList>
            {headphones.map(
              (item, index) =>
                item.type === "wireless" && (
                  <HomeProductCard key={index} card={item} />
                )
            )}
          </HomeProductCardList>
        </HomeContentSection>
      )}
    </>
  );
};
