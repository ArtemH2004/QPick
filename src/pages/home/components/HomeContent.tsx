import { getLanguage } from "@/common/helpers/getLanguage";
import { headphones, wirelessHeadphones } from "@/data/headphones";
import { HomeProductCard } from "@/pages/home/components/HomeProductCard";
import {
  HomeContentSection,
  HomeContentTitle,
  HomeProductCardList,
} from "@/pages/home/components/styles";

export const HomeContent = () => {
  const lang = getLanguage();

  return (
    <>
      {!!headphones && (
        <HomeContentSection>
          <HomeContentTitle>{lang.headphones}</HomeContentTitle>
          <HomeProductCardList>
            {headphones.map((item, index) => (
              <HomeProductCard key={index} card={item} />
            ))}
          </HomeProductCardList>
        </HomeContentSection>
      )}

      {!!wirelessHeadphones && (
        <HomeContentSection>
          <HomeContentTitle>{lang.wirelessHeadphones}</HomeContentTitle>

          <HomeProductCardList>
            {wirelessHeadphones.map((item, index) => (
              <HomeProductCard key={index} card={item} />
            ))}
          </HomeProductCardList>
        </HomeContentSection>
      )}
    </>
  );
};
