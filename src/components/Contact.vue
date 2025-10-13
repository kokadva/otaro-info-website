<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="content">
        <div class="info-section">
          <h2 class="section-title">Let's Connect!</h2>
          <p class="description">
            Ready to add some color to your space? I'd love to hear from you!
            Send me an email if you want to make an order or if you have any ideas, questions, or custom requests.
          </p>

          <div class="contact-details">
            <div class="contact-item">
              <div class="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h3 class="contact-label">Email</h3>
                <a href="mailto:otaro.store@gmail.com" class="contact-value">otaro.store@gmail.com</a>
              </div>
            </div>
          </div>

          <div class="info-box">
            <p class="info-text">
              <strong>What to include:</strong><br>
              • Which design caught your eye<br>
              • Your preferred colors<br>
              • Your location for shipping details
            </p>
          </div>
        </div>

        <div class="visual-section">
          <div class="decorative-element">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#8bc9a8" d="M39.5,-65.5C50.9,-58.4,59.7,-47.3,65.4,-35C71.1,-22.7,73.7,-9.2,71.8,3.5C69.9,16.2,63.5,28.1,55.4,38.5C47.3,48.9,37.5,57.8,26.2,62.5C14.9,67.2,2.1,67.7,-10.5,66.5C-23.1,65.3,-35.5,62.4,-46.3,56.1C-57.1,49.8,-66.3,40.1,-71.2,28.5C-76.1,16.9,-76.7,3.4,-73.8,-9.1C-70.9,-21.6,-64.5,-33.1,-55.6,-42.5C-46.7,-51.9,-35.3,-59.2,-23.2,-66C-11.1,-72.8,1.7,-79.1,14.3,-78.8C26.9,-78.5,28.1,-72.6,39.5,-65.5Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div class="email-prompt">
            <p class="prompt-text">Click to send an email</p>
            <a href="mailto:otaro.store@gmail.com" class="email-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-content">
        <p class="footer-text">© 2025 Otaro. Handcrafted with love.</p>
        <div class="footer-wave">
          <svg viewBox="0 0 1200 50" preserveAspectRatio="none">
            <path d="M0,25 Q300,5 600,25 T1200,25 L1200,50 L0,50 Z" fill="rgba(139, 201, 168, 0.1)"/>
          </svg>
        </div>
      </div>
    </footer>
  </section>
</template>

<style scoped>
.contact {
  padding: 6rem 2rem 2rem;
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
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4b5563;
  margin-bottom: 3rem;
}

.contact-details {
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #fef8f4 0%, #fff5e6 100%);
  border-radius: 15px;
}

.icon-wrapper {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #8bc9a8 0%, #a8d5ba 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.contact-label {
  font-size: 0.9rem;
  color: #9ca3af;
  margin-bottom: 0.3rem;
  font-weight: 500;
}

.contact-value {
  font-size: 1.2rem;
  color: #8bc9a8;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-value:hover {
  color: #6fb592;
  text-decoration: underline;
}

.info-box {
  background: linear-gradient(135deg, #ffeca8 0%, #fff4c3 100%);
  padding: 1.5rem;
  border-radius: 15px;
  margin-top: 2rem;
}

.info-text {
  color: #4b5563;
  line-height: 1.8;
  font-size: 1rem;
}

.info-text strong {
  color: #374151;
}

.visual-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.decorative-element {
  position: absolute;
  width: 100%;
  max-width: 400px;
  opacity: 0.15;
  animation: pulse 4s ease-in-out infinite;
}

.decorative-element svg {
  width: 100%;
  height: auto;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.email-prompt {
  position: relative;
  z-index: 2;
  text-align: center;
}

.prompt-text {
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 2rem;
  font-weight: 500;
}

.email-button {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 3rem;
  background: linear-gradient(135deg, #8bc9a8 0%, #a8d5ba 100%);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(139, 201, 168, 0.3);
}

.email-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(139, 201, 168, 0.4);
}

.email-button svg {
  width: 32px;
  height: 32px;
}

.footer {
  margin-top: 6rem;
  position: relative;
}

.footer-content {
  position: relative;
  padding: 2rem 0;
}

.footer-text {
  text-align: center;
  color: #9ca3af;
  font-size: 0.95rem;
}

.footer-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: -1;
}

.footer-wave svg {
  width: 100%;
  height: 100%;
}

@media (max-width: 968px) {
  .content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .visual-section {
    order: -1;
  }

  .contact {
    padding: 4rem 1.5rem 2rem;
  }

  .decorative-element {
    max-width: 300px;
  }
}
</style>
