import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Buttons from './Buttons';

function AddProduct() {

    let [productName, setProductName] = useState('');
    let [productValue, setProductValue] = useState('');
    let [productDesc, setProductDesc] = useState('');

    let navigate = useNavigate();
    let saveProductDetails = (e) => {
        e.preventDefault();
        let product = { productName, productValue, productDesc }
        console.log("eeeeeeeeee= ", product);

        axios.post('http://localhost:3001/products', product)
            .then(res => {
                console.log("res = ", res);
                navigate('/products'); //navigate after data added
            })
            .catch(err => console.log("err = ", err));
    }

    return (
        <form>

            Product Name: <input type='text' name="productName" onChange={(e) => setProductName(e.target.value)} />
            Product Value: <input type='text' name="productValue" onChange={(e) => setProductValue(e.target.value)} />
            Product Desc: <input type='text' name="productDesc" onChange={(e) => setProductDesc(e.target.value)} />

            <button onClick={saveProductDetails}> Save Details </button>
        </form>
    )
}

export default AddProduct