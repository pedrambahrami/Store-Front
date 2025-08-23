<template>
  <section class="ot-hero-wrapper hero-1" :style="{ backgroundImage: `url(${backgroundImage})` }">
    
    <img v-if="innerImage" :src="innerImage" alt="Hero Inner" class="hero-inner-image" />

    <div class="hero-content">
      <p>تا {{ discount }}% تخفیف محصولات</p>
      <h1>{{ title }}</h1>
      <a :href="buttonLink">
        <button>{{ buttonText }}</button>
      </a>
    </div>
  </section>
</template>

<script setup>
defineProps({
  discount: {
    type: Number,
    default: 70,
  },
  title: {
    type: String,
    default: 'اسباب بازی بخرید و لباس',
  },
  buttonText: {
    type: String,
    default: 'اکنون خرید کنید',
  },
  buttonLink: {
    type: String,
    default: '#',
  },
  backgroundImage: {
    type: String,
    default: '/img/hero/hero-bg1-1.png',
  },
  innerImage: {
    type: String,
    default: '/img/hero/hero-thumb1-1.png', 
  },
})
</script>

<style scoped>
.ot-hero-wrapper {
  position: relative;
  border-radius: 99px;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2rem;
  overflow: hidden;
}

.hero-inner-image {
  position: absolute;
  bottom: 0;
  left: 2rem;
  max-width: 40%;
  height: auto;
}

.hero-content {
  text-align: right;
  color: white;
  z-index: 1;
}

h1 {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #fff;
}

p {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #103741;
}

button {
  margin-top: 38px;
  background-color: #fff;
  color: black;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 99px;
  font-size: 1.2rem;
  font-weight: 650;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #103741;
  color: #fff;
}
</style>
