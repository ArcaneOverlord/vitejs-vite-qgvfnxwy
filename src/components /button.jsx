import React from 'react';
import {useNavigate} from 'react-router-dom'

const Button = ({handleClick,style,label}) => {
   const useNavigate = navigate();
  return (
    <button onClick={handleClick} className={style} >{label}</button>
  )
};
export default Button;