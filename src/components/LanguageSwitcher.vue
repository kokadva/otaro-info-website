<script setup lang="ts">
import { useTranslation, type Locale } from '../i18n'

const { locale, setLocale } = useTranslation()

const toggleLanguage = () => {
  const newLocale: Locale = locale.value === 'en' ? 'ka' : 'en'
  setLocale(newLocale)
}
</script>

<template>
  <div class="language-switcher">
    <button @click="toggleLanguage" class="lang-button" :aria-label="`Switch to ${locale === 'en' ? 'Georgian' : 'English'}`">
      <span class="lang-icon">🌐</span>
      <span class="lang-text">{{ locale === 'en' ? 'EN' : 'ქარ' }}</span>
    </button>
  </div>
</template>

<style scoped>
.language-switcher {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 100;
}

.lang-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: white;
  border: 2px solid #8bc9a8;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: #374151;
}

.lang-button:hover {
  background: #8bc9a8;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 201, 168, 0.3);
}

.lang-icon {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.lang-button:hover .lang-icon {
  transform: rotate(20deg);
}

.lang-text {
  font-size: 0.95rem;
  letter-spacing: 0.05em;
}

@media (max-width: 768px) {
  .language-switcher {
    top: 1rem;
    right: 1rem;
  }

  .lang-button {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }

  .lang-icon {
    font-size: 1rem;
  }

  .lang-text {
    font-size: 0.85rem;
  }
}
</style>
