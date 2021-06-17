import React, { useState } from "react";
import SingleProduct from "./Single-product";
import Modal from "./Modal";

const Products = ({
  products,
  filterProducts,
  checkedProducts,
  checkboxChanged,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState({});
  return (
    <div className="content__products">
      <div id="products-wrapper">
        <SingleProduct
          products={products}
          filterProducts={filterProducts}
          checkedProducts={checkedProducts}
          checkboxChanged={checkboxChanged}
          setActiveProduct={setActiveProduct}
          setIsOpen={setIsOpen}
        />
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          products={activeProduct}
        />
      </div>
    </div>
  );
};

export default Products;
