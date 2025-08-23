<template>
  <div class="feature-list" :style="{ '--theme-color': color }">
    <div class="box-icon">
      <img :src="icon" :alt="title" />
    </div>
    <div class="media-body">
      <h3 class="box-title">{{ title }}</h3>
      <p class="box-text">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  text: String,
  icon: String,
  color: String
})
</script>

<style scoped>
.feature-list .box-title {
  color: var(--theme-color);
}
</style>
