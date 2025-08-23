<template>
  <section class="mt-60">
    <div class="container rtl">
      <div class="row gy-4">
        <div class="col-lg-3 col-sm-6" v-for="(feature, index) in features" :key="index">
          <FeatureItem
            :title="feature.title"
            :text="feature.text"
            :icon="feature.icon"
            :color="feature.color"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import FeatureItem from './FeatureItem.vue'

const features = [
  {
    title: 'برگرداندن و بازپرداخت',
    text: 'ضمانت بازگشت پول',
    icon: '/img/icon/feature-icon1-1.svg',
    color: '#ff0000',
  },
  {
    title: 'پرداخت امن',
    text: '30% تخفیف با اشتراک',
    icon: '/img/icon/feature-icon1-2.svg',
    color: '#C062D0',
  },
  {
    title: 'پشتیبانی کیفیت',
    text: 'همیشه 24/7 آنلاین',
    icon: '/img/icon/feature-icon1-3.svg',
    color: '#71D863',
  },
  {
    title: 'پیشنهادهای روزانه',
    text: '20% تخفیف با اشتراک',
    icon: '/img/icon/feature-icon1-4.svg',
    color: '#16C4E3',
  },
]
</script>