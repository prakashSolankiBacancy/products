import { useState } from "react";

function EditProductModal({product, editProduct}) {
    const [description, setDescription] = useState(product.description);
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    // const [file, setFile] = useState();
    const [showError, setError] = useState(false);
   
    const onClick = (event) => {
        editProduct({id: product.id, name, description, price})
    }

    return ( 
        <div className="row">
            <form className="col s12">
                <div className="row">
                        <div className="group col s6">
                            <input id="name" type="text" value={name} className="validate" onChange={(e) => setName(e.target.value)} />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label htmlFor="name">Name</label>
                        </div>
                    </div>
                <div className="row">
                    <div className="group ">
                        <input id="description" type="text" value={description}  className="validate" onChange={(e) => setDescription(e.target.value)}/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Description</label>
                    </div>
                </div>
                <div className="row">
                    <div class="group s6">      
                        <input type="text" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Price</label>
                    </div>
                </div>
                {/* <div className="row">
                    <div class="file-field input-field">
                    <div class="btn">
                        <span>Select File</span>
                        <input type="file" />
                        {/* <input type="file" onChange={(e) => setFile(e.target.files[0])}/> */}
                    {/* </div> */}
                    {/* <div class="file-path-wrapper">
                         <input class="file-path validate" type="text" onChange={(e) => setFile(e.target.files[0])} />
                    </div> */}

                    {/* </div> */}
                {/* </div> */} 
                <div className='right'>
                    <a className="waves-effect waves-light btn" style={{margin: '5px'}} onClick={onClick}>Add Product</a>
                    <a href="#!" className="modal-close btn">close</a>
                </div>
                { showError &&
                    <div>
                        <a href="#!"><i className='material-icons red-text'>error</i></a> <span>Team already exits</span>
                    </div>
                }
            </form>
         </div>
        );
}
 
export default EditProductModal;