import React, { useState, useEffect } from "react";
import { getProductsById } from "../asyncProducts";
import { useParams } from "react-router-dom";

const ItemDetailsContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductsById(itemId)
      .then((resp) => setProduct(resp))
      .catch((err) => console.error(err));
  }, [itemId]);

  return (
    <div className="section">
      <div className="container">
        {product ? (
          <div className="columns is-vcentered">
            <div className="column is-half has-text-centered">
              <figure className="image">
                <img
                  src={product.img}
                  alt={product.name}
                  className="has-shadow"
                  style={{ maxHeight: "400px", objectFit: "contain" }}
                />
              </figure>
            </div>

            <div className="column is-half">
              <h1 className="title is-3 mb-4">{product.name}</h1>
              <p className="subtitle is-5 has-text-grey mb-4">{product.descrip}</p>
              <p className="title is-4 has-text-primary">${product.price}</p>
            </div>
          </div>
        ) : (
          <div className="has-text-centered">
            <progress className="progress is-small is-primary" max="100">
              30%
            </progress>
            <p className="mt-4">Cargando producto...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetailsContainer;
