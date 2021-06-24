import {connect} from 'react-redux';
import AddProductModal from '../Component/Product/AddProductModal';

// Here we separate the business logic and UI logic

/**
 * To pass products data as props in product modal component.
 * @returns 
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return {
       
    }
}

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

export default connect(mapStateToProps,  mapDispatchToProps)(AddProductModal);