import React from 'react'

const Button = (props) => {
  return (
    <>
     <button className="btn btn-primary me-md-2" onClick={props.fun} >{props.name}</button>
    </>
  )
}

export default Button