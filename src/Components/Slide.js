import React from 'react'

export default function Slide() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1510878933023-e2e2e3942fb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1616353071588-708dcff912e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" className="d-block w-100" alt="..." />
          </div>
          
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1608386390658-86cf60bcf61a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
  
}
