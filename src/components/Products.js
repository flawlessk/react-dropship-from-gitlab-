import React, { useState } from "react";
import SingleProduct from "./Single-product";
import Modal from "./Modal";
import Testing from "./Testing";
import { useHistory } from "react-router-dom";


const Products = ({
  products,
  checkedProducts,
  checkboxChanged,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState({});
  const history = useHistory();

  const onClose = () => {
    setIsOpen(false);
    history.push(`/catalog/`)
  }
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
          onClose={onClose}
          products={activeProduct}
        />
      </div>
    </div>
  );
};

export default Products;
