import React from "react";
import Shop from "./Shop.js";
import { Product } from "../Products.js";
import { Helmet } from "react-helmet";

class DetailCategory extends React.Component {
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
    const category = this.props.match.params.category;
    console.log(this.props.match.params.category);
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>RaonHajae</title>
        </Helmet>
        {products
          ? Object.keys(products).map((productKey) => {
              if (productKey === category) {
                return (
                  <div className="products" key={productKey}>
                    {Object.values(products[productKey]).map((product, id) => {
                      console.log(product);
                      return (
                        <Shop
                          key={product.id}
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
              }
            })
          : "no products"}
      </div>
    );
  }
}

export default DetailCategory;

/* import React from "react";
import {organizations} from "./Products";


function ListItems({type}) {
    return (
        organizations.map((company,index) => (
            company.products.filter(product =>
            product.category.includes(type)
            ).map((product,index2) => <div key={(index*100)+index2}>{product.productName}</div>)

        ))
    );
}

export default function Category({category}) {

    return (
        <ListItems type={category}/>
    );
}
*/

/*
import React from "react";
import {organizations} from "./Products";


function ListItems({type}) {
    return (
        organizations.map((company, index) => (
            company.products.filter(product =>
                product.category.includes(type)
            ).map((product, index2) => <div key={(index * 100) + index2}>{product.productName}</div>)

        ))
    );
}

export default function Category({category}) {

    return (
        <ListItems type={category}/>
    );
}
*/

/*

*/
