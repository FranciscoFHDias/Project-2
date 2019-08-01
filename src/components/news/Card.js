import React from 'react'

const Card = ({ title, image, description }) => {
  return(
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={image} alt={title} />
        </figure>
      </div>
      <div className="card-header">
        <div className="card-header-title">{title}</div>
      </div>
      <div className="card-content">
        <div className="content is-6">{description}</div>
      </div>
    </div>
  )
}
