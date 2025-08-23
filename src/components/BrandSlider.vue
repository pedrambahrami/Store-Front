<template>
  <section class="space-bottom">
    <div class="container ot-container">
      <div
        class="swiper ot-slider"
        id="blogSlider1"
        :data-slider-options="JSON.stringify(sliderOptions)"
      >
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(brand, index) in brands"
            :key="index"
            :style="{ width: '220px', marginRight: '30px' }"
          >
            <div
              class="brand-card"
              data-cue="slideInUp"
              data-show="true"
              :style="{
                animationName: 'slideInUp',
                animationDuration: '900ms',
                animationTimingFunction: 'ease',
                animationDelay: `${index * 270}ms`,
                animationDirection: 'normal',
                animationFillMode: 'both',
              }"
            >
              <a :href="brand.link" target="_blank">
                <img :src="brand.image" alt="Brand Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

const sliderOptions = {
  breakpoints: {
    0: { slidesPerView: 2 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 4 },
    1200: { slidesPerView: 5 },
    1400: { slidesPerView: 7 },
  },
}

const brands = [
  { image: '/img/brand/brand_1_1.png', link: 'https://themeforest.net/' },
  { image: '/img/brand/brand_1_2.png', link: 'https://themeforest.net/' },
  { image: '/img/brand/brand_1_3.png', link: 'https://themeforest.net/' },
  { image: '/img/brand/brand_1_4.png', link: 'https://themeforest.net/' },
  { image: '/img/brand/brand_1_5.png', link: 'https://themeforest.net/' },
  { image: '/img/brand/brand_1_6.png', link: 'https://themeforest.net/' },
  { image: '/img/brand/brand_1_7.png', link: 'https://themeforest.net/' },
]

onMounted(() => {
  new Swiper('#blogSlider1', sliderOptions)
})
</script>

<style scoped>
.brand-card img {
  max-width: 100%;
  display: block;
}
</style>
