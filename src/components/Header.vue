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
              تخفیف فلش بیبی مارت: شروع از <span class="text-title">100% تخفیف</span>
            </p>
          </div>
          <div class="col-auto d-none d-xl-block">
            <div class="header-links">
              <ul>
                <li><i class="fal fa-comments-question"></i> <a href="contact.html">راهنما</a></li>
                <li>
                  <i class="fal fa-user"></i><router-link to="/auth">ورود | ثبت نام</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <li class="category-menu" :class="{ active: isCategoryOpen }">
      <a href="javascript:void(0)" class="category-toggle" @click="toggleCategory">
        <i class="fa fa-bars"></i> دسته‌بندی کالاها
      </a>
      <div class="mega-menu">
        <div v-for="cat in categories" :key="cat.id" class="mega-col">
          <h4>{{ cat.name }}</h4>
          <ul>
            <li v-for="sub in cat.subcategories" :key="sub.id">
              <router-link :to="'/category/' + sub.slug">{{ sub.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </li>

    <div class="sticky-wrapper">
      <div class="menu-area">
        <div class="container rtl">
          <div class="row align-items-center justify-content-between">
            <div class="col-auto">
              <div class="header-logo">
                <router-link to="/">
                  <img src="/img/logo.svg" alt="بیبی مارت" />
                </router-link>
              </div>
            </div>

            <div class="col-auto">
              <nav class="main-menu d-none d-lg-inline-block">
                <ul>
                  <li class="menu-item-has-children">
                    <router-link to="/">صفحه اصلی</router-link>
                    <ul class="sub-menu">
                      <li><router-link to="/">صفحه اول</router-link></li>
                      <li><router-link to="/home2">صفحه دوم</router-link></li>
                      <li><router-link to="/home3">صفحه سوم</router-link></li>
                    </ul>
                  </li>

                  <li class="menu-item-has-children">
                    <a href="#">خرید</a>
                    <ul class="sub-menu">
                      <li><router-link to="shop">خرید</router-link></li>
                      <li><router-link to="/shop-details">جزئیات فروشگاه</router-link></li>
                      <li><router-link to="/cart">سبد خرید</router-link></li>
                      <li><router-link to="/checkout">تسویه حساب</router-link></li>
                      <li><router-link to="/wishlist">لیست علاقمندی</router-link></li>
                    </ul>
                  </li>

                  <li class="menu-item-has-children">
                    <a href="#">صفحات</a>
                    <ul class="sub-menu">
                      <li><router-link to="/about">درباره</router-link></li>
                      <li><router-link to="/faq">سوالات متداول</router-link></li>
                      <li><router-link to="/testimonial">نظرات</router-link></li>
                      <li><router-link to="/error">صفحه خطا</router-link></li>
                    </ul>
                  </li>

                  <li class="menu-item-has-children">
                    <a href="#">وبلاگ</a>
                    <ul class="sub-menu">
                      <li><router-link to="/blog">وبلاگ</router-link></li>
                      <li><router-link to="/blog-grid">سبک شبکه وبلاگ</router-link></li>
                      <li><router-link to="/blog-details">جزئیات وبلاگ</router-link></li>
                    </ul>
                  </li>

                  <li><router-link to="/contact">با ما تماس بگیرید</router-link></li>
                </ul>
              </nav>
            </div>

            <div class="col-auto">
              <div class="header-button">
                <form action="#" class="header-form">
                  <!-- جایگزین div.form-group با select -->

                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="محصولات خود را تایپ کنید.."
                    />
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
                <button type="button" class="icon-btn sideMenuInfo d-none d-lg-block">
                  <i class="far fa-bars-sort"></i>
                </button>
                <button type="button" class="ot-menu-toggle d-block d-lg-none">
                  <i class="far fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
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
const isCartOpen = ref(false)
import { useCartStore } from '@/stores/cartStore'
const cartStore = useCartStore()

onMounted(() => {
  cartStore.getusercart()
})
const isCategoryOpen = ref(false)

function toggleCategory() {
  isCategoryOpen.value = !isCategoryOpen.value
}

const categories = ref([
  {
    id: 1,
    name: 'کالای دیجیتال',
    subcategories: [
      { id: 11, name: 'موبایل', slug: 'mobile' },
      { id: 12, name: 'لپ‌تاپ', slug: 'laptop' },
      { id: 13, name: 'ساعت هوشمند', slug: 'smart-watch' },
    ],
  },
  {
    id: 2,
    name: 'خانه و آشپزخانه',
    subcategories: [
      { id: 21, name: 'لوازم برقی', slug: 'home-appliances' },
      { id: 22, name: 'دکوراسیون', slug: 'decoration' },
    ],
  },
  {
    id: 3,
    name: 'مد و پوشاک',
    subcategories: [
      { id: 31, name: 'زنانه', slug: 'women' },
      { id: 32, name: 'مردانه', slug: 'men' },
    ],
  },
  {
    id: 4,
    name: 'سلامت و زیبایی',
    subcategories: [
      { id: 41, name: 'آرایشی', slug: 'cosmetics' },
      { id: 42, name: 'بهداشتی', slug: 'health' },
    ],
  },
])
</script>

<style>
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

/* مگا منوی دسته بندی */
.category-menu {
  position: relative;
}

.category-menu .category-toggle {
  cursor: pointer;
  display: flex;
  width: 150px;
  margin-bottom: 5px;
  background-color: rgb(11, 185, 185);
  align-items: center;
  gap: 5px;
  font-weight: 500;
  color: #333;
  padding: 8px 12px;
  border-radius: 6px;
  transition:
    background 0.2s,
    color 0.2s;
}

.category-menu .category-toggle:hover {
  background: rgba(0, 0, 0, 0.05);
  color: #ff6f61;
}

.category-menu .mega-menu {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* پیش‌فرض ۴ ستون */
  gap: 20px;
  position: absolute;
  top: 110%; /* کمی فاصله از دکمه */
  right: 0;
  min-width: 700px;
  background: #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 25px;
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transform: translateY(15px);
  transition: all 0.3s ease;
  max-height: 70vh; /* محدودیت ارتفاع */
  overflow-y: auto; /* اسکرول عمودی */
}

.category-menu.active .mega-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.mega-col h4 {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
}

.mega-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mega-col ul li {
  margin-bottom: 6px;
}

.mega-col ul li a {
  font-size: 13px;
  color: #555;
  text-decoration: none;
}

.mega-col ul li a:hover {
  color: #ff6f61;
}

/* برای هماهنگی با منوی اصلی */
.main-menu .category-menu {
  display: inline-block; /* در کنار آیتم های ul قرار بگیرد */
  vertical-align: middle;
  margin-left: 15px;
}

.main-menu .category-menu .mega-menu {
  right: 0;
  top: 100%;
}

@media (max-width: 991px) {
  /* در موبایل منو کامل می شود */
  .main-menu .category-menu {
    display: block;
    margin-left: 0;
  }
}
</style>
