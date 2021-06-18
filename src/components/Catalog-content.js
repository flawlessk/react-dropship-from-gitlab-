import React, { useEffect } from "react";
import Header from "./Header";
import Sort from "./Sort";
import Products from "./Products";
import { useParams } from "react-router-dom";
import Testing from "./Testing";

const CatalogContent = ({
  checkboxChanged,
  checkedProducts,
  setProducts,
  products,
  search,
  changeSearch,
  getSortedProducts,
  setParams,
  params,
  selectAll,
  clearAll,
}) => {
  let { categoryParams } = useParams();
  const categoryParam = categoryParams?.replace(/-/g, " ");
  useEffect(() => {
    if (categoryParam !== params) {
      setParams(categoryParam);
    }
  });

  return (
    <section className="catalog__content">
      <div className="content__header-wrapper">
        <Header
          setProducts={setProducts}
          products={products}
          changeSearch={changeSearch}
          search={search}
          checkedProducts={checkedProducts}
          selectAll={selectAll}
          clearAll={clearAll}
        />
        <Sort getSortedProducts={getSortedProducts} />
      </div>
      <Products
        products={products}
        checkedProducts={checkedProducts}
        checkboxChanged={checkboxChanged}
      />
    </section>
  );
};

export default CatalogContent;
