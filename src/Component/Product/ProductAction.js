import React, { useState } from 'react';
import { Search_Product, Sort_By } from '../../Utils/StringConstant';
import Radio from '../UIComponent/Radio';

function ProductAction({onFilterOrSearchChange}) {
    const [radioButtons, setRadioButtons] = useState([
        {name: 'name', checked: false },
        {name: 'description', checked:false},
        {name: 'price', checked: false}
    ]);

    // Handle radio input change event
    const onChange = (selectedValue) => {
        const updatedList = radioButtons.map((radio) => {
            if(radio.name === selectedValue) {
                radio.checked = !radio.checked;
                return radio;
            } else {
                 radio.checked ? radio.checked = false : radio.checked;
                return radio;
            }
        });
       
        setRadioButtons(updatedList);
        onFilterOrSearchChange('radio', selectedValue);
    };

    // Iterate the radio button array and return the JSX code
    const getRadioButtons = () => {
       return radioButtons.map((radio) => {
            return(
                <div key={radio.name}>
                    <Radio option={radio} onChange={onChange}></Radio>
                </div>
            );
        });
    };

    // Handle search event while user searching over product display page
    const handleSearch = (event) => {
        onFilterOrSearchChange('search', event.target.value);
      };
    
    return (
        <div className='product-action'>
            <div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" onChange={handleSearch} />
                    <label htmlFor="email">{Search_Product}</label>
                    </div>
                </div>
            </div>
            <div className='radio-group '>
                <p>{Sort_By} :</p>
                {getRadioButtons()}
            </div>
           
        </div>
      );
   
}
 
export default ProductAction;