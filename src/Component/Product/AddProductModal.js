import React from 'react';
import { useState } from 'react';
import { Close, Description, error, Name, Price, Select_File } from '../../Utils/StringConstant';

function AddProductModal({addProduct}) {
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState();
   
    const onClick = () => {
        if(isFormValid()) {
            // Convert image into base64
            var reader = new FileReader();
            let base64String;
            reader.onload = function () {
                base64String = reader.result.replace('data:', '')
                    .replace(/^.+,/, '');

                addProduct({name, description, price, encodedFile: base64String});
            };
            reader.readAsDataURL(file);
            var modalElement = document.querySelector('#file');

            // clear the form data
            modalElement.value = null;
            setDescription(''); setName(''); setPrice('');setFile('');
        }
    };

    //  Return true id form have valid data
    const isFormValid = () => {
        if(description !== '' && name !== '' && parseInt(price) > 0 && file) {
            return true;
        } 
        return false;
    };

    return ( 
        // eslint-disable-next-line react/react-in-jsx-scope
        <div className="row">
            <form className="col s12">
                <div className="row">
                        <div className="input-field col s6">
                            <input id="name" type="text" value={name} className="validate" onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="name">{Name}</label>
                        </div>
                    </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="description" type="text" value={description} className="validate" onChange={(e) => setDescription(e.target.value)}/>
                        <label htmlFor="description">{Description}</label>
                    </div>
                </div>
                <div className="row">
                        <div className="input-field col s6">
                            <input id="price" type="text" value={price} className="validate" onChange={(e) => setPrice(e.target.value)} />
                            <label htmlFor="price">{Price}</label>
                        </div>
                </div>
                <div className="row">
                    <div className="file-field input-field">
                        <div className="btn">
                            <span>{Select_File}</span>
                            <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
                        </div>
                        <div className="file-path-wrapper">
                            <input id='file' className="file-path validate" type="text" />
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
 
export default AddProductModal;