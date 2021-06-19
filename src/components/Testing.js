import React from 'react'
import { Checkbox, Grid, Paper , Box } from '@material-ui/core'
import { sizing } from '@material-ui/system';
import { useHistory } from "react-router-dom";


export default function Testing({products, checkedProducts, checkboxChanged, setActiveProduct, setIsOpen}) {
    const history = useHistory();

    const openModal = (item) => {
        setActiveProduct(item);
        setIsOpen(true);
        history.push(`/catalog/${item.id}`)
      };

    return (
        <Grid container justify="space-between">
             {products.map((item) => (
            <Box className="product-test"
                key={item.id}
                onClick={(e) => openModal(item)}
            >
                <Box item xs={3} 
                 className={`${ checkedProducts.includes(item)
                ? " products__item--input--highlited"
                : "products-item"
            }`} >
                    <Checkbox 
                        id="products__item--input"
                        color="primary" 
                        checked={checkedProducts.includes(item)}
                        onChange={() => checkboxChanged(item)}
                    />
                    <Paper>
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
