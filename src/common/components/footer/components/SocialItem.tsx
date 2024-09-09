import styled from "styled-components";
import { flexCenter, scaleHoverActive, square } from "@/common/styles/mixins";
import { borders } from "@/common/styles/styleConstants";

const VK = "public/images/soc1als/VK.svg";
const Tg = "public/images/soc1als/Telegram.svg";
const Wapp = "public/images/soc1als/Whatsapp.svg";

export const Item = styled("li")`
  ${square(30.1)}
  ${flexCenter}
`;

export const Link = styled("a")`
  border-radius: ${borders.circleBorderRadius};
  ${scaleHoverActive};
`;

export const Icon = styled("img")`
  ${square(30.1)};
  object-fit: contain;
  object-position: center;
`;

interface SocialItemProps {
  title: string;
  link?: string;
}

export const SocialItem = ({ title, link }: SocialItemProps) => {
  return (
    <Item>
      <Link href={link} title={title}>
        <Icon
          src={title === "VK" ? VK : title === "Telegram" ? Tg : Wapp}
          alt={title}
        />
      </Link>
    </Item>
  );
};
