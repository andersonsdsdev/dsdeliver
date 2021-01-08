import { useEffect, useState } from 'react';
import ProductList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { OrderLocationData, Product } from './types';
import { fetchProducts } from './api';
import OrderLocation from './OrderLocation';

function Orders() {

    const [products, setProducts] = useState<Product[]>([]);
    const [orderlocation, setOrderlocation] = useState<OrderLocationData>()

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
       <div className="orders-container">
           <StepsHeader />
           <ProductList products = {products} />
           <OrderLocation onChangeLocation= {location => setOrderlocation(location)}/>
       </div>
    )
}

export default Orders;