import { useState, useEffect } from "react";
import "./VirtualPlant.css";

function VirtualPlant() {
  const [water, setWater] = useState(() => {
    const savedWater = localStorage.getItem("plantWater");
    return savedWater ? parseInt(savedWater) : 5;
  });
  const [isAlive, setIsAlive] = useState(true);

  useEffect(() => {
    localStorage.setItem("plantWater", water.toString());
  }, [water]);

  useEffect(() => {
    if (!isAlive) return;

    const timer = setInterval(() => {
      setWater((prevWater) => {
        if (prevWater <= 1) {
          setIsAlive(false);
          return 0;
        }
        return prevWater - 1;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [isAlive]);

  const waterPlant = () => {
    if (water < 10) {
      setWater(water + 1);
      if (!isAlive && water + 1 > 0) {
        setIsAlive(true);
      }
    }
  };

  const resetPlant = () => {
    setWater(5);
    setIsAlive(true);
  };

  let status = "";
  let statusEmoji = "";
  let plantClass = "";

  if (!isAlive) {
    status = "🪦 Tanamanmu Mati 😭";
    statusEmoji = "💀";
    plantClass = "dead";
  } else if (water > 2) {
    status = "🌱 Tanamanmu Segar!";
    statusEmoji = "🌿";
    plantClass = "healthy";
  } else {
    status = "😢 Tanamanmu Mulai Layu...";
    statusEmoji = "🥀";
    plantClass = "wilting";
  }

  return (
    <div className={`virtual-plant ${plantClass}`}>
      <div className="plant-container">
        <div className="plant-emoji">{statusEmoji}</div>
        <h2>{status}</h2>
        <p>💧 Air tersisa: {water}</p>
        
        <div className="buttons">
          <button 
            onClick={waterPlant} 
            disabled={!isAlive && water >= 10}
            className="water-btn"
          >
            💦 Siram Tanaman
          </button>
          
          <button onClick={resetPlant} className="reset-btn">
            🔄 Reset Tanaman
          </button>
        </div>

        <div className="water-bar">
          <div 
            className="water-fill"
            style={{ width: `${(water / 10) * 100}%` }}
          ></div>
        </div>

        <p className="tip">
          {isAlive 
            ? "Tanaman akan kehilangan air setiap 3 detik!" 
            : "Tanamanmu sudah mati! Reset untuk memulai lagi."
          }
        </p>
      </div>
    </div>
  );
}

export default VirtualPlant;