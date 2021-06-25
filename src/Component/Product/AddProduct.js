import React, { useEffect } from 'react';
import M from 'materialize-css';
import AddProductContainer from '../../Container/AddProductContainer';
import { Add_Product, Add_Product_Info } from '../../Utils/StringConstant';

function AddProduct(){

    useEffect(() => {
        // In materialized CSS, Modal is javascript component so for further use modal we have to initialize that
        var modalElement = document.querySelector('#add');
             M.Modal.init(modalElement, {
                edge: 'left',
                inDuration: 250
            });
    });

    return (
        <div>
            <a href={'#add'} className={'secondary-content modal-trigger btn add-product'} >
                {Add_Product}
            </a>
            <div id={'add'} className="modal">
                <div className="modal-content">
                <h4>{Add_Product_Info}</h4>
                <AddProductContainer></AddProductContainer>
                </div>
            </div>
        </div>
      );
   
}
 
export default AddProduct;