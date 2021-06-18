import React, { useState } from "react";
import SingleProduct from "./Single-product";
import Modal from "./Modal";
import Testing from "./Testing";

const Products = ({
  products,
  checkedProducts,
  checkboxChanged,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState({});
  return (
    <div className="content__products">
      <div id="products-wrapper">
        {/* <SingleProduct
          products={products}
          checkedProducts={checkedProducts}
          checkboxChanged={checkboxChanged}
          setActiveProduct={setActiveProduct}
          setIsOpen={setIsOpen}
        /> */}
        <Testing 
        products={products}
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
