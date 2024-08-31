import React, { useEffect, useState } from "react";
import style from "./RelatedProducts.module.css";
import { Link } from "react-router-dom";

export default function RelatedProducts({ product }) {
  const [first, setFirst] = useState(0);

  useEffect(() => {}, []);

  return (
    <>
      <div>
        <div className="group relative shadow-lg p-2 rounded-lg">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src={product.imageCover}
              alt={product.title}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <hr className="my-2" />
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <div>
                  <Link
                    to={`/productdetails/${product.id}`}
                    className="line-clamp-1"
                  >
                    {product.title}
                  </Link>
                </div>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.brand.name}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">
              ${product.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
