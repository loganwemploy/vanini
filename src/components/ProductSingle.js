import React from 'react'
import styled from 'styled-components';

const StyledProductSingle  = styled.div`
  
`;

const ProductSingle = ({product}) => {
  return (
    <StyledProductSingle>
        <a href={`/products/${product._id}`}>
  	<div className="thumb">{product._id}</div>
				<h4>{product.name}.</h4>
clcik id {product._id}
				<p>In light of recent events, the importance of financial privacy has become an increasingly unavoidable issue for cryptocurrency...</p><a href="">Continue Reading</a>
        </a>
    </StyledProductSingle>
  )
}

export default ProductSingle
