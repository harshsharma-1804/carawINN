import React from "react";
import ProductsCard from "./ProductsCard";
import RideData from "../Data/RideData.json";

function createProduct(product) {
  return (
    <ProductsCard
      key={product.id}
      id={product.id}
      image={product.image[0]}
      title={product.title}
      price={product.price}
      rating={product.rating}
      link={product.link}
    />
  );
}

export default function Products() {
    return (
        <div className="flex flex-wrap justify-center">
        {RideData.map(createProduct)}
        </div>
    );
}