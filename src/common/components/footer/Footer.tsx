import { Logo } from "@/common/components/Logo";
import { Socials } from "@/common/components/footer/components/Socials";
import {
  FooterContent,
  FooterList,
  FooterWrapper,
} from "@/common/components/footer/styles";
import { FooterLink } from "@/common/styles/tags/a/FooterLink";
import { Link } from "react-router-dom";
import { Language } from "@/common/components/footer/components/Language";
import { getLanguage } from "@/common/helpers/getLanguage";

export const Footer = () => {
  const lang = getLanguage();
  return (
    <FooterWrapper>
      <Logo />

      {/* TODO add links */}
      <FooterContent>
        <FooterList>
          <FooterLink title={lang.favorites} />
          <Link to={"basket"}>
            <FooterLink title={lang.basket} />
          </Link>
          <FooterLink title={lang.contacts} link="tel:74959842513" />
        </FooterList>

        <FooterList>
          <FooterLink
            title={lang.service}
            link="https://www.neoflex.ru/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.pdf"
          />
          <li>
            <Language />
          </li>
        </FooterList>
      </FooterContent>

      <Socials />
    </FooterWrapper>
  );
};
