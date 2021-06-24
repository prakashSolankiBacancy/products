import React from 'react';
import Navigation from './Navigation';
import AddProduct from './Product/AddProduct';
import ProductAction from './Product/ProductAction'
import ProductsDisplayContainer from '../Container/ProductsDisplayContainer';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: '',
      sortBy: '',
    }
  }

    onFilterOrSearchChange = (type, value) => {
      if(type === 'radio') {
        this.setState({
          sortBy: value
        })
      } else {
        this.setState({
          searchKeyword: value
        })
      }
    }

   render() {
     const { searchKeyword, sortBy} = this.state
    return ( 
      <div>
        <Navigation></Navigation>
        <AddProduct></AddProduct>
        <ProductAction onFilterOrSearchChange={this.onFilterOrSearchChange}></ProductAction>
        <ProductsDisplayContainer searchKeyword={searchKeyword} sortBy={sortBy} ></ProductsDisplayContainer>
      </div>
    )
   }
}

export default MainApp;