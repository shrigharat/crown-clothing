import React from "react";

import './product-detail.styles.scss';

const ProductDetail = ({title}) => (
    <div className='product-detail'>
        <h2>{title}</h2>
    </div>
);

export default ProductDetail;