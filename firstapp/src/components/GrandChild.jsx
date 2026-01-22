import React from 'react'

const GrandChild = () => {
    const{name,age,number}=useContext(UserContext);
  return (
    <div>
      GrandChild name is : {name}, age is: {age}, number is: {number}
    </div>
  )
}

export default GrandChild
