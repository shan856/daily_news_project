import React, { useState } from 'react';

const NewsItem = ({ title, description, src, url }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const cardStyle = {
    maxWidth: '345px',
    position: 'relative',
    minHeight: '249px',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };

  const imageStyle = {
    height: '200px',
    width: '100%',
    objectFit: 'cover',
    display: imageLoaded ? 'block' : 'none',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  };

  const handleCardClick = (e) => {
    e.stopPropagation();
    window.open(url, '_blank');
  };

  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {imageError && (
        <div className="text-center" style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="text-light fw-bold">Image Not Available</span>
        </div>
      )}
      {!imageLoaded && !imageError && (
        <div className="text-center" style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="spinner-border text-danger " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <img
        src={src}
        alt="News Image"
        style={imageStyle}
        className="card-img-top"
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "Description unavailable"}</p>
      </div>
    </div>
  );
};

export default NewsItem;
