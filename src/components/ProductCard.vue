<template>
  <div class="ot-product product-grid bg-red">
    <div class="product-img">
      <img :src="product.image" alt="Product Image" />
      <div class="actions">
        <button class="icon-btn">
          <i :class="false ? 'fas fa-heart' : 'far fa-heart'"></i>
        </button>
        <button class="icon-btn"><i class="fa-light fa-arrows-cross"></i></button>
        <a href="#QuickView" class="icon-btn popup-content"><i class="far fa-eye"></i></a>
      </div>
    </div>

    <div class="product-content">
      <h3 class="box-title">
        <a href="shop-details.html">{{ product.name }}</a>
      </h3>
      <span class="price">{{ product.price.toLocaleString('fa-IR') }} تومان</span>
    </div>

    <div class="product-hover-content">
      <h3 class="box-title">
        <a href="shop-details.html">{{ product.name }}</a>
      </h3>
      <span class="price">{{ product.price.toLocaleString('fa-IR') }} تومان</span>

      <a class="ot-btn" href="#" @click.prevent="addToCart(product)">
        <i class="fa-light fa-basket-shopping me-1"></i> افزودن به سبد خرید
      </a>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore'
const cartStore = useCartStore()


const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

function addToCart(product) {
  cartStore.addToCart(product)
  console.log('سبد خرید:', cartStore.items)
}
</script>

<style>
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