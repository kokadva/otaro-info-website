<script setup lang="ts">
import { ref } from 'vue'

interface ShelfItem {
  id: number
  title: string
  image: string
  description: string
}

const shelves = ref<ShelfItem[]>([
  { id: 1, title: 'Mint Green Wavy Shelf', image: '/IMG_4538.jpg', description: 'Perfect for books and decor' },
  { id: 2, title: 'Soft Mint Display', image: '/IMG_4542.jpg', description: 'Elegant curved design' },
  { id: 3, title: 'Minimal Green Shelf', image: '/IMG_4557.jpg', description: 'Clean and modern' },
  { id: 4, title: 'Mint Statement Piece', image: '/IMG_4579_jpg.jpg', description: 'Eye-catching wave shape' },
  { id: 5, title: 'Stylish Green Shelf', image: '/IMG_4583.jpg', description: 'Functional art for your wall' },
])
</script>

<template>
  <section id="gallery" class="gallery">
    <div class="container">
      <h2 class="section-title">The Collection</h2>
      <p class="section-subtitle">Explore our handcrafted colorful shelves</p>

      <div class="gallery-grid">
        <div
          v-for="shelf in shelves"
          :key="shelf.id"
          class="shelf-card"
        >
          <div class="shelf-image">
            <img :src="shelf.image" :alt="shelf.title" />
            <div class="image-overlay"></div>
          </div>
          <div class="shelf-info">
            <h3 class="shelf-name">{{ shelf.title }}</h3>
            <p class="shelf-description">{{ shelf.description }}</p>
          </div>
        </div>
      </div>

      <div class="cta-section">
        <p class="cta-text">Love what you see? Let's create something special for your space!</p>
        <a href="#contact" class="cta-button">Order Your Shelf</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  padding: 6rem 2rem;
  background: linear-gradient(180deg, white 0%, #fef8f4 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  color: #8bc9a8;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 700;
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #6b7280;
  margin-bottom: 4rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.shelf-card {
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

.shelf-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.shelf-image {
  width: 100%;
  height: 350px;
  border-radius: 15px;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
  background: #f5f5f5;
}

.shelf-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.shelf-card:hover .shelf-image img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.shelf-card:hover .image-overlay {
  opacity: 1;
}

.shelf-info {
  text-align: center;
}

.shelf-name {
  font-size: 1.3rem;
  color: #374151;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.shelf-description {
  font-size: 0.95rem;
  color: #9ca3af;
}

.cta-section {
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #8bc9a8 0%, #f4d35e 100%);
  border-radius: 30px;
  margin-top: 3rem;
}

.cta-text {
  font-size: 1.3rem;
  color: white;
  margin-bottom: 2rem;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: white;
  color: #8bc9a8;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .gallery {
    padding: 4rem 1.5rem;
  }

  .gallery-grid {
    gap: 1.5rem;
  }

  .cta-section {
    padding: 2rem 1.5rem;
  }
}
</style>
