<template>
  <section class="">
    <div class="container rtl">
      <div class="row gy-30 justify-content-center">
        <div class="col-xxl-9 col-xl-7">
          <div class="product-list-wrap1 bg-white">
            <div class="row justify-content-between align-items-center">
              <div class="col-md-auto">
                <div class="title-area mb-30 text-center">
                  <h3 class="sec-title">موارد برتر رتبه بندی</h3>
                </div>
              </div>
              <div class="col-md-auto">
                <div class="sec-btn mb-30">
                  <router-link to="/shop" class="ot-btn style7"
                    >مشاهده بیشتر<i class="fas fa-arrow-left ms-2"></i
                  ></router-link>
                </div>
              </div>
            </div>
            <div class="row gy-30 justify-content-xxl-start justify-content-center">
              <div
                v-for="(product, index) in products"
                :key="index"
                class="col-xxl-6 col-xl-12 col-lg-6"
              >
                <div class="ot-product list-view style-border">
                  <div class="product-img">
                    <img :src="product.image" alt="Product Image" />
                  </div>
                  <div class="product-content">
                    <h3 class="box-title">
                      <router-link :to="product.detailsLink">{{ product.title }}</router-link>
                    </h3>
                    <span class="price">
                      {{ product.price }} تومان
                      <del v-if="product.originalPrice">{{ product.originalPrice }} تومان</del>
                    </span>
                    <div
                      class="star-rating"
                      role="img"
                      :aria-label="`امتیاز ${product.rating} از 5`"
                    >
                      <span
                        >امتیاز <strong class="rating">{{ product.rating }}</strong> از 5 بر اساس
                        <span class="rating">{{ product.reviews }}</span> رتبه بندی مشتری</span
                      >
                    </div>
                  </div>
                  <div class="product-action-wrap align-self-center">
                    <div class="actions">
                      <router-link :to="product.wishlistLink" class="icon-btn"
                        ><i class="far fa-heart"></i
                      ></router-link>
                      <button class="icon-btn">
                        <i class="fa-light fa-arrows-cross"></i>
                      </button>
                      <a href="#QuickView" class="icon-btn popup-content"
                        ><i class="far fa-eye"></i
                      ></a>
                    </div>
                    <router-link :to="product.shopLink" class="ot-btn style7"
                      ><i class="fa-light fa-basket-shopping me-1"></i> افزودن به سبد</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-xl-5 col-lg-7">
          <div class="ad-card2">
            <div class="card-content">
              <h4 class="box-title">بهترین اسباب بازی برای کودکان</h4>
              <p class="card-price">10.00 تومان <del>20.00 تومان</del></p>
              <div class="btn-wrap">
                <router-link to="/shop-details" class="ot-btn"
                  >اکنون خرید کنید<i class="fas fa-arrow-left ms-2"></i
                ></router-link>
              </div>
            </div>
            <img class="w-100" src="/img/normal/ad1-2.jpg" alt="تصویر" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TopRankedProducts',
  data() {
    return {
      products: [
        {
          title: 'لباس تک تکه بژ',
          image: '/img/product/post-card1-8.png',
          price: '19.00',
          originalPrice: '26.99',
          rating: '5.00',
          reviews: '1',
          detailsLink: '/shop-details',
          wishlistLink: '/wishlist',
          shopLink: '/shop',
        },
        {
          title: 'هیجان بازی!',
          image: '/img/product/post-card1-10.png',
          price: '26.00',
          originalPrice: '26.99',
          rating: '5.00',
          reviews: '1',
          detailsLink: '/shop-details',
          wishlistLink: '/wishlist',
          shopLink: '/shop',
        },
        {
          title: 'هیجان بازی!',
          image: '/img/product/post-card1-3.png',
          price: '30.00',
          originalPrice: '39.99',
          rating: '5.00',
          reviews: '1',
          detailsLink: '/shop-details',
          wishlistLink: '/wishlist',
          shopLink: '/shop',
        },
        {
          title: 'لباس یک تکه',
          image: '/img/product/post-card1-11.png',
          price: '15.00',
          originalPrice: null,
          rating: '5.00',
          reviews: '1',
          detailsLink: '/shop-details',
          wishlistLink: '/wishlist',
          shopLink: '/shop',
        },
        {
          title: 'لورم ایپسوم متن ساختگی',
          image: '/img/product/post-card1-5.png',
          price: '19.00',
          originalPrice: '26.99',
          rating: '5.00',
          reviews: '1',
          detailsLink: '/shop-details',
          wishlistLink: '/wishlist',
          shopLink: '/shop',
        },
        {
          title: 'تنچی دانت فارترا',
          image: '/img/product/post-card1-6.png',
          price: '12.00',
          originalPrice: '19.99',
          rating: '5.00',
          reviews: '1',
          detailsLink: '/shop-details',
          wishlistLink: '/wishlist',
          shopLink: '/shop',
        },
      ],
    }
  },
}
</script>

<style scoped>
.rtl {
  direction: rtl;
  text-align: right;
}

.product-list-wrap1 {
  padding: 20px;
}

.ot-product.list-view.style-border {
  display: flex;
  border: 1px solid #e0e0e0;
  padding: 15px;
  margin-bottom: 20px;
}

.product-img img {
  max-width: 150px;
  height: auto;
  margin-left: 15px;
}

.product-content {
  flex-grow: 1;
}

.product-action-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
}

.actions {
  display: flex;
  gap: 10px;
}

.ot-btn {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 99px;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
}

.ad-card2 {
  background: #f8f9fa;
  padding: 20px;
  text-align: center;
}

.card-content {
  margin-bottom: 15px;
}

.card-price del {
  color: #6c757d;
}

.btn-wrap {
  margin-top: 15px;
}
</style>
