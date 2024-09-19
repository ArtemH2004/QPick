import { getLanguage } from "@/common/helpers/getLanguage";
import { HomeProductCard } from "@/pages/home/components/HomeProductCard";
import {
  HomeContentSection,
  HomeProductCardList,
} from "@/pages/home/components/styles";
import { useEffect } from "react";
import { scrollToTop } from "@/common/helpers/scrollToTop";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Empty } from "@/common/components/Empty";
import { BasketContentTitle } from "@/pages/basket/components/styles";

export const FavoritesContent = () => {
  const lang = getLanguage();
  const favorites = useSelector((state: RootState) => state.favorites.card);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div style={{ minHeight: "80vh" }}>
      <HomeContentSection>
        <BasketContentTitle>{lang.favorites}</BasketContentTitle>
        {favorites.length !== 0 ? (
          <HomeProductCardList>
            {favorites.map((item, index) => (
              <HomeProductCard key={index} card={item} />
            ))}
          </HomeProductCardList>
        ) : (
          <Empty icon="favorites" title={lang.favoritesEmpty} />
        )}
      </HomeContentSection>
    </div>
  );
};
