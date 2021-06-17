import CatalogNav from "./Catalog-nav";
import CatalogContent from "./Catalog-content";
import { Route, Switch } from "react-router";
import { useState, useEffect } from "react";
import {
  getProductsCategories,
  getProductsFiltered,
  getProductsSorted,
} from "../API";

const Main = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [params, setParams] = useState();
  const [checkedProducts, setCheckProducts] = useState([]);

  const checkboxChanged = (id) => {
    if (checkedProducts.includes(id)) {
      setCheckProducts(checkedProducts.filter((i) => i !== id));
    } else setCheckProducts([...checkedProducts, id]);
  };

  const selectAll = () => {
    setCheckProducts(products);
  };

  const clearAll = () => {
    setCheckProducts([]);
  };

  useEffect(() => {
    if (params) {
      getProductsFiltered(params).then((products) => {
        const dataArray = filterProducts(products.data, search);
        setProducts(dataArray);
      });
    } else {
      getProductsSorted().then((products) => {
        const dataArray = products.data;
        setProducts(dataArray);
      });
    }
  }, [params,search]);

  useEffect(() => {
    getProductsCategories().then((products) => {
      const categoryArray = products.data;
      setCategory(categoryArray);
    });
  }, []);

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      getProductsSorted().then((products) => {
        const dataArray = products.data;
        let searchProducts = filterProducts(dataArray, search);
        setProducts([...searchProducts]);
      });
    }, 800);
    return () => {
      clearTimeout(searchTimeout);
    };
  }, [search]);

  const changeSearch = (event) => {
    setSearch(event.target.value);
  };

  const filterProducts = (products, text) => {
    return products.filter((value) =>
      value.title.toUpperCase().includes(text.toUpperCase())
    );
  }

  const getSortedProducts = async (value) => {
    const sortedProducts = [...products];
    if (value === "HTL") {
      sortedProducts.sort((a, b) => (a.price < b.price ? 1 : -1));
    } else if (value === "LTH") {
      sortedProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
    } else if (value === "AZ") {
      sortedProducts.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else if (value === "ZA") {
      sortedProducts.sort((a, b) => (a.title < b.title ? 1 : -1));
    } else {
      sortedProducts.sort((a, b) => (a.id > b.id ? 1 : -1));
    }
    setProducts([...sortedProducts]);
  };
  return (
    <div className="main">
      <div className="main__catalog">
        <CatalogNav category={category} />
        <Switch>
          <Route path="/:categoryParams?">
            <CatalogContent
              checkedProducts={checkedProducts}
              checkboxChanged={checkboxChanged}
              products={products}
              setProducts={setProducts}
              changeSearch={changeSearch}
              search={search}
              getSortedProducts={getSortedProducts}
              setParams={setParams}
              params={params}
              selectAll={selectAll}
              clearAll={clearAll}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Main;
