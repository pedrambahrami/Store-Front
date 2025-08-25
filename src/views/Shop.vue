<template>
  <div class="shop-page container rtl">
    <div
      class="breadcumb-wrapper rtl background-image"
      style="background-image: url('/img/bg/breadcrumb-bg.png')"
    >
      <div class="container">
        <div class="breadcumb-content">
          <h1
            class="breadcumb-title"
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
            فروشگاه گرید
          </h1>
          <ul class="breadcumb-menu">
            <li
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
              <a href="#">صفحه اصلی</a>
            </li>
            <li
              data-cue="slideInUp"
              data-delay="100"
              data-show="true"
              style="
                animation-name: slideInUp;
                animation-duration: 900ms;
                animation-timing-function: ease;
                animation-delay: 370ms;
                animation-direction: normal;
                animation-fill-mode: both;
              "
            >
              فروشگاه گرید
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="product-grid">
      <ProductCard v-for="product in productStore.allProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { onMounted, ref } from 'vue'

import { useProductStore } from '@/stores/productstore'
const productStore = useProductStore()
onMounted(() => {
  productStore.getAllProducts()
})
</script>

<style scoped>
.page-title {
  margin-bottom: 20px;
  text-align: center;
}


.product-grid {
  display: flex;
  flex-direction: column;
  gap: 20px; 
}

.product-card {
  width: 100%; 
}
</style>
