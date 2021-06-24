import { useState } from "react";

function AddProductModal({addProduct}) {
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    // const [file, setFile] = useState();
    const [showError, setError] = useState(false);
   
    const onClick = (event) => {
        addProduct({name, description, price});
        setDescription(''); setName(''); setPrice('');
    }

    return ( 
        <div className="row">
            <form className="col s12">
                <div className="row">
                        <div className="input-field col s6">
                            <input id="name" type="text" value={name} className="validate" onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="name">Name</label>
                        </div>
                    </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="description" type="text" value={description}  className="validate" onChange={(e) => setDescription(e.target.value)}/>
                        <label htmlFor="description">Description</label>
                    </div>
                </div>
                <div className="row">
                        <div className="input-field col s6">
                            <input id="price" type="text" value={price} className="validate" onChange={(e) => setPrice(e.target.value)} />
                            <label htmlFor="price">Price</label>
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
 
export default AddProductModal;