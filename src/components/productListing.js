import React from "react";
import { connect } from "react-redux";
const productListing = ({ products }) => {
  console.log(products);
  return (
    <div>
      <h1>Product Listing</h1>
    </div>
  );
};

const mapState = (state) => {
  console.log(state);
  return { products: state.allProducts };
};
export default connect(mapState)(productListing);
