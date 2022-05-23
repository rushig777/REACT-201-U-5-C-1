import {Link} from "react-router-dom"

function Card(item:any) {

  item=item.item;
  console.log(item)
  return (
    <div className="item">
      <img src="" className="productImage" />
      <span>
        <Link className="productLink" to={`/${item.id}`}>
          {/* Product Name */}
        </Link>
      </span>
      <span className="productCategory">{item.category}</span>
      {/* Notice the $ before price. keep it dont edit it. eg: "$123" */}
      <span className="productPrice">${item.price}</span>
      {/* Notice the Ratings: text. don't edit it. eg: "Ratings: 3.5" */}
      <span className="productRating">Ratings: </span>
      {/* Show button here if item is already in the cart. otherwise show "Item Already in cart" */}
      {/*
      <div className="itemInCart">Item Already in cart</div> 
       OR
      <button className="productAddtoCart">
        Add to cart
      </button>
      */}
    </div>
  );
}

export { Card };
