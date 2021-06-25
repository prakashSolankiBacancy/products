import {connect} from 'react-redux';
import AddProductModal from '../Component/Product/AddProductModal';

// To separate the business logic and UI logic

/**
 * to Perform add or update action on products
 * @param {*} dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch) => {
    return {
      addProduct: (product) => { dispatch({ type: 'ADD', payload: product });},
    };
};

export default connect(null, mapDispatchToProps)(AddProductModal);