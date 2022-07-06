import React from 'react'
import data from '../obj'
import Shirtcomp from './Shirtcomp'

function Shirts() {
  let shirtdata = data.filter((ele)=>ele.type=="shirts")
  return (
    <>
      <Shirtcomp data = {shirtdata}/>
    </>
  )
}

export default Shirts