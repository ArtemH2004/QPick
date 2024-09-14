import {
  clampText,
  clampWidth,
  flexCenter,
  scrollBar,
} from "@/common/styles/mixins";
import {
  borders,
  colors,
  device,
  fonts,
  shadows,
  transitions,
} from "@/common/styles/styleConstants";
import styled from "styled-components";

//Modal
export const ModalSection = styled("section")`
  ${flexCenter}
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 100;
  background-color: ${colors.blackShadowActive};
`;

export const ModalContent = styled("div")<{ $visible: boolean }>`
  position: relative;
  background: ${colors.grayBackground};
  border-radius: ${borders.defaultBorderRadius};
  box-shadow: ${shadows.defaultShadow};
  height: fit-content;
  width: fit-content;
  transition: ${transitions.lowTransition};
  transform: ${(props) => (props.$visible ? "scale(1)" : "scale(0.5)")};
`;

export const ModalContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 35px;
  overflow-x: hidden;

  @media ${device.desktop} {
    row-gap: 30px;
  }

  @media ${device.mobile} {
    row-gap: 25px;
  }

  @media ${device.mobileM} {
    row-gap: 15px;
  }
`;

export const ModalWrapper = styled("div")`
  width: 70vw;
  height: 100%;
  max-height: 90vh;
  padding: 30px;

  @media ${device.tablet} {
    padding: 25px;
  }

  @media ${device.mobile} {
    width: 90vw;
    padding: 20px;
  }

  @media ${device.mobileL} {
    padding: 15px;
  }

  @media ${device.mobileM} {
    width: 95vw;
    padding: 10px;
  }
`;

export const ModalHeader = styled("header")`
  width: 100%;
  text-align: center;
  position: relative;
`;

export const ModalTitle = styled("h2")`
  text-align: center;
  ${clampText(fonts.sizes.titleMobile, fonts.sizes.titleModal)};
  font-weight: ${fonts.weights.semiBold};
  position: relative;
`;

export const ModalCloseIconWrapper = styled("div")`
  position: absolute;
  top: 50%;
  right: 0;
  translate: 0 -50%;
  z-index: 1;
`;

export const ModalScrollContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-inline: 40px;
  max-height: 70vh;
  overflow-y: auto;

  @media ${device.desktop} {
    gap: 20px;
    padding-inline: 30px;
  }

  @media ${device.tablet} {
    gap: 15px;
    padding-inline: 20px;
  }

  ${scrollBar}
`;

//ModalMore
export const ModalMoreWrapper = styled("div")`
  ${flexCenter}
  width: 100%;
  column-gap: 50px;

  @media ${device.tablet} {
    column-gap: 20px;
  }

  @media ${device.mobile} {
    flex-direction: column;
    row-gap: 20px;
  }
`;

export const ModalMoreImageWrapper = styled("div")`
  ${flexCenter}
  ${clampWidth(400, 500)}
  height: 237px;
  position: relative;

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const ModalMoreImage = styled("img")`
  width: 219px;
  height: 237px;
  object-fit: contain;
  object-position: center;
`;

export const ModalMoreFavoritesWrapper = styled("div")`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

export const ModalMoreContentWrapper = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  text-align: left;
`;

export const ModalMoreInnerWrapper = styled("div")`
  width: 100%;
  min-height: 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalMoreTitle = styled("h3")`
  text-align: left;
  ${clampText(fonts.sizes.subtitleMobile, fonts.sizes.subtitle)};
  font-weight: ${fonts.weights.semiBold};
  color: ${colors.blue};
`;

export const ModalMoreDescription = styled("p")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
`;

export const ModalMorePriceWrapper = styled("div")`
  display: flex;
  align-items: end;
  column-gap: 5px;

  @media ${device.mobileL} {
    align-items: start;
    flex-direction: column;
    row-gap: 5px;
  }
`;

export const ModalMoreCurrentPrice = styled("span")`
  white-space: nowrap;
  line-height: 1;
  ${clampText(fonts.sizes.titleMobile, fonts.sizes.title)}
  font-weight: ${fonts.weights.semiBold};
  color: ${colors.orange};
`;

export const ModalMoreOldPrice = styled("span")`
  white-space: nowrap;
  line-height: 1;
  ${clampText(fonts.sizes.subtitleMobile, fonts.sizes.subtitle)}
  font-weight: ${fonts.weights.medium};
  text-decoration: line-through;
  color: ${colors.orangeAccent};
`;
