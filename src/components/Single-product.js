import React from 'react'
import { Grid, Paper , Box } from '@material-ui/core'
import { useHistory } from "react-router-dom";


export default function SingleProduct({products, checkedProducts, checkboxChanged, setActiveProduct, setIsOpen}) {
    const history = useHistory();

    const openModal = (item) => {
        setActiveProduct(item);
        setIsOpen(true);
        history.push(`/catalog/${item.id}`)
      };

    return (
        <Grid container justify="space-between">
             {products.map((item) => (
            <Box className="product-box"
                key={item.id}
            >
                <Box item xs={3} 
                 className={`${ checkedProducts.includes(item)
                ? " products__item--input--highlited"
                : "products-item"
            }`} >
                <div className="checkbox-container">
                    <input
                    type="checkbox"
                    id="products__item--input"
                    className="products__item--input"
                    checked={checkedProducts.includes(item)}
                    onChange={() => checkboxChanged(item)}
                    />
                </div>

                    <Paper onClick={(e) => openModal(item)}>
                        <div className="products-image">
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
                    </Paper>
                </Box>
            </Box>
    ))}
    </Grid>
    )
            
}
