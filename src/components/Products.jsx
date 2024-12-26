import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Products() {

  let [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(res => { console.log('ress = ', res); setProducts(res.data) })
      .catch(err => console.log(err));
  }, [])

  return (
    <>
      <div>Products</div>
      {products.map((p, i) => {
        return (<li key={p.id}> {p.productName} - {p.productValue}
          <Link to={{ pathname: `/products/${p.id}/${p.productName}` }}> <button>View</button></Link>
        </li>)
      })}
    </>
  )
}

export default Products