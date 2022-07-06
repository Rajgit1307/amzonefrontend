import React from 'react'
import './subheader.css'
import { Link } from 'react-router-dom'

function Subheader() {
  return (
    <div className='subheader'>
      <Link to = "/shirts"><div className="shirts">shirts</div></Link>
      <Link to = "/pants"><div className="shirts">pants</div></Link>

      {/* <div className="shirts">shirts</div>
      <div className="pants">pants</div> */}

    </div>
  )
}

export default Subheader