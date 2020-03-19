import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ProductList from "../ProductList/ProductList";

const productDashboard = [
  {
    id: "1",
    productName: "Nike mini Swoosh oversized boxy Purple sweatshirt",
    price: "£43.00",
    rating: 4,
    photoURL:
      "https://images.asos-media.com/products/nike-mini-swoosh-oversized-boxy-purple-sweatshirt/13280858-1-lightthistle?$n_320w$&wid=317&fit=constrain",
    colors: ["grey", "violet", "red"]
  },
  {
    id: "2",
    productName: "adidas Originals large Trefoil logo cropped hoodie in blue",
    price: "£44.95",
    rating: 5,
    photoURL:
      "https://images.asos-media.com/products/adidas-originals-large-trefoil-logo-cropped-hoodie-in-blue/13679573-1-clearskywhite?$n_320w$&wid=317&fit=constrain",
    colors: ["black", "blue"]
  },
  {
    id: "3",
    productName: "adidas Originals Fakten diamante trefoil hoodie in white ",
    price: "£54.95",
    rating: 5,
    photoURL:
      "https://images.asos-media.com/products/adidas-originals-fakten-diamante-trefoil-hoodie-in-white/13986408-1-chalkwhite?$n_320w$&wid=317&fit=constrain",
    colors: ["black", "blue", "white"]
  },
  {
    id: "4",
    productName: "Missguided co-ord crop seatshirt in blush",
    price: "£15.00",
    rating: 3,
    photoURL:
      "https://images.asos-media.com/products/missguided-co-ord-crop-sweatshirt-in-blush/20013225-1-blush?$n_640w$&wid=634&fit=constrain",
    colors: ["black", "blue"]
  },
  {
    id: "5",
    productName: "Nike Elastic Drawcord cropped mini Swoosh black",
    price: "£54.95",
    rating: 5,
    photoURL:
      "https://images.asos-media.com/products/nike-elastic-drawcord-cropped-mini-swoosh-black-sweatshirt/13281136-1-black?$n_640w$&wid=634&fit=constrain",
    colors: ["black"]
  }
];

class ProductDashboard extends Component {
  state = {
    products: productDashboard
  };
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={20}>
            <ProductList products={this.state.products} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default ProductDashboard;
