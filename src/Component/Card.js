import React from 'react';
import EditProduct from './Product/EditProduct';

export default function Card({product, editProduct, deleteProduct}) {
    return(
        <div className="col s12 m6">
        <div className="card horizontal">
        <div className="card-image">
        <img src="https://homepages.cae.wisc.edu/~ece533/images/monarch.png" />
        </div>
        <div className="card-stacked">
            <div className="card-content">
            <h4 className="header">{product.name}</h4>
            <p>{product.description}</p>
            </div>
            <div className="card-action">
                <EditProduct product={product} editProduct={editProduct}></EditProduct>
                <a className={'secondary-content modal-trigger'} onClick={(e) => {deleteProduct(product.id)}} >
                <i className="material-icons teal-text right">delete</i>
            </a>
            </div>
        </div>
        </div>
    </div>
    )
}