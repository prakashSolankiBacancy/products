import React from 'react';
import { Delete } from '../../Utils/StringConstant';
import EditProduct from '../Product/EditProduct';

export default function Card({product, editProduct, deleteProduct}) {
    return(
        <div className="col s12 m6">
            <div className="card horizontal">
                <div className="card-image">
                    <img src={`data:image/jpeg;base64,${product.encodedFile}`} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <div className="header">
                            <h4>{product.name}</h4>
                            <h4>{product.price}</h4>
                        </div>
                        <p>{product.description}</p>
                    </div>
                    <div className="card-action">
                        <EditProduct product={product} editProduct={editProduct}></EditProduct>
                        <a  className={'secondary-content modal-trigger'} onClick={(e) => {deleteProduct(product.id)}} >
                        <i className="material-icons teal-text right">{Delete}</i>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}