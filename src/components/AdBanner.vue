<template>
  <div
    class="banner1 style2"
    :style="{ backgroundImage: `url(${background})` }"
  >
    <div class="banner-content">
      <span class="sub-title">{{ subtitle }}</span>
      <h3 class="banner-title">{{ title }}</h3>
      <a href="#" class="ot-btn">{{ buttonText }}</a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  background: String,
  subtitle: String,
  title: String,
  buttonText: String
})
</script>
