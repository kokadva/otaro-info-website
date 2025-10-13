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
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
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

.shape {
  position: absolute;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, #8bc9a8 0%, #a8d5ba 100%);
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #f4d35e 0%, #fae588 100%);
  bottom: 25%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #e8d5c4 0%, #f5e6d3 100%);
  top: 60%;
  left: 20%;
  animation-delay: 4s;
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

  .shape {
    display: none;
  }
}
</style>
