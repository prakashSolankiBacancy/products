import React, { useState } from 'react';
import Radio from '../UIComponent/Radio';

function ProductAction({onFilterOrSearchChange}) {
    const [radioButtons, setRedioButtons] = useState([
        {name: 'name', checked: false },
        {name: 'description',  checked:false},
        {name: 'price', checked: false}
    ]);

    const onChange = (selectedValue) => {
        const updatedList = radioButtons.map((radio) => {
            if(radio.name === selectedValue) {
                radio.checked = !radio.checked;
                return radio;
            } else {
                 radio.checked ? radio.checked = false : radio.checked = radio.checked
                return radio;
            }
        });
       
        setRedioButtons(updatedList);
        onFilterOrSearchChange('radio', selectedValue)
    }

    const getRadioButtons = () => {
       return  radioButtons.map((radio) => {
            return(
                <div key={radio.name}>
                    <Radio option={radio} onChange={onChange}></Radio>
                </div>
            )
        })
    }

    const handleSearch = (event) => {
        onFilterOrSearchChange('search', event.target.value)
      }
    
    return (
        <div className='product-action'>
            <div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate"  onChange={handleSearch} />
                    <label for="email">Search Product</label>
                    </div>
                </div>
            </div>
            <div className='radio-group '>
                <p>Sort By :</p>
                {getRadioButtons()}
            </div>
           
        </div>
      );
   
}
 
export default ProductAction;