<template>
  <div>
    <Header v-if="!hideLayout" />
    <router-view />
    <Footer v-if="!hideLayout" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const route = useRoute()

// مسیرهایی که هدر و فوتر نباید نمایش داده بشه
const hiddenRoutes = ['/auth', '/register', '/OTP']

const hideLayout = computed(() => {
  return route.path.startsWith('/admin') || hiddenRoutes.includes(route.path)
})
</script>
