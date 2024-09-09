import styled from "styled-components";
import { flexCenter } from "@/common/styles/mixins";
import { SocialItem } from "@/common/components/footer/components/SocialItem";

const SocialList = styled("ul")`
  ${flexCenter}
  column-gap: 17.9px;
`;

export const Socials = () => {
  return <SocialList>
    <SocialItem title="VK" link="https://vk.com/neoflex_ru" />
    <SocialItem title="Telegram" link="https://t.me/neoflexcareers" />
    <SocialItem title="WhatsApp" />
  </SocialList>;
};
