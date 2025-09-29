<template>
  <section class="about-sec1 space" id="about-sec">
    <div class="container rtl">
      <div class="row gy-40 align-items-center">
        <!-- تصویر -->
        <div class="col-xxl-7 col-xl-6">
          <div class="img-box1">
            <div class="img1">
              <img src="/img/normal/about1-1.png" alt="About" />
            </div>
          </div>
        </div>

        <!-- متن و جزئیات -->
        <div class="col-xxl-5 col-xl-6">
          <div class="about-wrap1">
            <div class="title-area mb-37">
              <span class="sub-title text-theme">درباره ما</span>
              <h2 class="sec-title">یاد بگیرید بازی کنید، با اعتماد به نفس گفتگو کنید.</h2>
              <p class="sec-text">
                لکتوس. کورابیتور فقط از بین نمی‌رود، بدون اینکه از شیرآلات استفاده کند. آلیکام در بالاترین نقطه از قطر خود قرار دارد. در تخمیر
              </p>
            </div>

            <div class="row gy-4">
              <div class="col-md-6">
                <div class="about-grid">
                  <div class="box-icon"><img src="/img/icon/about-grid-icon1.svg" alt="تصویر" /></div>
                  <div class="about-grid-details">
                    <h3 class="box-title h6">اسباب بازی کودکان</h3>
                    <p class="box-text">همه چیز به درستی انجام شد، هیچ چیز از بین نرفت</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="about-grid">
                  <div class="box-icon"><img src="/img/icon/about-grid-icon2.svg" alt="تصویر" /></div>
                  <div class="about-grid-details">
                    <h3 class="box-title h6">یادگیری آسان</h3>
                    <p class="box-text">همه چیز به درستی انجام شد، هیچ چیز از بین نرفت</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="btn-wrap mt-45">
              <div class="about-profile">
                <div class="avater"><img src="/img/normal/about-profile1-1.png" alt="avater" /></div>
                <div class="media-body">
                  <h5 class="about-profile-name">ریچارد رونالد</h5>
                  <p class="desig">مدیر اجرایی</p>
                </div>
              </div>

              <div class="call-btn">
                <div class="box-icon"><i class="far fa-phone-volume"></i></div>
                <div class="media-body">
                  <p class="box-subtitle">اکنون با ما تماس بگیرید</p>
                  <h3 class="box-title"><a href="tel:+1632543654">09120000000</a></h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// فعلاً نیازی به state یا props نیست، اگر خواستی می‌توانیم بعداً داینامیکش کنیم
</script>

<style scoped>
/* می‌تونی CSS اصلی خودت رو اینجا بیاوری */
.about-sec1 {
  padding: 80px 0;
}
.img-box1 img {
  max-width: 100%;
  display: block;
}
.title-area .sub-title {
  color: #3498db;
  font-weight: 500;
  margin-bottom: 10px;
  display: inline-block;
}
.sec-title {
  font-size: 28px;
  margin-bottom: 15px;
  font-weight: 600;
}
.sec-text {
  font-size: 15px;
  color: #555;
}
.about-grid {
  display: flex;
  gap: 15px;
  align-items: start;
}
.box-icon img {
  width: 40px;
}
.about-profile, .call-btn {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
}
.about-profile .avater img {
  width: 60px;
  border-radius: 50%;
}
</style>
