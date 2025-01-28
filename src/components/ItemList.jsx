import React from "react";
import { Link } from "react-router-dom";

const ItemList = ({ products, onAddToCart, onRemoveFromCart }) => {
  return (
    <div className="columns is-multiline">
      {products.map((product) => (
        <div className="column is-one-third" key={product.id}>
          <div
            className="card"
            style={{
              transform: "scale(0.9)",
              transformOrigin: "center",
            }}
          >
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={product.img} alt={product.name} />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-5">{product.name}</p>
                  {/* <p className="subtitle is-6 has-text-grey">
                    {product.descrip}
                  </p> */}
                </div>
              </div>
              {/* <div className="content">
                <p className="has-text-weight-bold">${product.price}</p>
              </div> */}
              <div
                className="buttons is-flex is-justify-content-space-between"
                style={{ marginTop: "1rem" }}
              >
                <Link
                  to={`/item/${product.id}`}
                  className="button is-primary is-light"
                >
                  Más info
                </Link>
                <button
                  className="button is-success is-light"
                  onClick={() => onAddToCart(product)}
                >
                  Agregar al carrito
                </button>
                <button
                  className="button is-danger is-light"
                  onClick={() => onRemoveFromCart(product)}
                >
                  Eliminar del carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
