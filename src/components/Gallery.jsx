import React, { useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Gallery = () => {
  const { gallery } = weddingConfig;
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <section className="section-padding">
      <div className="section-header">
        <span className="font-script section-script">Moments</span>
        <h2 className="font-serif section-title">Photo Gallery</h2>
        <div className="ornament-line">
          <span className="gold-diamond"></span>
        </div>
      </div>

      <div className="gallery-grid">
        {gallery.map((item, idx) => (
          <div 
            key={item.id} 
            className="gallery-item glass-card"
            onClick={() => openLightbox(idx)}
          >
            <img src={item.src} alt={item.caption} className="gallery-thumb" />
            <div className="gallery-overlay">
              <Camera size={24} className="text-gold" />
              <span className="gallery-caption">{item.caption}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div className="modal-backdrop" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <X size={24} />
            </button>

            <button className="lightbox-nav nav-prev" onClick={prevImage}>
              <ChevronLeft size={30} />
            </button>

            <div className="lightbox-content">
              <img 
                src={gallery[activeImageIndex].src} 
                alt={gallery[activeImageIndex].caption} 
                className="lightbox-img"
              />
              <p className="lightbox-caption">{gallery[activeImageIndex].caption}</p>
            </div>

            <button className="lightbox-nav nav-next" onClick={nextImage}>
              <ChevronRight size={30} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }

        .gallery-item {
          position: relative;
          height: 280px;
          overflow: hidden;
          cursor: pointer;
          border-radius: 16px;
        }

        .gallery-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(26, 22, 20, 0.65);
          backdrop-filter: blur(4px);
          opacity: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          transition: opacity 0.3s ease;
          padding: 1rem;
        }

        .gallery-item:hover .gallery-thumb {
          transform: scale(1.08);
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-caption {
          color: #FFF;
          font-family: var(--font-serif);
          font-size: 1.1rem;
          text-align: center;
        }

        /* Lightbox Styles */
        .lightbox-container {
          position: relative;
          max-width: 90vw;
          max-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-img {
          max-width: 85vw;
          max-height: 75vh;
          border-radius: 12px;
          object-fit: contain;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          border: 1px solid var(--border-gold);
        }

        .lightbox-caption {
          text-align: center;
          color: #FFF;
          font-family: var(--font-serif);
          font-size: 1.2rem;
          margin-top: 1rem;
        }

        .lightbox-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: transparent;
          border: none;
          color: #FFF;
          cursor: pointer;
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.3);
          color: #FFF;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .lightbox-nav:hover {
          background: var(--gold-gradient);
          color: #1A1614;
        }

        .nav-prev { left: -60px; }
        .nav-next { right: -60px; }

        @media (max-width: 768px) {
          .nav-prev { left: -10px; }
          .nav-next { right: -10px; }
        }
      `}</style>
    </section>
  );
};
