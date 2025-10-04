<template>
  <nav class="main-menu d-none d-lg-inline-block">
    <ul>
      <li class="menu-item-has-children">
        <a href="javascript:void(0)">دسته‌بندی کالاها</a>
        <ul class="sub-menu">
          <li class="menu-item-has-children">
            <a href="#">کالای دیجیتال </a>
            <ul class="sub-menu">
              <li><router-link to="/category/mobile"> موبایل </router-link></li>
              <li><router-link to="/category/laptop">لپ‌تاپ</router-link></li>
              <li><router-link to="/category/camera">دوربین</router-link></li>
            </ul>
          </li>

          <li class="menu-item-has-children">
            <a href="#" >خانه و آشپزخانه </a>
            <ul class="sub-menu">
              <li><router-link to="/category/kitchen">لوازم آشپزخانه</router-link></li>
              <li><router-link to="/category/furniture">مبلمان</router-link></li>
              <li><router-link to="/category/cleaning">لوازم نظافت</router-link></li>
            </ul>
          </li>

          <li class="menu-item-has-children">
            <a href="#">گوشی و لپ‌تاپ</a>
            <ul class="sub-menu">
              <li><router-link to="/category/android">گوشی اندروید</router-link></li>
              <li><router-link to="/category/iphone">آیفون</router-link></li>
              <li><router-link to="/category/tablet">تبلت</router-link></li>
            </ul>
          </li>

          <li class="menu-item-has-children">
            <a href="#">گجت‌ها</a>
            <ul class="sub-menu">
              <li><router-link to="/category/smartwatch">ساعت هوشمند</router-link></li>
              <li><router-link to="/category/earbuds">هدفون و ایرباد</router-link></li>
              <li><router-link to="/category/accessories">لوازم جانبی</router-link></li>
            </ul>
          </li>

          <li class="menu-item-has-children">
            <a href="#">لوازم جانبی جدید</a>
            <ul class="sub-menu">
              <li><router-link to="/category/bags">کیف و کوله</router-link></li>
              <li><router-link to="/category/chargers">شارژر و کابل</router-link></li>
            </ul>
          </li>
        </ul>
      </li>
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
          <li><router-link to="/shop">خرید</router-link></li>
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
</template>

<script setup></script>

<style scoped>
.main-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.main-menu ul li {
  position: relative;
}
.main-menu ul li a {
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  color: #333;
}
.main-menu ul li a:hover {
  color: #ff6f61;
}
.main-menu ul li .sub-menu {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 200px;
  background: #fff;
  border: 1px solid #eee;
  z-index: 999;
}
.main-menu ul li:hover > .sub-menu {
  display: block;
}
.main-menu ul li .sub-menu li .sub-menu {
  top: 0;
  left : -240px;
}
</style>
