<template>
  <div class="container z-index-common rtl" style="padding: 50px 50px">
   
    <div v-if="errorMessage" class="alert alert-danger text-center">
      {{ errorMessage }}
    </div>

   
    <div v-else class="row gy-30 justify-content-center">
      <div
        v-for="banner in promoBanners"
        :key="banner.id"
        class="col-xl-4 col-lg-6"
      >
        <div
          class="offer-card mega-hover background-image"
          :style="{ backgroundImage: `url(${banner.image})` }"
          data-cue="slideInUp"
          data-show="true"
        >
          <h3 class="box-title text-white">{{ banner.title }}</h3>
          <span class="h6 box-subtitle text-white">{{ banner.subtitle }}</span>
          <a :href="banner.link" class="ot-btn style-white">
            اکنون خرید کنید
            <i class="fas fa-arrow-left ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { promoBannerService } from "@/services/promoBannerService";

const promoBanners = ref([]);
const errorMessage = ref("");

onMounted(() => {
  promoBannerService
    .getPromoBanners()
    .then((data) => {
      promoBanners.value = data;
    })
    .catch((err) => {
      
      if (!err.response) {
        errorMessage.value = "اتصال اینترنت خود را بررسی کنید.";
      } else {
        errorMessage.value =
          err.response.data?.message || "خطا در دریافت اطلاعات بنرها.";
      }
      console.error(err);
    });
});
</script>

<style scoped>
.alert {
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 1.1rem;
}
</style>
