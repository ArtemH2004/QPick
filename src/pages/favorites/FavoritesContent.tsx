import { getLanguage } from "@/common/helpers/getLanguage";
import { HomeProductCard } from "@/pages/home/components/HomeProductCard";
import {
  HomeContentSection,
  HomeContentTitle,
  HomeProductCardList,
} from "@/pages/home/components/styles";
import { useEffect } from "react";
import { scrollToTop } from "@/common/helpers/scrollToTop";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Empty } from "@/common/components/Empty";

export const FavoritesContent = () => {
  const lang = getLanguage();
  const favorites = useSelector((state: RootState) => state.favorites.card);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div style={{minHeight: '75vh'}}>
      {favorites.length !== 0 ? (
        <HomeContentSection>
          <HomeContentTitle>{lang.favorites}</HomeContentTitle>
          <HomeProductCardList>
            {favorites.map((item, index) => (
              <HomeProductCard key={index} card={item} />
            ))}
          </HomeProductCardList>
        </HomeContentSection>
      ) : (
        <Empty icon="favorites" title={lang.favoritesEmpty} />
      )}
    </div>
  );
};
