import React from "react";

import { ShopPageContainer } from "./shop.styles";

import collections from "./shop.data";

const ShopPage = () => (
  <ShopPageContainer>
    {collections.map((collection) => (
      <div className="shop-row" key={collection.id}>
        {collection.items.map((item) => (
          <div className="shop-item" key={item.name}>
            <img src={item.imageUrl} alt="" />
          </div>
        ))}
      </div>
    ))}
  </ShopPageContainer>
);

export default ShopPage;
