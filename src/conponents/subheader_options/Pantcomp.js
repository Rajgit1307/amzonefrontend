import React from 'react'
import '../product.css'

function Pantcomp({data}) {
    console.log(data)
  return (
    <>
         <div className="parent">
                {
                    data.map((ele) => {
                        return (
                            <div className="product">
                                <div className="imagecontainer">
                                    <img src={`${ele.image}`} />
                                </div>
                                <div className="detail">
                                    <div className="title">{ele.title}</div>
                                    <div className="price">${ele.price}</div>
                                    <div className="quantity">{ele.quantity}</div>
                                    <button className='carding'>add to cart</button>
                                </div>
                            </div>
                        )
                    }
                    )
                }

            </div>
    </>
  )
}

export default Pantcomp