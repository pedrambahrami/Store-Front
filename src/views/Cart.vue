<template>
  <div>
    <!-- Breadcrumb -->
    <div
      class="breadcumb-wrapper background-image"
      :style="{ backgroundImage: 'url(/img/bg/breadcrumb-bg.png)' }"
    >
      <div class="container rtl">
        <div class="breadcumb-content">
          <h1 class="breadcumb-title slide-in-up">فهرست سبد خرید</h1>
          <ul class="breadcumb-menu">
            <li class="slide-in-up" style="animation-delay: 0ms">
              <a href="index.html">صفحه اصلی</a>
            </li>
            <li class="slide-in-up" style="animation-delay: 200ms">فهرست سبد خرید</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Cart Table -->
    <CartTable />

    <!-- Cart Summary -->
    <CartSummary />
  </div>
</template>

<script setup>
import CartTable from '@/components/CartTable.vue'
import CartSummary from '@/components/CartSummary.vue'
</script>

<style scoped>
.breadcumb-title {
  font-size: 32px;
  font-weight: bold;
}

.breadcumb-menu li {
  display: inline-block;
  margin-right: 10px;
}

/* انیمیشن مشابه قبل */
@keyframes slideInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.slide-in-up {
  animation-name: slideInUp;
  animation-duration: 900ms;
  animation-timing-function: ease;
  animation-fill-mode: both;
}
</style>
