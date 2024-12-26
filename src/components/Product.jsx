import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';

function Product() {

    let [product, setProduct] = useState({});
    let [products, setProducts] = useState([]);

    let data = [
        {
            "productName": "clothes",
            "productValue": "10000",
            "productDesc": "dress",
            "id": 1
        },
        {
            "productName": "clothes1",
            "productValue": "20000",
            "productDesc": "dress1",
            "id": 2
        }
    ]

    let { productId, productName } = useParams();

    useEffect(() => {


        axios.get('http://localhost:3001/products')
            .then(res => {
                setProducts(res.data);
                console.log("ressssssss = ", res, products)
                getData()
            })
            .catch(err => console.log(err))
    }, [])

    let getData = () => {
        console.log("aaaaaaa = ", data, products)
        let dd = products.find(d => d?.id == productId);
        console.log('dddddddd = ', dd, productId, productName);
        setProduct(dd);
    }

    return (
        <div>
            {product?.productName} - {product?.productValue}

        </div>
    )
}

export default Product