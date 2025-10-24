<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTranslation } from '../i18n'

const { t } = useTranslation()

interface ShelfItem {
  id: number
  titleKey: string
  image: string
  descriptionKey: string
  galleryImages: string[]
}

const shelfData = ref<ShelfItem[]>([
  {
    id: 1,
    titleKey: 'shelves.item1.title',
    image: '/IMG_4538.jpg',
    descriptionKey: 'shelves.item1.description',
    galleryImages: ['/IMG_4538.jpg', '/IMG_4542.jpg', '/IMG_4557.jpg', '/IMG_4579_jpg.jpg']
  },
  {
    id: 2,
    titleKey: 'shelves.item2.title',
    image: '/IMG_4542.jpg',
    descriptionKey: 'shelves.item2.description',
    galleryImages: ['/IMG_4542.jpg', '/IMG_4538.jpg', '/IMG_4583.jpg', '/IMG_4557.jpg']
  },
  {
    id: 3,
    titleKey: 'shelves.item3.title',
    image: '/IMG_4557.jpg',
    descriptionKey: 'shelves.item3.description',
    galleryImages: ['/IMG_4557.jpg', '/IMG_4579_jpg.jpg', '/IMG_4538.jpg', '/IMG_4542.jpg']
  },
  {
    id: 4,
    titleKey: 'shelves.item4.title',
    image: '/IMG_4579_jpg.jpg',
    descriptionKey: 'shelves.item4.description',
    galleryImages: ['/IMG_4579_jpg.jpg', '/IMG_4583.jpg', '/IMG_4542.jpg', '/IMG_4557.jpg']
  },
  {
    id: 5,
    titleKey: 'shelves.item5.title',
    image: '/IMG_4583.jpg',
    descriptionKey: 'shelves.item5.description',
    galleryImages: ['/IMG_4583.jpg', '/IMG_4538.jpg', '/IMG_4579_jpg.jpg', '/IMG_4542.jpg']
  },
])

const shelves = computed(() => {
  return shelfData.value.map(shelf => ({
    ...shelf,
    title: t(shelf.titleKey),
    description: t(shelf.descriptionKey)
  }))
})

const isModalOpen = ref(false)
const currentShelf = ref<any>(null)
const currentImageIndex = ref(0)

const openModal = (shelf: any) => {
  currentShelf.value = shelf
  currentImageIndex.value = 0
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  currentShelf.value = null
  document.body.style.overflow = ''
}

const nextImage = () => {
  if (currentShelf.value) {
    currentImageIndex.value = (currentImageIndex.value + 1) % currentShelf.value.galleryImages.length
  }
}

const prevImage = () => {
  if (currentShelf.value) {
    currentImageIndex.value = currentImageIndex.value === 0
      ? currentShelf.value.galleryImages.length - 1
      : currentImageIndex.value - 1
  }
}

const goToImage = (index: number) => {
  currentImageIndex.value = index
}
</script>

<template>
  <section id="gallery" class="gallery">
    <div class="container">
      <h2 class="section-title">{{ t('gallery.title') }}</h2>
      <p class="section-subtitle">{{ t('gallery.subtitle') }}</p>

      <div class="gallery-grid">
        <div
          v-for="shelf in shelves"
          :key="shelf.id"
          class="shelf-card"
          @click="openModal(shelf)"
        >
          <div class="shelf-image">
            <img :src="shelf.image" :alt="shelf.title" />
            <div class="image-overlay">
              <span class="view-gallery">{{ t('gallery.viewGallery') }}</span>
            </div>
          </div>
          <div class="shelf-info">
            <h3 class="shelf-name">{{ shelf.title }}</h3>
            <p class="shelf-description">{{ shelf.description }}</p>
          </div>
        </div>
      </div>

      <Teleport to="body">
        <Transition name="modal">
          <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
            <div class="modal-content" @click.stop>
              <button class="close-button" @click="closeModal" aria-label="Close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div class="modal-header">
                <h3>{{ currentShelf?.title }}</h3>
                <p>{{ currentShelf?.description }}</p>
              </div>

              <div class="image-viewer">
                <button class="nav-button prev" @click="prevImage" aria-label="Previous image">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                <div class="main-image">
                  <img
                    v-if="currentShelf"
                    :src="currentShelf.galleryImages[currentImageIndex]"
                    :alt="`${currentShelf.title} - Image ${currentImageIndex + 1}`"
                  />
                </div>

                <button class="nav-button next" @click="nextImage" aria-label="Next image">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              <div class="thumbnail-strip">
                <div
                  v-for="(image, index) in currentShelf?.galleryImages"
                  :key="index"
                  class="thumbnail"
                  :class="{ active: index === currentImageIndex }"
                  @click="goToImage(index)"
                >
                  <img :src="image" :alt="`Thumbnail ${index + 1}`" />
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </Teleport>

      <div class="cta-section">
        <p class="cta-text">{{ t('gallery.ctaText') }}</p>
        <a href="#contact" class="cta-button">{{ t('gallery.ctaButton') }}</a>
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
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.shelf-card:hover .image-overlay {
  opacity: 1;
}

.view-gallery {
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  background: rgba(139, 201, 168, 0.95);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  transform: translateY(10px);
  transition: transform 0.3s ease;
}

.shelf-card:hover .view-gallery {
  transform: translateY(0);
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow-y: auto;
}

.modal-content {
  background: white;
  border-radius: 20px;
  max-width: 900px;
  width: 100%;
  padding: 2rem;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #f3f4f6;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #374151;
  z-index: 10;
}

.close-button:hover {
  background: #e5e7eb;
  transform: rotate(90deg);
}

.modal-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-right: 3rem;
}

.modal-header h3 {
  font-size: 1.8rem;
  color: #8bc9a8;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.modal-header p {
  color: #6b7280;
  font-size: 1rem;
}

.image-viewer {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.main-image {
  flex: 1;
  border-radius: 15px;
  overflow: hidden;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 500px;
}

.main-image img {
  width: 100%;
  height: auto;
  display: block;
}

.nav-button {
  background: rgba(139, 201, 168, 0.95);
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  flex-shrink: 0;
}

.nav-button:hover {
  background: #6bb896;
  transform: scale(1.1);
}

.thumbnail-strip {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 0.5rem 0;
  justify-content: center;
}

.thumbnail {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 3px solid transparent;
  flex-shrink: 0;
}

.thumbnail:hover {
  transform: scale(1.05);
  border-color: #a8d5ba;
}

.thumbnail.active {
  border-color: #8bc9a8;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.9);
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

  .modal-overlay {
    padding: 1rem;
  }

  .modal-content {
    padding: 1.5rem;
  }

  .modal-header {
    padding-right: 2rem;
  }

  .modal-header h3 {
    font-size: 1.4rem;
  }

  .nav-button {
    width: 40px;
    height: 40px;
  }

  .main-image {
    max-height: 350px;
  }

  .thumbnail {
    width: 60px;
    height: 60px;
  }
}
</style>
