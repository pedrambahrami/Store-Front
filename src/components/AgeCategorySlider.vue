<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-4 col-lg-6 col-md-8">
        <div class="title-area text-center">
          <h2 class="sec-title">خرید بر اساس سن</h2>
          <p class="sec-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        </div>
      </div>
    </div>

    <div class="slider-area text-center">
      <div class="category-card2" v-for="(slide, index) in visibleSlides" :key="index" style="display: inline-block; width: 280px; margin: 0 10px;">
        <a href="shop.html" class="box-img" :style="{ '--theme-color': slide.themeColor }" style="display: block; position: relative;">
          <div class="box-img-border" :style="{ '--theme-color': slide.borderColor }" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: 2px solid var(--theme-color); border-radius: 10px;"></div>
          <img :src="slide.img" :alt="slide.title" style="width: 100%; height: 180px; object-fit: cover; border-radius: 10px;" />
        </a>
        <h3 class="box-title" style="margin-top: 10px;">
          <a href="shop.html">{{ slide.title }}</a>
        </h3>
      </div>
    </div>

    <div style="text-align: center; margin-top: 20px;">
      <button @click="prev" :disabled="startIndex === 0" style="margin-right: 10px;">قبلی</button>
      <button @click="next" :disabled="startIndex + slidesToShow >= slides.length">بعدی</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';


const slides = [
  {
    img: '/img/category/category_card2_1.png',
    title: '0-2 سال',
    themeColor: '#C9E5EC',
    borderColor: '#E6F5F9',
  },
  {
    img: '/img/category/category_card2_2.png',
    title: '0-2 سال',
    themeColor: '#E5C3EB',
    borderColor: '#F6E6F9',
  },
  {
    img: '/img/category/category_card2_3.png',
    title: '4-7 سال',
    themeColor: '#BEEAB8',
    borderColor: '#E0FBDD',
  },
  {
    img: '/img/category/category_card2_4.png',
    title: '7-10 سال',
    themeColor: '#FFBBBB',
    borderColor: '#FFDCDC',
  },
  {
    img: '/img/category/category_card2_5.png',
    title: '12+ سال',
    themeColor: '#EEE78D',
    borderColor: '#FFFABD',
  },
];


const slidesToShow = 5;

const startIndex = ref(0);


const visibleSlides = computed(() => {
  return slides.slice(startIndex.value, startIndex.value + slidesToShow);
});

function next() {
  if (startIndex.value + slidesToShow < slides.length) {
    startIndex.value++;
  }
}

function prev() {
  if (startIndex.value > 0) {
    startIndex.value--;
  }
}
</script>

<style scoped>

</style>
