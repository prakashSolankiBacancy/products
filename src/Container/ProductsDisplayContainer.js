import {connect} from 'react-redux';
import ProductsDisplay from '../Component/Product/ProductsDisplay';

// To separate the business logic and UI logic

/**
 * To pass products data as props in product component.
 * @returns 
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return {
       products: state.ProductsReducer.products,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
       editProduct: (productObj) => {dispatch({type: 'EDIT', payload: productObj});},
       deleteProduct: (id) => {dispatch({type: 'DELETE', id});}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsDisplay);