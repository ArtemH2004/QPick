import { css } from "styled-components";
import {
  borders,
  colors,
  screen,
  shadows
} from "./styleConstants";

//HELPER to use mixin with props in styled-components write: ${props => mixin(props.yourProps)}

export const clampText = (min: number, max: number) => css`
  font-size: clamp(
    ${min}px,
    ${(max / screen.fullScreenWidth) * 100}vw,
    ${max}px
  );
`;

export const clampWidth = (min: number, max: number) => css`
  width: clamp(${min}px, ${(max / screen.fullScreenWidth) * 100}vw, ${max}px);
`;

export const clampHeight = (min: number, max: number) => css`
  height: clamp(${min}px, ${(max / 1024) * 100}vw, ${max}px);
`;

export const resetLink = css`
  color: inherit;
  text-decoration: none;
`;

export const resetButton = css`
  background-color: transparent;
  border: none;
  padding: 0;
`;

export const absCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
`;

export const absVertically = css`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

export const absHorizontally = css`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const square = (size: number) => css`
  width: ${size}px;
  aspect-ratio: 1;
`;

export const hover = css`
  @media (hover: hover) {
    &:hover {
      @content;
    }

    &:active {
      @content;
    }
  }

  @media (hover: none) {
    &:active {
      @content;
    }
  }
`;

export const hoverActive = css`
  @media (hover: hover) {
    &:hover {
      background-color: ${colors.grayButton};
    }

    &:active {
      background-color: ${colors.grayBorder};
    }
  }

  @media (hover: none) {
    &:active {
      background-color: ${colors.grayBorder};
    }
  }
`;

export const buttonHoverActive = css`
  @media (hover: hover) {
    &:hover,
    &:active {
      transform: scale(0.95);
    }
  }

  @media (hover: none) {
    &:active {
      transform: scale(0.95);
    }
  }
`;

export const opacityHoverActive = css`
  @media (hover: hover) {
    &:hover {
      opacity: 0.7;
    }

    &:active {
      opacity: 0.5;
    }
  }

  @media (hover: none) {
    &:active {
      opacity: 0.5;
    }
  }
`;

export const inputHoverActive = css`
  &:hover,
  &:active {
    background-color: ${colors.whiteBackground};
  }
`;

export const styledWrapper = css`
  background-color: ${colors.whiteTotal};
  border: ${borders.defaultBorder};
  border-radius: ${borders.defaultBorderRadius};
  box-shadow: ${shadows.defaultShadow};
`;

export const loadingGradient = css`
  background: ${colors.loadingGradient};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: ${colors.loadingGradient};
    transform: rotate(180deg);
    border-radius: inherit;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: loading;
    animation-timing-function: ease;
  }

  @keyframes loading {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const scrollBar = css`
  ::-webkit-scrollbar-track {
    border-radius: ${borders.smallBorderRadius};
    background-color: ${colors.grayAccent};
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: ${colors.grayAccent};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: ${borders.smallBorderRadius};
    background-color: ${colors.grayScrollBar};

    &:hover {
      background-color: ${colors.grayScrollBarHover};
    }

    &:active {
      background-color: ${colors.grayScrollBarActive};
    }
  }
`;
