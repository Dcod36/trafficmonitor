import React, { useState, useEffect } from 'react';
import './TrafficViewer.css';
import { useNavigate } from 'react-router-dom';
const TrafficViewer = () => {
  const [day, setDay] = useState("Monday");
  const [time, setTime] = useState("8am");
  const [currentSize, setCurrentSize] = useState('medium');
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate(); // ⬅️ Add this

const handleNavigate = () => {
  navigate('/report-traffic'); // ⬅️ Navigate to /report-traffic
};


  const screenshots = {
    Monday: {
      "8am": "traffic-screenshots/mon8am.png",
      "10am": "traffic-screenshots/mon10am.png",
      "12pm": "traffic-screenshots/mon12pm.png",
      "2pm": "traffic-screenshots/mon2pm.png",
      "4pm": "traffic-screenshots/mon4pm.png",
      "6pm": "traffic-screenshots/mon6pm.png",
      "8pm": "traffic-screenshots/mon8pm.png",
    },
    Tuesday: {
      "8am": "traffic-screenshots/tue8am.png",
      "10am": "traffic-screenshots/tue10am.png",
      "12pm": "traffic-screenshots/tue12pm.png",
      "2pm": "traffic-screenshots/tue2pm.png",
      "4pm": "traffic-screenshots/tue4pm.png",
      "6pm": "traffic-screenshots/tue6pm.png",
      "8pm": "traffic-screenshots/tue8pm.png",
    },
    Wednesday: {
      "8am": "traffic-screenshots/wed8am.png",
      "10am": "traffic-screenshots/wed10am.png",
      "12pm": "traffic-screenshots/wed12pm.png",
      "2pm": "traffic-screenshots/wed2pm.png",
      "4pm": "traffic-screenshots/wed4pm.png",
      "6pm": "traffic-screenshots/wed6pm.png",
      "8pm": "traffic-screenshots/wed8pm.png",
    },
    Thursday: {
      "8am": "traffic-screenshots/thur8am.png",
      "10am": "traffic-screenshots/thur10am.png",
      "12pm": "traffic-screenshots/thur12pm.png",
      "2pm": "traffic-screenshots/thur2pm.png",
      "4pm": "traffic-screenshots/thur4pm.png",
      "6pm": "traffic-screenshots/thur6pm.png",
      "8pm": "traffic-screenshots/thur8pm.png",
    },
    Friday: {
      "8am": "traffic-screenshots/fri8am.png",
      "10am": "traffic-screenshots/fri10am.png",
      "12pm": "traffic-screenshots/fri12pm.png",
      "2pm": "traffic-screenshots/fri2pm.png",
      "4pm": "traffic-screenshots/fri4pm.png",
      "6pm": "traffic-screenshots/fri6pm.png",
      "8pm": "traffic-screenshots/fri8pm.png",
    },
    Saturday: {
      "8am": "traffic-screenshots/sat8am.png",
      "10am": "traffic-screenshots/sat10am.png",
      "12pm": "traffic-screenshots/sat12pm.png",
      "2pm": "traffic-screenshots/sat2pm.png",
      "4pm": "traffic-screenshots/sat4pm.png",
      "6pm": "traffic-screenshots/sat6pm.png",
      "8pm": "traffic-screenshots/sat8pm.png",
    },
  };

  const handleDayChange = (e) => {
    setDay(e.target.value);
    setImageLoaded(false);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    setImageLoaded(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageLoaded(false);
  };

  const handleSizeChange = (size) => {
    setCurrentSize(size);
  };

  const handleSubmit = () => {
    alert(`📊 Details Submitted!\n\nSelected: ${day} at ${time}\nImage Size: ${currentSize}`);
  };

  const createParticle = () => {
    const particles = ['🚗', '🚙', '🚚', '🏍️', '🚌'];
    return particles[Math.floor(Math.random() * particles.length)];
  };

  // Create floating particles effect
  useEffect(() => {
    const interval = setInterval(() => {
      const particle = document.createElement('div');
      particle.innerHTML = createParticle();
      particle.className = 'floating-particle';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.animationDuration = (3 + Math.random() * 3) + 's';
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (document.body.contains(particle)) {
          document.body.removeChild(particle);
        }
      }, 6000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const FloatingElements = () => (
    <div className="floating-elements">
      <div className="floating-element">🚗</div>
      <div className="floating-element">🚙</div>
      <div className="floating-element">🚚</div>
      <div className="floating-element">🏍️</div>
    </div>
  );

  const SizeControls = () => (
    <div className="size-controls">
      {['small', 'medium', 'large', 'extra-large'].map((size) => (
        <button
          key={size}
          className={`size-btn ${currentSize === size ? 'active' : ''}`}
          onClick={() => handleSizeChange(size)}
        >
          {size.charAt(0).toUpperCase() + size.slice(1).replace('-', ' ')}
        </button>
      ))}
    </div>
  );

  const ImagePreview = () => {
    const imageSrc = screenshots[day]?.[time];
    
    return (
      <div className="image-container">
        <div 
          className={`image-wrapper size-${currentSize}`}
          key={`${day}-${time}`} // Force re-render for animation
        >
          {imageSrc ? (
            <>
              <img
                src={imageSrc}
                alt={`Traffic on ${day} at ${time}`}
                className="traffic-image"
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
              <div className="image-overlay"></div>
            </>
          ) : (
            <div className="loading-placeholder">
              🚦 Traffic data for {day} at {time}<br />
              <small>Image not available</small>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="traffic-viewer-container">
      <FloatingElements />
      
      <div className="container">
        <div className="card">
          <div className="header">
            <h2>🚦 Traffic Visualizer</h2>
            <p>View traffic patterns across different days and times</p>
          </div>

          <div className="content">
            <div className="controls">
              <div className="form-group">
                <label>📅 Select Day</label>
                <select value={day} onChange={handleDayChange}>
                  {Object.keys(screenshots).map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>🕐 Select Time</label>
                <select value={time} onChange={handleTimeChange}>
                  {Object.keys(screenshots[day] || {}).map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="submit-container">
              <button className="submit-btn" style={{ marginTop: "10px" }} onClick={handleNavigate}>
                🚨 Report a Traffic Incident
              </button>
              <button className="submit-btn" onClick={() => navigate('/get-reports')}>
                📋 View Live Reports
              </button>
            </div>


            <div className="preview-section">
              <h3 className="preview-title">
                Traffic Preview: {day} at {time}
              </h3>
              
              <SizeControls />
              <ImagePreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficViewer;