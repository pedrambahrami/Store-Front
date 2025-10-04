<template>
  <section>
    <div class="container z-index-common rtl">
      <div
        class="cta-box position-relative background-image"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
      >
        <div class="body-particle" id="cta-particle">
          <canvas class="particles-js-canvas-el" style="width: 100%; height: 100%"></canvas>
        </div>

        <div class="row">
          <div class="col-xl-6">
            <div class="box-content text-xl-end text-center">
              <div class="title-area mb-30">
                <h3 class="box-title">
                  <a :href="productLink">{{ title }}</a>
                </h3>
              </div>
              <a :href="productLink" class="ot-btn style-white">
                {{ buttonText }}
                <i class="fas fa-arrow-left ms-2"></i>
              </a>
            </div>
          </div>

          <div class="col-xl-6 align-self-end">
            <div class="cta-thumb2-1 text-xl-end text-center">
              <img :src="productImage" alt="تصویر" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'کت بادی لحاف دار',
  },
  productLink: {
    type: String,
    default: 'shop-details.html',
  },
  buttonText: {
    type: String,
    default: 'اکنون خرید کنید',
  },
  backgroundImage: {
    type: String,
    default: '/img/bg/cta_bg_2_1.png',
  },
  productImage: {
    type: String,
    default: '/img/normal/cta-thumb2-1.png',
  },
})
</script>

<style scoped>
</style>
