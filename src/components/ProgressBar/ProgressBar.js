/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: `
  --height: 8px;
  --padding: 0;
  --radius: 4px;
  `,
  medium: `
  --height: 12px;
  --padding: 0;
  --radius: 4px;
  `,
  large: `
  --height: 24px;
  --padding: 4px;
  --radius: 8px;
  `,
};

const ProgressWrapper = styled.div`
  --mainColor: ${COLORS.primary};
  ${(props) => SIZES[props.size]}
  padding: var(--padding);
  background: rgba(128, 128, 128, 0.15);
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  width: 100%;
  border-radius: var(--radius);
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: var(--radius);
`;

const Bar = styled.div`
  background: var(--mainColor);
  border-radius: var(--radius) 0 0 var(--radius);
  height: var(--height);
  width: ${(props) => props.value + "%"};
`;

const ProgressBar = ({ value, size }) => {
  return (
    <ProgressWrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      size={size}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar value={value} />
      </BarWrapper>
    </ProgressWrapper>
  );
};

export default ProgressBar;
