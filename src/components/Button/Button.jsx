import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

function Button({children,to, ...rest}) {
  return <NavLink to={to} className='bg-gray p-3' {...rest} style={{display: "inline-block"}}>{children}</NavLink>
  
}

export default Button
