import React from "react";
import "./Shop.css";

function Shop({
  id,
  image,
  productName,
  companyName,
  contact,
  email,
  url,
  summary,
  description,
}) {
  return (
    <div className="product">
      <div className="product__data">
        <img src={image} alt={productName} title={productName} />
        <h3 className="product__productName">{productName}</h3>
        <h4 className="product__companyName">{companyName}</h4>
        <h5 className="product__contact">Contact: {contact}</h5>
        <h5 className="product__email">Email: {email}</h5>
        <h5 className="product__url">
          <a href={url}>URL: {url}</a>
        </h5>
        <p className="product__summary">{summary}</p>
        <p className="proudct__description">{description.slice(0, 200)}...</p>
      </div>
    </div>
  );
}

export default Shop;
