import { Formik, Form, Field, ErrorMessage } from "formik";
import { addProduct } from "../API";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProduct } from "../API";
import { updateProduct } from "../API";

const productValidation = yup.object().shape({
    title: yup.string().min(3).max(30),
    description: yup.string().min(10).max(300),
    price: yup.number().integer().min(1),
    imageUrl: yup.string().url().required()
})


const Product = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        if(productId) {
            getProduct(productId).then(res => {
                setProduct(res);
            })
        }
    }, [productId]);

    const handleSubmit = values => {
        if(productId) {
            updateProduct(productId, values).then(res => {
                alert("Successfuly updated!!!");
            }).catch(error => alert(error.message));
        } else {
            addProduct(values).then(res => {
                alert("Successfuly added new product!!!");
            })
        }
    }

    return (
    <>
        <h2 className="formik-header">{productId ? "Edit" : "Add"} Product</h2>
        <Formik 
            enableReinitialize
            initialValues={productId ?
            {
                title: product.title,
                description: product.description,
                price: product.price,
                imageUrl: product.imageUrl
        } :
            {
                title: "",
                description: "",
                price: "",
                imageUrl: ""
            }}
            onSubmit={handleSubmit}
            validationSchema={productValidation}
        >
            <Form className="formikform">
                <Field 
                placeholder="Title" 
                name="title"
                />
                <ErrorMessage name="title" component="div" />
                <Field
                 placeholder="Description" 
                 component="textarea" 
                 name="description"
                 />
                <ErrorMessage name="description" component="div" />
                <Field 
                placeholder="Price" 
                name="price"
                />
                <ErrorMessage name="price" component="div" />
                <Field 
                placeholder="Image URL" 
                name="imageUrl"
                />
                <ErrorMessage name="imageUrl" component="div" />
                <input type="submit" value={productId ? "Save" : "Update"}/>
            </Form>
        </Formik>
    </>
    )
}

export default Product;