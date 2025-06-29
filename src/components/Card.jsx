import React from 'react';

function Card() {
  const thumbnails = [
    "src/assets/thm1.jpg", "src/assets/thm2.jpg", "src/assets/thm3.jpg",
    "src/assets/thm4.jpg", "src/assets/thm5.jpg", "src/assets/thm6.jpg",
    "src/assets/thm1.jpg", "src/assets/thm2.jpg", "src/assets/thm3.jpg",
    "src/assets/thm4.jpg", "src/assets/thm5.jpg", "src/assets/thm6.jpg",
    "src/assets/thm1.jpg", "src/assets/thm2.jpg", "src/assets/thm3.jpg",
    "src/assets/thm4.jpg", "src/assets/thm5.jpg", "src/assets/thm6.jpg",
    "src/assets/thm1.jpg", "src/assets/thm2.jpg", "src/assets/thm3.jpg",
    "src/assets/thm4.jpg", "src/assets/thm5.jpg", "src/assets/thm6.jpg"
  ];

  const titles = [
    'Demo Title of Youtube Clone', 'Demo Title of Youtube Clone',
    'Demo Title of Youtube Clone', 'Demo Title of Youtube Clone',
    'Demo Title of Youtube Clone', 'Demo Title of Youtube Clone',
    'Demo Title of Youtube Clone', 'Demo Title of Youtube Clone',
    'Demo Title of Youtube Clone', 'Demo Title of Youtube Clone',
    'Demo Title of Youtube Clone', 'Demo Title of Youtube Clone',
    'Demo Title of Youtube Clone', 'Demo Title of Youtube Clone',
    'Demo Title of Youtube Clone', 'Demo Title of Youtube Clone'
  ];

  return (
    <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {thumbnails.map((thumbnail, index) => (
        <div className="card" style={{ width: '18rem' }} key={index}>
          <img src={thumbnail} className="card-img-top" alt={`Thumbnail ${index + 1}`} />
          <div className="card-body">
            <h5 className="card-title">{titles[index]}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
