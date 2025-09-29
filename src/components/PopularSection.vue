<template>
  <section class="position-relative space overflow-hidden bg-smoke3">
    <div class="container rtl">
      <div class="row justify-content-between align-items-center">
        <div class="col-xl-4 col-lg-6">
          <h2 class="sec-title text-xl-end text-center">موارد پرطرفدار</h2>
        </div>

        <div class="col-xl-auto">
          <div class="filter-menu indicator-active filter-menu-active justify-content-center">
            <button
              v-for="cat in categories"
              :key="cat"
              @click="selectedCategory = cat"
              :class="['link-btn', 'tab-btn', selectedCategory === cat ? 'active' : '']"
            >
              {{ cat }}
            </button>
          </div>
        </div>
      </div>

      <div class="row flex-row-reverse gy-30 justify-content-center mt-4">
        <div class="col-xxl-7">
          <div class="row gy-30 filter-active">
            <div
              v-for="product in filteredProducts"
              :key="product.id"
              class="col-xl-4 col-lg-4 col-md-6 filter-item"
            >
              <div class="ot-product product-grid bg-white">
                <div class="product-img">
                  <img :src="product.image" :alt="product.name" />
                  <div class="actions">
                    <button class="icon-btn"><i class="far fa-heart"></i></button>
                    <button class="icon-btn"><i class="fa-light fa-arrows-cross"></i></button>
                    <button class="icon-btn"><i class="far fa-eye"></i></button>
                  </div>
                </div>

                <div class="product-content">
                  <h3 class="box-title">{{ product.name }}</h3>
                  <span class="price">{{ product.price.toLocaleString('fa-IR') }} تومان</span>
                </div>

                <div class="product-hover-content">
                  <h3 class="box-title">{{ product.name }}</h3>
                  <span class="price">{{ product.price.toLocaleString('fa-IR') }} تومان</span>
                  <button class="ot-btn">
                    <i class="fa-light fa-basket-shopping me-1"></i>
                    افزودن به سبد خرید
                  </button>
                </div>
              </div>
            </div>

            <div v-if="store.loading" class="text-center">در حال بارگذاری...</div>
            <div v-if="!store.loading && filteredProducts.length === 0" class="text-center">
              محصولی یافت نشد
            </div>
          </div>
        </div>

        <div class="col-xxl-5 col-xl-6 col-lg-8">
          <a href="#" class="ad-card">
            <img class="w-100" src="/img/normal/ad1-1.png" alt="تصویر" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProductStore } from '@/stores/productstore'

const store = useProductStore()

const selectedCategory = ref('همه موارد')

onMounted(() => {
  store.getBests()
})

const categories = computed(() => {
  const cats = new Set(store.bestProducts.map((p) => p.category))
  return ['همه موارد', ...cats]
})

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'همه موارد') return store.bestProducts
  return store.bestProducts.filter((p) => p.category === selectedCategory.value)
})
</script>
