<template>
  <section class="space">
    <div class="container rtl">
      <div class="scroll-wrapper">
        <!-- فلش سمت راست -->
        <button class="scroll-btn right" @click="scrollRight">&#10094;</button>

        <div class="scroll-container" ref="scrollContainer">
          <div class="row">
            <ProductCard
              v-for="product in productStore.allProducts"
              :key="product.id"
              :product="product"
            />
          </div>
        </div>

        <!-- فلش سمت چپ -->
        <button class="scroll-btn left" @click="scrollLeft">&#10095;</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ProductCard from './ProductCard.vue'
import { useProductStore } from '@/stores/productstore'
const productStore = useProductStore()
onMounted(() => {
  productStore.getAllProducts()
})
const scrollContainer = ref(null)

const scrollLeft = () => {
  scrollContainer.value.scrollBy({ left: -300, behavior: 'smooth' })
}

const scrollRight = () => {
  scrollContainer.value.scrollBy({ left: 300, behavior: 'smooth' })
}
</script>

<style scoped>
.scroll-wrapper {
  position: relative;
}

.scroll-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background 0.3s;
}

.scroll-btn:hover {
  background: white;
}

.scroll-btn.left {
  left: -15px;
}

.scroll-btn.right {
  right: -15px;
}

/* کانتینر اسکرول برای حذف کامل نوار */
.scroll-container {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.scroll-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.row {
  display: flex;
  flex-wrap: nowrap;
}
</style>
