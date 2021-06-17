import HeaderBtn from "./Header-btn";
import Search from "./Search";

const Header = ({
  products,
  setProducts,
  changeSearch,
  search,
  checkedProducts,
  selectAll,
  clearAll,
}) => {
  return (
    <header className="content__header">
      <div className="header-select">
        <HeaderBtn name="SELECT ALL" onClick={selectAll} />
        <span className="content__header-title">
          selected {checkedProducts.length} out of {products.length} products
        </span>
        {checkedProducts.length > 0 && (
          <HeaderBtn name="CLEAR SELECTED" onClick={clearAll} />
        )}
      </div>
      <div className="header-side">
        <Search
          setProducts={setProducts}
          products={products}
          changeSearch={changeSearch}
          search={search}
        />
      </div>
      <HeaderBtn name="ADD TO INVENTORY" big onClick={() => {}} />
      <div className="side-help">
        <button className="help-btn">?</button>
      </div>
    </header>
  );
};

export default Header;
