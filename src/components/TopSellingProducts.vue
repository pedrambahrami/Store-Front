<template>
  <section class="space">
    <div class="container">
      <div class="row justify-content-xl-between justify-content-center align-items-center rtl">
        <div class="col-xxl-4 col-lg-6 col-md-8">
          <div class="title-area text-xl-end text-center">
            <h2 class="sec-title">بیشترین فروش در این هفته</h2>
          </div>
        </div>
        <div class="col-xl-auto">
          <div class="sec-btn">
            <div class="filter-menu indicator-active filter-menu-active justify-content-center">
              <button
                v-for="(filter, index) in filters"
                :key="index"
                :class="['link-btn tab-btn', { active: activeFilter === filter.value }]"
                @click="activeFilter = filter.value"
              >
                {{ filter.label }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="row gy-30 filter-active">
        <div
          v-for="(product, index) in filteredProducts"
          :key="index"
          class="col-xxl-auto col-lg-4 col-md-6 filter-item"
        >
          <div class="ot-product product-grid">
            <div class="product-img">
              <img :src="product.image" alt="Product Image" />
              <span class="product-tag" v-if="product.tag || product.offer">
                <span class="tag" v-if="product.tag">{{ product.tag }}</span>
                <span class="offer" v-if="product.offer">{{ product.offer }}</span>
              </span>
              <div class="actions">
                <a href="wishlist.html" class="icon-btn"><i class="far fa-heart"></i></a>
                <button class="icon-btn"><i class="fa-light fa-arrows-cross"></i></button>
                <a href="#QuickView" class="icon-btn popup-content"><i class="far fa-eye"></i></a>
              </div>
            </div>
            <div class="product-content">
              <h3 class="box-title">
                <a href="shop-details.html">{{ product.title }}</a>
              </h3>
              <span class="price">
                {{ product.price }}
                <del v-if="product.oldPrice">{{ product.oldPrice }}</del>
              </span>
              <div class="woocommerce-product-rating">
                <div class="star-rating">
                  <span>
                    امتیاز <strong class="rating">{{ product.rating }}</strong> از 5 بر اساس
                    <span class="rating">{{ product.reviews }}</span> رتبه بندی مشتری
                  </span>
                </div>
              </div>
            </div>
            <div class="product-hover-content">
              <h3 class="box-title">
                <a href="shop-details.html">{{ product.title }}</a>
              </h3>
              <span class="price">
                {{ product.price }}
                <del v-if="product.oldPrice">{{ product.oldPrice }}</del>
              </span>
              <div class="woocommerce-product-rating">
                <div class="star-rating">
                  <span>
                    امتیاز <strong class="rating">{{ product.rating }}</strong> از 5 بر اساس
                    <span class="rating">{{ product.reviews }}</span> رتبه بندی مشتری
                  </span>
                </div>
              </div>
              <a class="ot-btn" href="cart.html">
                <i class="fa-light fa-basket-shopping me-1"></i> افزودن به سبد خرید
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const filters = [
  { label: 'همه موارد', value: '*' },
  { label: 'اسباب بازی های کودک', value: 'cat1' },
  { label: 'اسباب بازی در فضای باز', value: 'cat2' },
  { label: 'کتاب‌های کودک', value: 'cat3' },
  { label: 'لباس بچه', value: 'cat4' },
]

const activeFilter = ref('*')

const products = ref([
  {
    title: 'لباس یک تکه سفید',
    image: '/img/product/post-card1-1.png',
    price: 'تومان19.00',
    oldPrice: 'تومان26.99',
    rating: 5,
    reviews: 1,
    categories: ['cat3'],
    tag: 'داغ',
    offer: '30%-',
  },
  {
    title: 'تنچی دانت فارترا',
    image: '/img/product/post-card1-2.png',
    price: 'تومان30.00',
    rating: 5,
    reviews: 1,
    categories: ['cat2'],
  },
  {
    title: 'هیجان بازی!',
    image: '/img/product/post-card1-3.png',
    price: 'تومان30.00',
    oldPrice: 'تومان39.99',
    rating: 5,
    reviews: 1,
    categories: ['cat1', 'cat4'],
    offer: '19%-',
  },
  {
    title: 'لباس یک تکه سفید',
    image: '/img/product/post-card1-1.png',
    price: 'تومان19.00',
    oldPrice: 'تومان26.99',
    rating: 5,
    reviews: 1,
    categories: ['cat3'],
    tag: 'داغ',
    offer: '30%-',
  },
  {
    title: 'تنچی دانت فارترا',
    image: '/img/product/post-card1-2.png',
    price: 'تومان30.00',
    rating: 5,
    reviews: 1,
    categories: ['cat2'],
  },
  {
    title: 'هیجان بازی!',
    image: '/img/product/post-card1-3.png',
    price: 'تومان30.00',
    oldPrice: 'تومان39.99',
    rating: 5,
    reviews: 1,
    categories: ['cat1', 'cat4'],
    offer: '19%-',
  },
  {
    title: 'لباس یک تکه سفید',
    image: '/img/product/post-card1-1.png',
    price: 'تومان19.00',
    oldPrice: 'تومان26.99',
    rating: 5,
    reviews: 1,
    categories: ['cat3'],
    tag: 'داغ',
    offer: '30%-',
  },
  {
    title: 'تنچی دانت فارترا',
    image: '/img/product/post-card1-2.png',
    price: 'تومان30.00',
    rating: 5,
    reviews: 1,
    categories: ['cat2'],
  },
  {
    title: 'هیجان بازی!',
    image: '/img/product/post-card1-3.png',
    price: 'تومان30.00',
    oldPrice: 'تومان39.99',
    rating: 5,
    reviews: 1,
    categories: ['cat1', 'cat4'],
    offer: '19%-',
  },
  {
    title: 'هیجان بازی!',
    image: '/img/product/post-card1-3.png',
    price: 'تومان30.00',
    oldPrice: 'تومان39.99',
    rating: 5,
    reviews: 1,
    categories: ['cat1', 'cat4'],
    offer: '19%-',
  },
])

const filteredProducts = computed(() => {
  if (activeFilter.value === '*') return products.value
  return products.value.filter((p) => p.categories.includes(activeFilter.value))
})
</script>

<style scoped>
</style>
