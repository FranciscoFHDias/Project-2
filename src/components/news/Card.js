import React from 'react'

const Card = ({ title, image, description, author, date }) => {
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
        <div className="content is-7">{author}</div>
        <div className="content is-7">{date}</div>
      </div>
    </div>
  )
}


export default Card
