<template>
  <header class="ot-header header-layout1">
    <div class="header-top">
      <div class="container rtl">
        <div class="row justify-content-center justify-content-lg-between align-items-center gy-2">
          <div class="col-auto d-none d-lg-block">
            <div class="header-links">
              <ul>
                <li>
                  <i class="fas fa-location-dot"></i>
                  <a target="_blank" href="https://www.google.com/maps/"
                    >میدان شریعتی - طبقه7 - واحد7</a
                  >
                </li>
                <li>
                  <i class="fas fa-envelope"></i>
                  <a href="mailto:info@example.com">pedram.bahrame1382@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-auto">
            <p class="header-notice">
              تخفیف فلش بیبی مارت: شروع از
              <span class="text-title">100% تخفیف</span>
            </p>
          </div>
          <div class="col-auto d-none d-xl-block">
            <div class="header-links">
              <ul>
                <li>
                  <i class="fal fa-comments-question"></i>
                  <a href="contact.html">راهنما</a>
                </li>
                <li>
                  <i class="fal fa-user"></i><router-link to="/auth">ورود | ثبت نام</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-auto header-middle rtl">
      <div class="header-middle-inner">
        <div class="logo-wrapper">
          <router-link to="/">
            <img src="/img/logo.svg" alt="بیبی مارت" />
          </router-link>
        </div>

        <div class="navigation-bar">
          <MainMenu />
        </div>

        <div class="header-button-wrapper">
          <form action="#" class="header-form">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="محصولات خود را تایپ کنید.." />
            </div>
            <button type="submit" class="submit-btn simple-icon">
              <i class="far fa-search"></i>
            </button>
          </form>
          <router-link to="/wishlist" class="icon-btn d-none d-sm-block">
            <span class="badge">3</span>
            <i class="far fa-heart"></i>
          </router-link>
          <button type="button" class="icon-btn sideMenuCart" @click="isCartOpen = true">
            <span class="badge">{{ cartStore.totalCount }}</span>
            <i class="far fa-basket-shopping"></i>
          </button>
        </div>
      </div>
    </div>

    <div v-if="isCartOpen" class="backdrop" @click="isCartOpen = false"></div>

    <transition name="slide">
      <CartSidebar v-if="isCartOpen" @close="isCartOpen = false" />
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CartSidebar from '@/components/CartSidebar.vue'
import { useCartStore } from '@/stores/cartStore'
import MainMenu from './MainMenu.vue'

const isCartOpen = ref(false)
const cartStore = useCartStore()

onMounted(() => {
  cartStore.getusercart()
})
</script>

<style>
.header-middle-inner {
  padding: 30px;
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  gap: 30px;
}

.logo-wrapper {
  flex-shrink: 0; 
}

.navigation-bar {
  flex-grow: 1; 
  display: flex;
  justify-content: flex-start; 
  align-items: center;
}

.header-button-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
}

.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
.navigation-bar {
  display: flex;
  align-items: start;
  
}

</style>
