<template>
  <header class="ot-header header-layout1">
    <div class="header-top">
      <div class="container rtl">
        <div
          class="row justify-content-center justify-content-lg-between align-items-center gy-2"
        >
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
                  <a href="mailto:info@example.com"
                    >pedram.bahrame1382@gmail.com</a
                  >
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
                  <i class="fal fa-user"></i
                  ><router-link to="/auth">ورود | ثبت نام</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- منوی اصلی -->
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
                      <li>
                        <router-link to="/shop-details"
                          >جزئیات فروشگاه</router-link
                        >
                      </li>
                      <li><router-link to="/cart">سبد خرید</router-link></li>
                      <li>
                        <router-link to="/checkout">تسویه حساب</router-link>
                      </li>
                      <li>
                        <router-link to="/wishlist">لیست علاقمندی</router-link>
                      </li>
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
                      <li>
                        <router-link to="/blog-grid">سبک شبکه وبلاگ</router-link>
                      </li>
                      <li>
                        <router-link to="/blog-details"
                          >جزئیات وبلاگ</router-link
                        >
                      </li>
                    </ul>
                  </li>

                  <li><router-link to="/contact">با ما تماس بگیرید</router-link></li>

                  <!-- دسته بندی کالاها (داخل UL) -->
                  <!-- <li class="category-menu" :class="{ active: isCategoryOpen }">
                    <a
                      href="javascript:void(0)"
                      class="category-toggle"
                      @click="toggleCategory"
                    >
                      <i class="fa fa-bars"></i> دسته‌بندی کالاها
                    </a>
                    <div class="mega-menu">
                      <div
                        v-for="cat in categories"
                        :key="cat.id"
                        class="mega-col"
                      >
                        <h4>{{ cat.name }}</h4>
                        <ul>
                          <li
                            v-for="sub in cat.subcategories"
                            :key="sub.id"
                          >
                            <router-link :to="'/category/' + sub.slug">
                              {{ sub.name }}
                            </router-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li> -->
                </ul>
              </nav>
            </div>

            <div class="col-auto">
              <div class="header-button">
                <form action="#" class="header-form">
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
                <button
                  type="button"
                  class="icon-btn sideMenuCart"
                  @click="isCartOpen = true"
                >
                  <span class="badge">{{ cartStore.totalCount }}</span>
                  <i class="far fa-basket-shopping"></i>
                </button>
                <button
                  type="button"
                  class="icon-btn sideMenuInfo d-none d-lg-block"
                >
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
import { ref, onMounted } from "vue";
import CartSidebar from "@/components/CartSidebar.vue";
import { useCartStore } from "@/stores/cartStore";

const isCartOpen = ref(false);
const cartStore = useCartStore();

onMounted(() => {
  cartStore.getusercart();
});

const isCategoryOpen = ref(false);

function toggleCategory() {
  isCategoryOpen.value = !isCategoryOpen.value;
}

const categories = ref([
  {
    id: 1,
    name: "کالای دیجیتال",
    subcategories: [
      { id: 11, name: "موبایل", slug: "mobile" },
      { id: 12, name: "لپ‌تاپ", slug: "laptop" },
      { id: 13, name: "ساعت هوشمند", slug: "smart-watch" },
    ],
  },
  {
    id: 2,
    name: "خانه و آشپزخانه",
    subcategories: [
      { id: 21, name: "لوازم برقی", slug: "home-appliances" },
      { id: 22, name: "دکوراسیون", slug: "decoration" },
    ],
  },
  {
    id: 3,
    name: "مد و پوشاک",
    subcategories: [
      { id: 31, name: "زنانه", slug: "women" },
      { id: 32, name: "مردانه", slug: "men" },
    ],
  },
  {
    id: 4,
    name: "سلامت و زیبایی",
    subcategories: [
      { id: 41, name: "آرایشی", slug: "cosmetics" },
      { id: 42, name: "بهداشتی", slug: "health" },
    ],
  },
]);
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

/* آیتم دسته‌بندی مثل بقیه منوها */
.main-menu > ul > li.category-menu {
  position: relative;
  display: inline-block;
}

.main-menu > ul > li.category-menu > a {
  font-weight: 500;
  color: #333;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.3s ease;
}

.main-menu > ul > li.category-menu > a:hover {
  color: #ff6f61;
}

/* مگا منو */
.main-menu > ul > li.category-menu .mega-menu {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  width: 600px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  z-index: 999;
}

/* وقتی فعال باشه نمایش بده */
.main-menu > ul > li.category-menu.active .mega-menu {
  display: grid;
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
</style>
