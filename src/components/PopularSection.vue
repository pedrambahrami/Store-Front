<template>
  <section class="position-relative space overflow-hidden bg-smoke3">
    <div
      class="cloud-bg-top-shape1 background-image"
      style="background-image: url('assets/img/shape/cloud.png')"
    ></div>
    <div
      class="cloud-bg-bottom-shape1 background-image"
      style="background-image: url('assets/img/shape/cloud.png')"
    ></div>
    <div class="container rtl">
      <div class="row justify-content-xl-between justify-content-center align-items-center">
        <div class="col-xl-4 col-lg-6 col-md-8">
          <div
            class="title-area text-xl-end text-center"
            data-cue="slideInUp"
            data-show="true"
            style="
              animation-name: slideInUp;
              animation-duration: 900ms;
              animation-timing-function: ease;
              animation-delay: 0ms;
              animation-direction: normal;
              animation-fill-mode: both;
            "
          >
            <h2 class="sec-title">موارد پرطرفدار</h2>
          </div>
        </div>
        <div class="col-xl-auto">
          <div
            class="sec-btn"
            data-cue="slideInUp"
            data-delay="100"
            data-show="true"
            style="
              animation-name: slideInUp;
              animation-duration: 900ms;
              animation-timing-function: ease;
              animation-delay: 100ms;
              animation-direction: normal;
              animation-fill-mode: both;
            "
          >
            <div class="filter-menu indicator-active filter-menu-active justify-content-center">
              <button
                v-for="cat in categories"
                :key="cat"
                @click="selectedCategory = cat"
                :class="['link-btn', 'tab-btn', selectedCategory === cat ? 'active' : '']"
                type="button"
              >
                {{ cat }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row flex-row-reverse gy-30 justify-content-center">
        <div class="col-xxl-7">
          <div class="row gy-30 filter-active">
            <div
              v-for="product in filteredProducts"
              :key="product.id"
              class="col-xl-4 col-lg-4 col-md-6 filter-item"
              style="position: relative"
            >
              <div
                class="ot-product product-grid bg-white"
                data-cue="slideInUp"
                data-show="true"
                style="
                  animation-name: slideInUp;
                  animation-duration: 900ms;
                  animation-timing-function: ease;
                  animation-delay: 0ms;
                  animation-direction: normal;
                  animation-fill-mode: both;
                "
              >
                <div class="product-img">
                  <img :src="product.image" alt="Product Image" />
                  <div class="actions">
                    <a href="wishlist.html" class="icon-btn"><i class="far fa-heart"></i></a>
                    <button class="icon-btn"><i class="fa-light fa-arrows-cross"></i></button>
                    <a href="#QuickView" class="icon-btn popup-content"
                      ><i class="far fa-eye"></i
                    ></a>
                  </div>
                </div>
                <div class="product-content">
                  <h3 class="box-title">
                    <a href="shop-details.html">{{ product.title }}</a>
                  </h3>
                  <span class="price">{{ product.price.toLocaleString('fa-IR') }} تومان</span>
                  <div class="woocommerce-product-rating">
                    <div class="star-rating" role="img" aria-label="امتیاز 5.00 از 5">
                      <span
                        >امتیاز <strong class="rating">5.00</strong> از 5 بر اساس
                        <span class="rating">1</span> رتبه بندی مشتری</span
                      >
                    </div>
                  </div>
                </div>
                <div class="product-hover-content">
                  <h3 class="box-title">
                    <a href="shop-details.html">{{ product.title }}</a>
                  </h3>
                  <span class="price">{{ product.price.toLocaleString('fa-IR') }} تومان</span>
                  <div class="woocommerce-product-rating">
                    <div class="star-rating" role="img" aria-label="امتیاز 5.00 از 5">
                      <span
                        >امتیاز <strong class="rating">5.00</strong> از 5 بر اساس
                        <span class="rating">1</span> رتبه بندی مشتری</span
                      >
                    </div>
                  </div>
                  <a class="ot-btn" href="cart.html"
                    ><i class="fa-light fa-basket-shopping me-1"></i> افزودن به سبد خرید</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-5 col-xl-6 col-lg-8">
          <a href="shop-details.html" class="ad-card"
            ><img class="w-100" src="/img/normal/ad1-1.png" alt="تصویر"
          /></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedCategory = ref('همه موارد')

const categories = ['همه موارد', 'اسباب بازی کودک', 'اسباب بازی فضای باز', 'کتاب کودک', 'لباس بچه']

const products = ref([
  {
    id: 1,
    title: 'لگو آموزشی',
    image: '/img/product/post-card1-3.png',
    price: 250000,
    category: 'اسباب بازی کودک',
  },
  {
    id: 2,
    title: 'توپ فضای باز',
    image: '/img/product/post-card1-4.png',
    price: 110000,
    category: 'اسباب بازی فضای باز',
  },
  {
    id: 3,
    title: 'کتاب قصه',
    image: '/img/product/post-card1-5.png',
    price: 80000,
    category: 'کتاب کودک',
  },
  {
    id: 4,
    title: 'لباس بچه طرح خرس',
    image: '/img/product/post-card1-6.png',
    price: 150000,
    category: 'لباس بچه',
  },
  {
    id: 5,
    title: 'ماشین کنترلی',
    image: '/img/product/post-card1-2.png',
    price: 490000,
    category: 'اسباب بازی فضای باز',
  },
])

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'همه موارد') return products.value
  return products.value.filter((p) => p.category === selectedCategory.value)
})
</script>


