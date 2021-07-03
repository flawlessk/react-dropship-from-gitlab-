import React from 'react'
import { Grid } from '@material-ui/core'
import { useHistory } from "react-router-dom";
import SingleProduct from './SingleProduct';


export default function CatalogPRoduct({products, checkedProducts, checkboxChanged, setActiveProduct, setIsOpen}) {
    const history = useHistory();

    const openModal = (item) => {
        setActiveProduct(item);
        setIsOpen(true);
        history.push(`/catalog/details/${item.id}`)
      };

    return (
        <Grid container justify="space-between">
             {products.map((item) => (
             <SingleProduct 
             key={item.id}
             image={item.imageUrl}
             title={item.title}
             id={item.id} 
             price={item.price}
             description={item.description}
             checkboxChanged={checkboxChanged}
             checkedProducts={checkedProducts}
             openModal={openModal}
             item={item}
             />
            ))}
    </Grid>
    )
            
}
