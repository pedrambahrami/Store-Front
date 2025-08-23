<template>
  <div class="category-card">
    <div class="box-img">
      <img :src="image" :alt="title" />
    </div>
    <h3 class="box-title">
      <a :href="link">{{ title }}</a>
    </h3>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  image: String,
  link: String
})
</script>
