import React, { useState } from "react";
import CatalogPRoduct from "./Catalog-product";
import Modal from "./Modal";
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
    history.push(`/catalog/`)
    setIsOpen(false);
  }
  return (
    <div className="content__products">
      <div id="products-wrapper">
        <CatalogPRoduct 
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
