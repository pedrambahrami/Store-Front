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
                <li><i class="fal fa-user"></i><router-link to="/auth">ورود | ثبت نام</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
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
                  <div class="form-group">
                    <select name="category" id="category" class="form-select nice-select">
                      <option value="" selected disabled>دسته‌ها</option>
                      <option value="game-and-toy">بازی و اسباب بازی</option>
                      <option value="kid-clothing">لباس کودک</option>
                      <option value="kid-books">کتاب‌های کودک</option>
                      <option value="indoor-play">بازی داخلی</option>
                      <option value="smart-toys">اسباب بازی های هوشمند</option>
                    </select>
                    <i class="fa-sharp fa-solid fa-grid-2"></i>
                  </div>
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
                <button type="button" class="icon-btn sideMenuCart">
                  <span class="badge">5</span>
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
  </header>
</template>

<script setup></script>

<style></style>
