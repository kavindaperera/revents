import React, { Component } from "react";
import { Card, Image, Rating, Button, Icon } from "semantic-ui-react";
class ProductListItem extends Component {
  render() {
    const { product } = this.props;

    return (
      <div>
        <Card >
          <Image src={product.photoURL} wrapped ui={false} />
          <Card.Content>
            <Card.Header style={{overflow: 'hidden',display: 'block'}}>{product.productName}</Card.Header>
          </Card.Content>
          <Card.Content extra textAlign='center'>
            <Card.Header size='tiny'>{product.price}</Card.Header>
            {product.colors &&
              product.colors.map(color => (
                <Icon name='circle' color={color} />
              ))
            }
          </Card.Content>
          <Card.Content extra textAlign='center'>
          <Rating
              icon="star"
              defaultRating={5}
              maxRating={product.rating}
            ></Rating>
          </Card.Content>
          <Card.Content extra textAlign='center'>
            <Button inverted color="orange">
              Add to cart
            </Button>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default ProductListItem;
