import React from "react";
import "./Shop.css";

function Shop({
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
        <h3 className="product__productName">{productName.slice(0, 23)}</h3>
        <h4 className="product__companyName">{companyName}</h4>
        <h5 className="product__contact">Contact: {contact}</h5>
        <h5 className="product__email">Email: {email}</h5>
        <h5 className="product__url">
          <a href={url}>URL: {url.trim()}</a>
        </h5>
        <p className="product__summary">{summary.trim()}</p>
        <p className="proudct__description">
          {description.trim().slice(0, 125)}...
        </p>
      </div>
    </div>
  );
}

export default Shop;
