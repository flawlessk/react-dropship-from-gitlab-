import React from 'react'
import { Checkbox, Grid, Paper } from '@material-ui/core'
import { sizing } from '@material-ui/system';
import { useHistory } from "react-router-dom";


export default function Testing({products, checkedProducts, checkboxChanged, setActiveProduct, setIsOpen}) {
    const openModal = (item) => {
        setActiveProduct(item);
        setIsOpen(true);
      };
      const history = useHistory();
    
      const popProduct = (id) => {
        history.push(`/catalog/${id}`)
      }
    return products.map((item) => (
            <Grid container wrap="wrap" spacing={2} >
                <Grid item xs={3}
                 className={`${ checkedProducts.includes(item)
                ? " products__item--input--highlited"
                : "products-item"
            }`} 
                key={item.id}
                onClick={() => popProduct(item.id)}>
                    <Checkbox 
                        id="products__item--input"
                        color="primary" 
                        checked={checkedProducts.includes(item)}
                        onChange={() => checkboxChanged(item)}
                    />
                    <Paper>
                        <div className="products-image" onClick={() => openModal(item)}>
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
                </Grid>
            </Grid>
    ))
}
