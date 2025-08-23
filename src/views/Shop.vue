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
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'

const products = [
  { id: 1, title: 'چرخش دوگانه فراتر از', price: 12000, image: '/img/products/post-card1-6.png' },
  { id: 2, title: 'عروسک قرمز گرد', price: 14000, image: '/img/products/post-card1-15.png' },
  { id: 3, title: 'لباس یک تکه سفید', price: 19000, image: '/img/products/post-card1-1.png' },
]
</script>

<style scoped>
.page-title {
  margin-bottom: 20px;
  text-align: center;
}

/* همه محصولات زیر هم */
.product-grid {
  display: flex;
  flex-direction: column; /* چینش عمودی */
  gap: 20px; /* فاصله بین محصولات */
}

.product-card {
  width: 100%; /* کل عرض رو بگیره */
}
</style>
