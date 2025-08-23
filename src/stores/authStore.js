// src/stores/authStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/services/api'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()

  // استیت‌ها
  const username = ref('')
  const loading = ref(false)
  const errorMsg = ref('')

  // اکشن‌ها
  const sendOtp = async () => {
    if (!username.value.trim()) {
      errorMsg.value = 'لطفا شماره موبایل خود را وارد کنید'
      return
    }

    errorMsg.value = ''
    loading.value = true

    try {
      await api.post('auth/send-otp', { username: username.value })
      router.push({ name: 'VerifyOtp', query: { username: username.value } })
    } catch (err) {
      console.error(err)
      errorMsg.value = 'خطا در ارسال کد تایید'
    } finally {
      loading.value = false
    }
  }

  return {
    username,
    loading,
    errorMsg,
    sendOtp,
  }
})
