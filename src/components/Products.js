import React, { useContext } from 'react';

// Components
import Product from './Product';

// Contexts
import { ProductContext } from '../contexts/ProductContext'

const Products = props => {
	const values = useContext(ProductContext)
	return (
		<div className="products-container">
			{values.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={values.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
