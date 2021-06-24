import React from 'react';
import Card from '../Card';
const _ = require("lodash"); 

class ProductsDisplay extends React.Component {
    getProductsList = () => {
        const {products, editProduct, deleteProduct, searchKeyword, sortBy} = this.props;
        let filteredProduct = products;

        if(products !== undefined && products.length) {

            if(searchKeyword !== '') {
                filteredProduct = filteredProduct.filter((product) => {

                    return ( (product.name.toLowerCase().search(searchKeyword.toLowerCase()) >= 0)||
                            (product.description.toLowerCase().search(searchKeyword.toLowerCase()) >= 0));
                })
            } 

            const sortedList = _.sortBy(searchKeyword !== '' ? filteredProduct : products, sortBy);

            return sortedList.map((product) => {
                return(
                    <React.Fragment>
                        <Card product={product} editProduct={editProduct} deleteProduct={deleteProduct}></Card>
                    </React.Fragment>
                )
            })
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