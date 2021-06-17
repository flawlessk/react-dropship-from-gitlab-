import React from "react";
import { useHistory } from "react-router-dom";

const SingleProduct = ({
  products,
  checkboxChanged,
  checkedProducts,
  setActiveProduct,
  setIsOpen,
}) => {
  const openModal = (item) => {
    setActiveProduct(item);
    setIsOpen(true);
  };
  const history = useHistory();

  const popProduct = (id) => {
    history.push(`/catalog/${id}`)
  }
  return products.map((item) => (
    <div
      key={item.id}
      onClick={() => popProduct(item.id)}
      className={`${
        checkedProducts.includes(item)
          ? " products__item--input--highlited"
          : "products-item"
      }`}
    >
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="products__item--input"
          className="products__item--input"
          checked={checkedProducts.includes(item)}
          onChange={() => checkboxChanged(item)}
        />
      </div>
      <div className="products-image" onClick={() => openModal(item)}>
        <img src={item.image} alt="img" />
      </div>
      <div className="products-title">
        <h3>{item.title}</h3>
      </div>
      <h3 className="products-supplier">
        <span>By:</span>
        <button>US-Supplier103</button>
      </h3>
      <div className="products-price">
        <span>COST {item.price}$ </span>
      </div>
    </div>
  ));
};

export default SingleProduct;
