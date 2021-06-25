import React from 'react';
import Card from '../UIComponent/Card';
const _ = require('lodash'); 

class ProductsDisplay extends React.Component {
    getProductsList = () => {
        const {products, editProduct, deleteProduct, searchKeyword, sortBy} = this.props;
        let filteredProduct = products;

        if(products !== undefined && products.length) {

            // Filter the product array if user search the product
            if(searchKeyword !== '') {
                filteredProduct = filteredProduct.filter((product) => {

                    return ( (product.name.toLowerCase().search(searchKeyword.toLowerCase()) >= 0)||
                            (product.description.toLowerCase().search(searchKeyword.toLowerCase()) >= 0));
                });
            } 

            // Sort product array if user sort product
            const sortedList = _.sortBy(searchKeyword !== '' ? filteredProduct : products, sortBy);

            // Return product list
            return sortedList.map((product) => {
                return(
                    <React.Fragment key={product.name}>
                        <Card product={product} editProduct={editProduct} deleteProduct={deleteProduct}></Card>
                    </React.Fragment>
                );
            });
        }
    }

    render() {
        return(
            <div className='product-container'>
              {this.getProductsList()}
            </div>
        );
    }
}

export default ProductsDisplay;