
"use client";

import { useState } from "react";

export default function EnergyCore() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="energy-canvas portrait-scene">
      {!imageError ? (
        <img
          src="/akila-portrait.png"
          alt="Akila — Software Developer"
          className="portrait-image"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="portrait-placeholder">
          Add your photo to public/akila-portrait.png
        </div>
      )}

      <div className="portrait-glow" aria-hidden="true" />
      <div className="portrait-scanline" aria-hidden="true" />
    </div>
  );
}
