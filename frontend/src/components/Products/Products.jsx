import React from "react";
import ProductsCard from "./ProductsCard";
import ProductsData from "./Products.json";

function createProduct(product) {
  return (
    <ProductsCard
      key={product.id}
      id={product.id}
      image={product.image}
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
        {ProductsData.map(createProduct)}
        </div>
    );
}