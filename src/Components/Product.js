import React from "react";

export default function Product(props) {
  return (
    <div className="row">
      <div className="col-5">
        <h4 className="container">
          {props.product.name} &nbsp; &nbsp;
          <span className="badge text-bg-primary">₹{props.product.price}</span>
        </h4>
      </div>

      <div className="col-3">
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-outline-primary" 
          onClick={() => {
              props.decrementQuantity(props.index);
            }}>
            -
          </button>
          <button type="button" class="btn btn-outline-primary" disabled>
            {props.product.quantity}
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2"> <b>Total: </b>
        {props.product.quantity * props.product.price}
      </div>
     
    </div>
  );
}
