
const initialState = {
    productList: []
}


const ProductsReducer = (state = initialState, action) => {
    console.log("fired",state, action);
}

export default ProductsReducer;