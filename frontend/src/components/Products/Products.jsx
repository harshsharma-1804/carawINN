import React from "react";
import ProductsCard from "../Cards/ProductsCard";
import RideData from "../../Data/RideData.json";
import { useParams } from "react-router-dom";

function createProduct(product) {

  const {_title} = useParams();
  

  return (
    <ProductsCard
      key={product.id}
      id={product.id}
      path = {_title}
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