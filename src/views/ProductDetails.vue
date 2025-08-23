<template>
  <section class="space">
    <div class="container rtl" v-if="product">
      <div class="row">
        <div class="col-md-6">
          <img :src="product.image" :alt="product.title" class="w-100 rounded shadow" />
        </div>
        <div class="col-md-6">
          <h1 class="sec-title">{{ product.title }}</h1>
          <p class="text-muted">{{ product.description }}</p>
          <div class="price text-primary h4">{{ product.price.toLocaleString() }} تومان</div>
          <button class="ot-btn mt-3">افزودن به سبد خرید</button>
        </div>
      </div>
    </div>
    <div class="container rtl text-center" v-else>
      <h3>❌ محصول یافت نشد</h3>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const productId = route.params.id

const products = [
  {
    id: '1',
    title: 'عروسک خرسی بزرگ',
    image: '/img/post-card1-27.png',
    price: 390000,
    description: 'این یک عروسک نرم و بامزه برای کودکان است.',
  },
  {
    id: '2',
    title: 'ماشین کنترلی',
    image: '/img/product2.jpg',
    price: 490000,
    description: 'ماشینی جذاب با کنترل از راه دور برای کودکان بالای ۴ سال.',
  },
  {
    id: '3',
    title: 'لگو آموزشی',
    image: '/img/product3.jpg',
    price: 250000,
    description: 'قطعات لگو مناسب برای خلاقیت و آموزش ساخت.',
  },
  {
    id: '4',
    title: 'توپ پارچه‌ای کودک',
    image: '/img/product4.jpg',
    price: 110000,
    description: 'توپ نرم مخصوص کودکان نوپا، بدون خطر.',
  },
  {
    id: '5',
    title: 'ست نقاشی کودک',
    image: '/img/product5.jpg',
    price: 180000,
    description: 'دارای مداد رنگی، دفتر طراحی و پالت رنگ برای کودک.',
  },
]

const product = ref(products.find((p) => p.id === productId))
</script>
