import React from "react";

export function Filter ({value, onChange}){
   return (
  <div className="find">
      <label>
    <p>  Find contact by name</p>
    <input className="formInput"
    value={value}
    onChange={onChange}
    />
    </label>
  </div>
   )
}