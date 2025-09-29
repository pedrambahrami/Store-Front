<template>
  <footer class="footer-wrapper">
    <div class="container">
      <div class="footer-top">
        <div class="footer-row">
        
          <div class="footer-col">
            <div class="footer-widget">
              <h4 class="footer-title">درباره ما</h4>
              <p class="footer-text">
                ما بهترین محصولات کودک را با کیفیت بالا و قیمت مناسب ارائه می‌دهیم.
              </p>
            </div>
          </div>

     
          <div class="footer-col">
            <div class="footer-widget">
              <h4 class="footer-title">لینک‌های مفید</h4>
              <ul class="footer-list">
                <li><a href="#">درباره ما</a></li>
                <li><a href="#">تماس با ما</a></li>
                <li><a href="#">سوالات متداول</a></li>
                <li><a href="#">حریم خصوصی</a></li>
              </ul>
            </div>
          </div>

          <div class="footer-col">
            <div class="footer-widget">
              <h4 class="footer-title">پشتیبانی مشتری</h4>
              <ul class="footer-list">
                <li><a href="#">پیگیری سفارش</a></li>
                <li><a href="#">ارسال و تحویل</a></li>
                <li><a href="#">بازگشت کالا</a></li>
                <li><a href="#">خرید عمده</a></li>
              </ul>
            </div>
          </div>

          
          <div class="footer-col">
            <div class="footer-widget">
              <h4 class="footer-title">ما را دنبال کنید</h4>
              <div class="footer-social">
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-telegram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-normal">
        <div class="copyright-wrap">
          <p class="copyright-text">
            © 2025 کلیه حقوق محفوظ است
            <a href="/">بیبی مارت</a>
          </p>
        </div>
        <div class="payment-methods">
          <img src="/img/normal/payments.png" alt="روش‌های پرداخت" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>

.footer-wrapper {
  background: #190449;
  padding: 40px 20px;
  direction: rtl;

}


.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* سطر */
.footer-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
}

/* ستون‌ها */
.footer-col {
  flex: 1 1 220px;
  min-width: 200px;
}

/* ویجت‌ها */
.footer-widget {
  margin-bottom: 20px;
}

.footer-title {
  font-size: 18px;
  margin-bottom: 12px;
  color: white;
  font-weight: bold;
}

.footer-text {
  font-size: 14px;
  color: white;
  line-height: 1.7;
}

/* لیست لینک‌ها */
.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list li {
  margin-bottom: 8px;
}

.footer-list a {
  text-decoration: none;
  font-size: 14px;
  color: white;
  transition: color 0.3s ease;
}

.footer-list a:hover {
  color: #00bbae;
}

/* شبکه‌های اجتماعی */
.footer-social {
  display: flex;
  gap: 12px;
}

.footer-social a {
  color: white;
  font-size: 18px;
  transition: color 0.3s ease;
}

.footer-social a:hover {
  color: #00bbae;
}

/* بخش پایانی */
.footer-normal {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.copyright-text {
  font-size: 14px;
  color:white;
}

.copyright-text a {
  color: #00bbae;
  text-decoration: none;
  font-weight: bold;
}

.payment-methods img {
  max-height: 30px;
}
</style>
