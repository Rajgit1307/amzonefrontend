import React from 'react'
import data from './obj'
import './product.css'

function Product({inputstate}) {
    let filteredData = data.filter(ele=>ele.type.includes(inputstate.inputstate.toLowerCase()))
    return (
        <>
            <div className="parent">
                {
                    filteredData.length == 0?
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
                                    <button className='carding' onClick={()=> inputstate.addtocart(ele)}>add to cart</button>
                                </div>
                            </div>
                        )
                    }
                    ): filteredData.map((ele) => {
                        return (
                            <div className="product">
                                <div className="imagecontainer">
                                    <img src={`${ele.image}`} />
                                </div>
                                <div className="detail">
                                    <div className="title">{ele.title}</div>
                                    <div className="price">${ele.price}</div>
                                    <div className="quantity">{ele.quantity}</div>
                                    <button className='carding' onClick={()=> inputstate.addtocart(ele)}>add to cart</button>
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

export default Product