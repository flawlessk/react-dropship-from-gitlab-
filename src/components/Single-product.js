import React from "react";

const SingleProduct = ({
  products,
  filterProducts,
  checkboxChanged,
  checkedProducts,
  setActiveProduct,
  setIsOpen,
}) => {
  const newProducts = filterProducts.length > 0 ? filterProducts : products;
  const openModal = (item) => {
    setActiveProduct(item);
    setIsOpen(true);
  };

  return newProducts.map((item) => (
    <div
      key={item.id}
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
