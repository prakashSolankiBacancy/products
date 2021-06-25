import {connect} from 'react-redux';
import AddProductModal from '../Component/Product/AddProductModal';

// Here we separate the business logic and UI logic

/**
 * Here we can perform add or update action to on products
 * @param {*} dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch) => {
    return {
      addProduct: (product) => { dispatch({ type: 'ADD', payload: product })},
    }
}

export default connect(null,  mapDispatchToProps)(AddProductModal);