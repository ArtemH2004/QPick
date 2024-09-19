import styled from "styled-components";
import {
  borders,
  colors,
  fonts,
  transitions,
} from "@/common/styles/styleConstants";
import { clampText } from "@/common/styles/mixins";
import { memo } from "react";

const Wrapper = styled("div")`
  position: relative;
`;

const Label = styled("label")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.grayText};
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 20px;
  translate: 0 -50%;
  z-index: 1;
  transition: ${transitions.fastTransition};
`;

const Input = styled("input")`
  width: 100%;
  height: 60px;
  padding: 15px 20px 0px;
  display: block;
  border: ${borders.grayBorder};
  border-radius: ${borders.mediumBorderRadius};
  color: ${colors.blackTotal};
  background-color: transparent;
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}

  &:hover,
  &:active {
    background-color: ${colors.whiteAccent};
  }

  &::placeholder {
    color: transparent;
  }

  &:focus {
    border-color: ${colors.blackTotal};
    background-color: ${colors.whiteAccent};
    outline: none;

    &::placeholder {
      color: ${colors.grayAccent};
    }
  }

  &:not(:placeholder-shown) + ${Label}, &:focus + ${Label} {
    ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
    top: 25%;
    translate: 0 -25%;
  }
`;

interface TextInputProps {
  id: string;
  title: string;
  placeholder?: string;
  value?: string;
  type: "text" | string;
  required: false | true;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = memo(
  ({
    id,
    title,
    placeholder,
    value,
    type,
    required,
    onChange,
  }: TextInputProps) => {
    return (
      <Wrapper>
        <Input
          id={id}
          name={title}
          type={type}
          required={required}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        <Label htmlFor={id}>{`${title}${required ? "*" : ""}`}</Label>
      </Wrapper>
    );
  }
);
