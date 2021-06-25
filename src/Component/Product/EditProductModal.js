import React from 'react';
import { useState } from 'react';
import { Close, Description, error, Name, Price, Select_File } from '../../Utils/StringConstant';

function EditProductModal({product, editProduct}) {
    const [description, setDescription] = useState(product.description);
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [file, setEncodedFile] = useState(product.encodedFile);
   
    // Set file when user select the file in modal
    const setFile = (file) => {
        if(file) {
            // Convert image into base64
            var reader = new FileReader();
            let base64String;
            reader.onload = function () {
                base64String = reader.result.replace('data:', '')
                    .replace(/^.+,/, '');
                setEncodedFile(base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    const onClick = () => {
        if(isFormValid()) {
            editProduct({id: product.id, name, description, price, encodedFile: file});

            // clear the form data
            var modalElement = document.querySelector('#file');
            modalElement.value = null;
            setDescription(''); setName(''); setPrice('');setFile('');
        }
    };

     //  Return true id form have valid data
    const isFormValid = () => {
        if(description !== '' && name !== '' && parseInt(price) > 0) {
            return true;
        } 
        return false;
    };

    return ( 
        <div className="row">
            <form className="col s12">
                <div className="row">
                        <div className="group col s6">
                            <input id="name" type="text" value={name} className="validate" onChange={(e) => setName(e.target.value)} />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label htmlFor="name">{Name}</label>
                        </div>
                    </div>
                <div className="row">
                    <div className="group ">
                        <input id="description" type="text" value={description} className="validate" onChange={(e) => setDescription(e.target.value)}/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>{Description}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="group s6">      
                        <input id="price" value={price} type="text" onChange={(e) => setPrice(e.target.value)} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>{Price}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="file-field input-field image-container">
                        <div className="btn">
                            <span>{Select_File}</span>
                            <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
                            <div className="file-path-wrapper">
                            <input id='file' className="file-path validate" type="text" />
                        </div>
                        </div>
                        
                        <div className='image-preview'>
                            <img src={`data:image/jpeg;base64,${file}`} />
                        </div>
                    </div>
                </div> 
                
                <div className='right'>
                    <a className="waves-effect waves-light btn" style={{margin: '5px'}} onClick={onClick}>Add Product</a>
                    <a href="#!" className="modal-close btn">{Close}</a>
                </div>
                { false &&
                    <div>
                        <a href="#!"><i className='material-icons red-text'>{error}</i></a> <span>Team already exits</span>
                    </div>
                }
            </form>
         </div>
        );
}


 
export default EditProductModal;