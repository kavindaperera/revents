import React, { Component } from "react";
import ProductListItem from "./ProductListItem";
import { Card, Grid } from "semantic-ui-react";
class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <h1>Products List</h1>
        <Card.Group itemsPerRow ={4} >
            {products.map(product => (
              <Card>
                <ProductListItem key={product.id} product={product} />
              </Card>
            ))}
        </Card.Group>
      </div>
    );
  }
}

export default ProductList;
