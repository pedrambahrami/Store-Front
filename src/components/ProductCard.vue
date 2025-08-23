<template>
  <div class="product-container">
    <!-- product card -->
    <div v-for="product in products" :key="product.id" class="product-card">
      <div class="ot-product product-grid bg-white">
        <div class="product-img">
          <img :src="product.image" alt="Product Image" />
          <div class="actions">
            <button class="icon-btn" @click="addToWishlist(product)">
              <i :class="isInWishlist(product) ? 'fas fa-heart' : 'far fa-heart'"></i>
            </button>
            <button class="icon-btn"><i class="fa-light fa-arrows-cross"></i></button>
            <a href="#QuickView" class="icon-btn popup-content"><i class="far fa-eye"></i></a>
          </div>
        </div>

        <div class="product-content">
          <h3 class="box-title">
            <a href="shop-details.html">{{ product.title }}</a>
          </h3>
          <span class="price">{{ product.price.toLocaleString('fa-IR') }} تومان</span>
        </div>

        <div class="product-hover-content">
          <h3 class="box-title">
            <a href="shop-details.html">{{ product.title }}</a>
          </h3>
          <span class="price">{{ product.price.toLocaleString('fa-IR') }} تومان</span>

          <a class="ot-btn" href="#" @click.prevent="addToCart(product)">
            <i class="fa-light fa-basket-shopping me-1"></i> افزودن به سبد خرید
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCartStore } from '@/stores/cartStore' // ✅ ایمپورت استور

const cartStore = useCartStore() // ✅ ساخت نمونه استور

const products = ref([
  { id: 1, title: 'لگو آموزشی', image: '/img/product/post-card1-3.png', price: 250000 },
  { id: 2, title: 'توپ فضای باز', image: '/img/product/post-card1-4.png', price: 110000 },
  { id: 3, title: 'کتاب قصه', image: '/img/product/post-card1-5.png', price: 80000 },
  { id: 4, title: 'لباس بچه طرح خرس', image: '/img/product/post-card1-6.png', price: 150000 },

])

const wishlist = ref([])

// ✅ افزودن به سبد خرید (الان با Pinia)
function addToCart(product) {
  cartStore.addToCart(product)
  console.log('سبد خرید:', cartStore.items)
}

function addToWishlist(product) {
  if (!isInWishlist(product)) {
    wishlist.value.push(product)
  } else {
    wishlist.value = wishlist.value.filter((p) => p.id !== product.id)
  }
}

function isInWishlist(product) {
  return wishlist.value.some((p) => p.id === product.id)
}
</script>

<style>
.product-container {
  padding-top: 10px;

  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  gap: 20px;
  width: 100%;
  padding-bottom: 10px;
  -webkit-overflow-scrolling: touch;
}
.product-card {
  box-sizing: border-box;
  min-width: calc(25% - 15px);
}
.icon-btn {
  border: none;
  background: none;
  cursor: pointer;
}
</style>

<!-- <template>
  <div class="ot-product product-grid group">
 
    <div class="product-img">
      <img :src="products?.image" :alt="products?.title" />
      <button class="favorite-btn" @click="toggleFavorite">
        <i :class="isFavorite ? 'fas fa-heart' : 'far fa-heart'"></i>
      </button>
    </div>
    <div class="product-content">
      <h3 class="box-title">{{ products.title }}</h3>
      <span class="price">{{ formatPrice(products?.price) }} تومان</span>
    </div>
    <div class="button-container">
      <button class="button" type="button">افزودن به سبد خرید</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  products: {
    type: Object,
  },
})




const isFavorite = ref(false)

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('fa-IR').format(price)
}
</script>

<style scoped>
.ot-product {
  direction: rtl;
  position: relative;
  background: white;
  border-radius: 10px;
  padding: 1rem;
  transition: box-shadow 0.3s ease;
}

.ot-product:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-img {
  width: 100%;
  height: 200px;
  position: relative;
}

.product-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.product-content {
  text-align: right;
  margin-top: 1rem;
}

.box-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
}

.price {
  font-size: 1rem;
  color: #00bbae;
}

.button-container {
  width: 100%;
  display: flex;
  justify-content: end;
  opacity: 0;
  transform: translateY(10px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.group:hover .button-container {
  opacity: 1;
  transform: translateY(0);
}

.button {
  width: 120px;
  border: none;
  border-radius: 99px;
  font-size: 13px;
  background-color: #00bbae;
  color: white;
  padding: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.button::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #103741;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: -1;
}

.button:hover::before {
  transform: translateX(0);
}

.button:hover {
  color: white;
}

.favorite-btn {
  position: absolute;
  top: 0px;
  left: 0px;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.favorite-btn:hover {
  background: rgba(255, 255, 255, 1);
}

.favorite-btn i {
  font-size: 18px;
  color: #ff4d4f;
}

.favorite-btn .fas.fa-heart {
  color: #ff4d4f;
}
</style> -->
