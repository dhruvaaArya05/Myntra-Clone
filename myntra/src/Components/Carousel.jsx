const Carousel = () => {
  return <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active carousel-banner err">
        <div className="image-container">
          <img src="images/highlander-deal.webp" alt="Highlander Deal" />
          <img src="images/roadster-deal.webp" alt="Roadster Deal" />
          <img src="images/us-polo-deal.webp" alt="US Polo Deal" />
          <img src="images/roadster-shoes-deal.webp" alt="Roadster Shoes Deal" />
        </div>
      </div>
      <div className="carousel-item err">
        <div className="image-container">
          <img src="images/roadster-glam-deal.webp" alt="Highlander Glam Deal" />
          <img src="images/titan-deal.webp" alt="Titan Deal" />
          <img src="images/levi`s-deal.webp" alt="Levi`s Deal" />
          <img src="images/home-style-deal.webp" alt="Home Style Deal" />
        </div>
      </div>
      <div className="carousel-item err">
        <div className="image-container">
          <img src="images/us-kids-deal.webp" alt="Us Kids Deal" />
          <img src="images/occasion-deal.webp" alt="Occasion Deal" />
          <img src="images/libas-deal.webp" alt="Libas Deal" />
          <img src="images/earpods-deal.webp" alt="Earpods Deal" />
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
}

export default Carousel;