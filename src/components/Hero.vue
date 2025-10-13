<template>
  <section class="hero">
    <div class="wave-bg">
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#a8d5ba" d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,149.3C672,128,768,96,864,101.3C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
    </div>

    <div class="hero-content">
      <h1 class="title">Otaro</h1>
      <p class="subtitle">Handcrafted Colorful Shelves</p>
      <p class="description">Pastel-colored, wavy-shaped MDF shelves to brighten your space</p>
      <a href="#contact" class="cta-button">Get in Touch</a>
    </div>

    <div class="floating-shapes">
      <svg class="floating-svg svg-1" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M10,50 Q30,20 50,50 T90,50 T130,50 T170,50" fill="none" stroke="#6bb896" stroke-width="15" stroke-linecap="round" opacity="0.45"/>
      </svg>
      <svg class="floating-svg svg-2" viewBox="0 0 220 90" opacity="0.4" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="70" cy="45" rx="50" ry="35" fill="#f5c842"/>
        <ellipse cx="130" cy="45" rx="60" ry="35" fill="#f5c842"/>
        <ellipse cx="180" cy="45" rx="40" ry="28" fill="#f5c842"/>
      </svg>
      <svg class="floating-svg svg-3" viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg">
        <path d="M20,60 Q30,30 40,60 T60,60 T80,60 T100,60 T120,60 T140,60" fill="none" stroke="#f5a3c7" stroke-width="18" stroke-linecap="round" opacity="0.4"/>
      </svg>
      <svg class="floating-svg svg-4" viewBox="0 0 240 85" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="42" rx="55" ry="33" fill="#7eb8d4" opacity="0.38"/>
        <ellipse cx="145" cy="42" rx="65" ry="33" fill="#7eb8d4" opacity="0.38"/>
        <ellipse cx="185" cy="42" rx="45" ry="28" fill="#7eb8d4" opacity="0.33"/>
        <ellipse cx="102" cy="37" rx="58" ry="28" fill="#a5d4e8" opacity="0.42"/>
      </svg>
      <svg class="floating-svg svg-5" viewBox="0 0 150 90" xmlns="http://www.w3.org/2000/svg">
        <path d="M15,45 Q25,25 35,45 T55,45 T75,45 T95,45 T115,45" fill="none" stroke="#f9c8a8" stroke-width="12" stroke-linecap="round" opacity="0.42"/>
      </svg>
      <svg class="floating-svg svg-6" viewBox="0 0 260 90" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="65" cy="45" rx="58" ry="36" fill="#e8b8a8" opacity="0.38"/>
        <ellipse cx="160" cy="45" rx="68" ry="36" fill="#e8b8a8" opacity="0.38"/>
        <ellipse cx="200" cy="45" rx="48" ry="31" fill="#e8b8a8" opacity="0.33"/>
        <ellipse cx="112" cy="40" rx="62" ry="31" fill="#f5d3c4" opacity="0.42"/>
      </svg>
      <svg class="floating-svg svg-7" viewBox="0 0 190 95" xmlns="http://www.w3.org/2000/svg">
        <path d="M12,48 Q28,22 44,48 T76,48 T108,48 T140,48 T172,48" fill="none" stroke="#8fc5ab" stroke-width="14" stroke-linecap="round" opacity="0.42"/>
      </svg>
      <svg class="floating-svg svg-8" viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="68" cy="45" rx="62" ry="36" fill="#f9b8d9" opacity="0.35"/>
        <ellipse cx="165" cy="45" rx="72" ry="36" fill="#f9b8d9" opacity="0.35"/>
        <ellipse cx="205" cy="45" rx="52" ry="31" fill="#f9b8d9" opacity="0.3"/>
        <ellipse cx="116" cy="40" rx="66" ry="31" fill="#ffd1e6" opacity="0.38"/>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fef8f4 0%, #fff5e6 100%);
  overflow: hidden;
  padding: 2rem;
}

.wave-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  z-index: 0;
}

.wave-bg svg {
  width: 100%;
  height: 100%;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  animation: fadeIn 1s ease-out;
}

.title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  color: #8bc9a8;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  text-shadow: 2px 2px 0 rgba(255, 235, 205, 0.5);
}

.subtitle {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: #6b7280;
  margin-bottom: 1rem;
  font-weight: 500;
}

.description {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #9ca3af;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #8bc9a8 0%, #a8d5ba 100%);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139, 201, 168, 0.3);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(139, 201, 168, 0.4);
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
}

.floating-svg {
  position: absolute;
  animation: float 8s ease-in-out infinite;
}

.svg-1 {
  width: 200px;
  height: 100px;
  top: 15%;
  left: 8%;
  animation-delay: 0s;
}

.svg-2 {
  width: 280px;
  height: 90px;
  top: 25%;
  right: 12%;
  animation-delay: 1.5s;
}

.svg-3 {
  width: 180px;
  height: 120px;
  bottom: 30%;
  left: 15%;
  animation-delay: 3s;
}

.svg-4 {
  width: 240px;
  height: 85px;
  top: 55%;
  right: 20%;
  animation-delay: 4.5s;
}

.svg-5 {
  width: 150px;
  height: 90px;
  bottom: 15%;
  right: 8%;
  animation-delay: 2s;
}

.svg-6 {
  width: 260px;
  height: 90px;
  top: 40%;
  left: 25%;
  animation-delay: 5s;
}

.svg-7 {
  width: 190px;
  height: 95px;
  bottom: 20%;
  left: 35%;
  animation-delay: 3.5s;
}

.svg-8 {
  width: 270px;
  height: 90px;
  top: 65%;
  right: 10%;
  animation-delay: 6s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 90vh;
    padding: 1rem;
  }

  .floating-svg {
    display: none;
  }
}
</style>
