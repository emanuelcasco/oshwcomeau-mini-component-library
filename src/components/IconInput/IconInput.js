import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    font: 14,
    border: 1,
  },
  large: {
    font: 18,
    border: 2,
  },
};

const Wrapper = styled.div`
  --font-size: ${(props) => SIZES[props.size].font + "px"};
  --border-thickness: ${(props) => SIZES[props.size].border + "px"};
  color: ${COLORS.gray700};
  font-size: var(--font-size);
  height: 1.14em;
  line-height: 1.14em;
  position: relative;
  width: ${(props) => props.width + "px"};
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  color: inherit;
  padding: 0.07em;
  position: absolute;
  left: 0;
  top: 0;
`;

const Input = styled.input`
  border: none;
  border-bottom: var(--border-thickness) solid black;
  color: inherit;
  font-size: inherit;
  outline-offset: 5px;
  padding-left: 1.5em;
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper size={size} width={width}>
      <VisuallyHidden>
        <label>{label}</label>
      </VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} strokeWidth={2} size={SIZES[size].font} />
      </IconWrapper>
      <Input placeholder={placeholder} />
    </Wrapper>
  );
};

export default IconInput;
