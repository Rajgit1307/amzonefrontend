import React from 'react'
import './header.css'
import { BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom'


function Header({ setinputstate }) {
    console.log(setinputstate)
    function managesearch(e) {
        let { value } = e.target
        console.log(value);
        setinputstate(value)
    }
    return (
        <>
            <nav className='header'>
                <div className='header-img'>
                    <img src="./amazon-logo.png" alt="" />
                </div>
                <div className='link1'>
                    <div className='upperline'>hello</div>
                    <div className='lowerline'>Address</div>
                </div>
                <div className='search'>
                    <div>
                        <select className='select' id=""  >
                            <option value="All">All</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <input type="text" placeholder='select your product here' className='searchinput' onChange={managesearch} />
                    <div className='searchicon'> <BiSearch /></div>
                </div>
                <div className='links'>
                    <div className='link2'>
                        <span className='upperline'>hello</span>
                        <span className='lowerline'>Account</span>
                    </div>
                    <div className='link3'>
                        <span className='upperline'>return</span>
                        <span className='lowerline'>&order</span>
                    </div>
                    <div className='cart'><FiShoppingCart size='2em' /></div>
                </div>
                <div className="cart">
                    <Link to="/cartpage" className="link"><div>cart</div></Link>
                    <div className="itemno">{setinputstate.cart.length}</div>
                </div>
            </nav>
        </>
    )
}

export default Header