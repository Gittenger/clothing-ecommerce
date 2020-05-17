import React from "react";
import { v1 as uuid } from "uuid";

import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const images = [1, 2, 3, 4, 5, 6, 7, 8];

const imageUrl =
  "https://images-na.ssl-images-amazon.com/images/I/51cQxIrozXL._AC_SX425_.jpg";

const Directory = () => (
  <DirectoryContainer>
    {images.map(() => (
      <DirectoryItem key={uuid()} imageUrl={imageUrl}></DirectoryItem>
    ))}
  </DirectoryContainer>
);

export default Directory;
