import React from 'react'

export const Header = (props) => {
  return (<> 
    <div>My first component</div>
    <h1> This is Header component</h1>
    <p> Name: {props.name }</p>
    <p> Age: {props.age ? props.age:" Age is not provided"}</p>
    <p> phone: {props.number? props.number:"Number is not provided"}</p>
    </>

  )
}
export default Header;