import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Component/ProductDisplay/ProductDisplay";
import Bredcrum from "../Component/Bredcrums/Bredcrum";
import Discription from "../Component/Description/Discription";
import RelatedProducts from "../Component/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { id } = useParams();
  const product = all_product.find((e) => e.id === parseInt(id));
  return (
    <div>
      <Bredcrum product={product} />
      <ProductDisplay product={product} />
      <Discription />
      <RelatedProducts />
    </div>
  );
};

export default Product;
