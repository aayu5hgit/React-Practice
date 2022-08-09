import React from 'react'

export default function Product(props) {
  return (
    <div className='row'>
        <div className='col-5'>
            <h4>{props.product.name} &nbsp; &nbsp;
            <span class="badge text-bg-primary">₹{props.product.price}</span>
            </h4>
        </div>

        <div className="col-3">
          <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-outline-primary">-</button>
            <button type="button" class="btn btn-outline-primary">{props.product.quantity}</button>
            <button type="button" class="btn btn-outline-primary" onClick={() => {props.incrementQuantity(props.index)}}>+</button>
          </div>
        </div>
        <div className="col-4">
          {props.product.quantity*props.product.price}
        </div>
    </div>
  )
}
