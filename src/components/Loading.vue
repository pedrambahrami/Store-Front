<template>
  <transition name="fade">
    <div v-if="show" class="loading-overlay">
      <div class="spinner"></div>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const show = ref(true)
const router = useRouter()

router.beforeEach((to, from, next) => {
  show.value = true
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    show.value = false
  }, 300) 
})
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  inset: 0;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.spinner {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
