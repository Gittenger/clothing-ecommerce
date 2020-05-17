import { css } from "styled-components";

export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// MEDIA QUERIES
const sizes = {
  mobile: "375px",
  tablet: "690px",
  laptop: "992px",
  desktop: "1300px",
};

const mqString = (size) => `screen and (max-width: ${size})`;
const { mobile, tablet, laptop, desktop } = sizes;

export const device = {
  mobile: mqString(mobile),
  tablet: mqString(tablet),
  laptop: mqString(laptop),
  desktop: mqString(desktop),
};
