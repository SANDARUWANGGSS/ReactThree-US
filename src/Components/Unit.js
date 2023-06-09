import React from 'react'

const Unit = ({Image,name,city,position}) => {
  return (
    <div className="unit_container">
        <img src={Image} alt={name}/>
        <h3>{name}</h3>
        <p>
            <span>{city}</span><br></br>
            <span>{position}</span>
        </p>
        Unit</div>
  )
}

export default Unit