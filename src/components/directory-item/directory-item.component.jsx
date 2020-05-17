import React from "react";

import { DirectoryItemContainer } from "./directory-item.styles";

const DirectoryItem = ({ imageUrl }) => (
  <DirectoryItemContainer imageUrl={imageUrl}>
    <h4>Test</h4>
  </DirectoryItemContainer>
);

export default DirectoryItem;
