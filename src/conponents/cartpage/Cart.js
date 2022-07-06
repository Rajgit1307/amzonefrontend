import React from 'react'
import "../product.css"

function Cart({ cart }) {
    return (
        <>
            <div className='parent'>
            {
                cart.cart.length == 0 ?
                    <div>there is no product added in cart</div>
                    :
                    cart.cart.map((ele) => {
                        return (
                            <div className="product">
                                <div className="imagecontainer">
                                    <img src={`${ele.image}`} />
                                </div>
                                <div className="detail">
                                    <div className="title">{ele.title}</div>
                                    <div className="price">${ele.price}</div>
                                    <div className="quantity">{ele.quantity}</div>
                                    <button className='carding' onClick={() => cart.addtocart(ele)}>add to cart</button>
                                </div>
                            </div>
                        )
                    })
            }
        </div>
    </>
  )
}

export default Cart