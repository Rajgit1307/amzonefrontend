import React from 'react'
import data from '../obj'
import Pantcomp from './Pantcomp'

function Pants() {
  let pantdata = data.filter((ele)=>ele.type=="pants")
  return (
    <>
      <Pantcomp data = {pantdata}/>
    </>
  )
}

export default Pants