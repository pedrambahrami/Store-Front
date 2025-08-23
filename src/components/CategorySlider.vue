<template>
  <section class="space-bottom overflow-hidden arrow-wrap">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-4 col-lg-6 col-md-8">
          <div class="title-area text-center">
            <h2
              class="sec-title"
              data-cue="slideInUp"
              data-show="true"
              :style="{
                animationName: 'slideInUp',
                animationDuration: '900ms',
                animationTimingFunction: 'ease',
                animationDelay: '0ms',
                animationDirection: 'normal',
                animationFillMode: 'both',
              }"
            >
              خرید بر اساس دسته
            </h2>
            <p
              class="sec-text"
              data-cue="slideInUp"
              data-delay="100"
              data-show="true"
              :style="{
                animationName: 'slideInUp',
                animationDuration: '900ms',
                animationTimingFunction: 'ease',
                animationDelay: '100ms',
                animationDirection: 'normal',
                animationFillMode: 'both',
              }"
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </p>
          </div>
        </div>
      </div>
      <div class="slider-area">
        <div
          class="swiper ot-slider swiper-initialized swiper-horizontal"
          id="categorySlider1"
          ref="categorySlider"
        >
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(category, index) in categories"
              :key="index"
              :style="{ width: '245px', marginRight: '30px' }"
            >
              <div
                class="category-card"
                :style="{
                  animationName: 'slideInUp',
                  animationDuration: '900ms',
                  animationTimingFunction: 'ease',
                  animationDelay: `${index * 270}ms`,
                  animationDirection: 'normal',
                  animationFillMode: 'both',
                }"
              >
                <div class="box-img" :style="{ '--theme-color': category.color }">
                  <img :src="category.image" :alt="category.title" />
                </div>
                <h3 class="box-title">
                  <a href="shop.html">{{ category.title }}</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <button data-slider-prev="#categorySlider1" class="slider-arrow slider-prev">
          <i class="far fa-arrow-left"></i>
        </button>
        <button data-slider-next="#categorySlider1" class="slider-arrow slider-next">
          <i class="far fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Swiper from 'swiper'
const categorySlider = ref(null)
const categories = ref([
  { title: 'بازی و اسباب بازی', image: '/img/category/category_card1_1.png', color: '#ad6643' },
  { title: 'کتاب‌های کودک', image: '/img/category/category_card1_2.png', color: '#9ad2fc' },
  { title: 'لباس پسرانه', image: '/img/category/category_card1_3.png', color: '#9cc6ff' },
  { title: 'لباس دخترانه', image: '/img/category/category_card1_4.png', color: '#f094a1' },
  { title: 'بطری شیر', image: '/img/category/category_card1_5.png', color: '#3598ba' },
  { title: 'بازی داخلی', image: '/img/category/category_card1_6.png', color: '#f75632' },
  { title: 'بازی و اسباب بازی', image: '/img/category/category_card1_1.png', color: '#ad6643' },
  { title: 'کتاب‌های کودک', image: '/img/category/category_card1_2.png', color: '#9ad2fc' },
  { title: 'لباس پسرانه', image: '/img/category/category_card1_3.png', color: '#9cc6ff' },
  { title: 'لباس دخترانه', image: '/img/category/category_card1_4.png', color: '#f094a1' },
  { title: 'بطری شیر', image: '/img/category/category_card1_5.png', color: '#3598ba' },
  { title: 'بازی داخلی', image: '/img/category/category_card1_6.png', color: '#f75632' },
])

let swiperInstance = null

onMounted(() => {
  swiperInstance = new Swiper(categorySlider.value, {
    breakpoints: {
      0: { slidesPerView: 1 },
      400: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
      1400: { slidesPerView: 6 },
    },
    spaceBetween: 30,
  })

  const prevButton = document.querySelector('.slider-prev')
  const nextButton = document.querySelector('.slider-next')
  if (prevButton && nextButton && swiperInstance) {
    prevButton.addEventListener('click', () => swiperInstance.slidePrev())
    nextButton.addEventListener('click', () => swiperInstance.slideNext())
  }
})

onUnmounted(() => {
  if (swiperInstance) {
    swiperInstance.destroy()
  }
})
</script>

<style scoped></style>
