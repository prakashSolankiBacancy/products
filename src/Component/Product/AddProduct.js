import React, { useEffect } from 'react';
import M from 'materialize-css';
import AddProductModal from './AddProductModal';
import AddProductContainer from '../../Container/AddProductContainer';

function AddProduct(){

    useEffect(() => {
        // In materialized CSS, Modal is javascript component so for further uses we have to initialize that
        var modalElement = document.querySelector('#add');
             M.Modal.init(modalElement, {
                edge: "left",
                inDuration: 250
            });
    })

    return (
        <div>
            <a href={'#add'} className={'secondary-content modal-trigger btn'} >
                Add Product
            </a>
            <div id={'add'} className="modal">
                <div className="modal-content">
                <h4>Add Product information</h4>
                <AddProductContainer></AddProductContainer>
                </div>
            </div>
        </div>
      );
   
}
 
export default AddProduct;