<template>
  <section class="about">
    <div class="container">
      <div class="content">
        <div class="text-content">
          <h2 class="section-title">About Otaro</h2>
          <p class="description">
            Welcome to my creative corner! I handcraft unique, colorful MDF shelves that bring
            joy and personality to any space. Each piece features playful wavy shapes and
            beautiful pastel colors, designed to be both functional and artistic.
          </p>
          <p class="description">
            What started as a small passion project has grown into a creative business where
            I transform simple materials into delightful decorative pieces. Every shelf is
            carefully made with attention to detail and a love for bright, cheerful design.
          </p>
          <div class="features">
            <div class="feature">
              <span class="feature-icon">🎨</span>
              <span class="feature-text">Handcrafted with care</span>
            </div>
            <div class="feature">
              <span class="feature-icon">🌈</span>
              <span class="feature-text">Vibrant pastel colors</span>
            </div>
            <div class="feature">
              <span class="feature-icon">〰️</span>
              <span class="feature-text">Unique wavy designs</span>
            </div>
          </div>
        </div>
        <div class="image-placeholder">
          <div class="placeholder-content">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#a8dadc" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.3C64.8,55.4,53.8,67,40.4,73.8C27,80.6,11.2,82.6,-4.3,79.9C-19.8,77.2,-35.1,69.8,-48.3,59.7C-61.5,49.6,-72.6,36.8,-77.8,22C-83,7.2,-82.3,-9.6,-76.9,-24.5C-71.5,-39.4,-61.4,-52.4,-48.6,-60.1C-35.8,-67.8,-20.3,-70.2,-4.7,-71.9C10.9,-73.6,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
            <p>Your Creative Space</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 6rem 2rem;
  background: white;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  color: #8bc9a8;
  margin-bottom: 2rem;
  font-weight: 700;
}

.description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4b5563;
  margin-bottom: 1.5rem;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.5rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, #fff5e6 0%, #fef8f4 100%);
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.feature:hover {
  transform: translateX(5px);
}

.feature-icon {
  font-size: 2rem;
}

.feature-text {
  font-size: 1.1rem;
  color: #374151;
  font-weight: 500;
}

.image-placeholder {
  background: linear-gradient(135deg, #8bc9a8 0%, #a8d5ba 100%);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  position: relative;
}

.placeholder-content {
  text-align: center;
  color: white;
}

.placeholder-content svg {
  width: 100%;
  max-width: 300px;
  opacity: 0.3;
  margin-bottom: 1rem;
}

.placeholder-content p {
  font-size: 1.3rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  position: absolute;
  top: 50%;
  left: 50%;
}

@media (max-width: 968px) {
  .content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .image-placeholder {
    order: -1;
    height: 200px;
    min-height: 200px;
  }

  .about {
    padding: 4rem 1.5rem;
  }
}
</style>
