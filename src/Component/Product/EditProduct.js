import React, { useEffect } from 'react';
import M from 'materialize-css';
import EditProductModal from './EditProductModal';
import { Add_Product_Info, Edit } from '../../Utils/StringConstant';

function EditProduct({product, editProduct}){
    const id = product && product.name.slice(0,2).concat('addMember', product.description.slice(0,2));  

    useEffect(() => {
        // In materialized CSS, Modal is javascript component so for further uses we have to initialize that
        var modalElement = document.querySelector(`#${id}`);
             M.Modal.init(modalElement, {
                edge: 'left',
                inDuration: 250
            });
    });

    return (
        <div>
            <a href={`#${id}`} className={'secondary-content modal-trigger'} >
                <i className="material-icons teal-text right">{Edit}</i>
            </a>
            <div id={`${id}`} className="modal">
                <div className="modal-content">
                <h4>{Add_Product_Info}</h4>
                <EditProductModal product={product} editProduct={editProduct} ></EditProductModal>
                </div>
            </div>
        </div>
      );
   
}
 
export default EditProduct;