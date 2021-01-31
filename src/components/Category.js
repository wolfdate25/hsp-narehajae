import React from "react";
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