import React from 'react'
import "./TabList.scss";

interface Props {
  className: string;
  buttonText: string;
  attrname:string
  value: string;
  value_update:Function;
}

const TabList: React.FC<Props> = ({
  className,
  buttonText,
  attrname,
  value,
  value_update,
}) => {
  return (
    <button type='submit' className={className} onClick={()=>{console.log(attrname, value); value_update(attrname,value)}}>{buttonText}</button>
  )
}

export default TabList