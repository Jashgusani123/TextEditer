import React from 'react'

const Defual = (props) => {
  console.log(props.charecters);
  return (
    <div className='charecterInbox'>
      <h3>Your Text Summary</h3>
      {props.charecters} Cherecters
      </div>
  )
}

export default Defual