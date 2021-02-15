import React from "react";
import Shop from "./Shop.js";
import { Product } from "../Products.js";
import { Helmet } from "react-helmet";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
    };
  }

  componentDidMount() {
    this.setState({ products: Product });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>RaonHajae</title>
        </Helmet>
        {products
          ? Object.keys(products).map((productKey) => {
              return (
                <div className="products" key={productKey}>
                  {Object.values(products[productKey]).map((product) => {
                    return (
                      <Shop
                        id={product.id}
                        image={product.image}
                        productName={product.productName}
                        companyName={product.companyName}
                        contact={product.contact}
                        email={product.email}
                        url={product.url}
                        summary={product.summary}
                        description={product.description}
                      />
                    );
                  })}
                </div>
              );
            })
          : "no products"}
      </div>
    );
  }
}

export default Category;
