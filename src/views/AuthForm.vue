<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/services/api'
import logo from '/img/logo.svg'
// import { useAuthStore } from '@/stores/authStore' // اضافه شد

// const auth = useAuthStore() // اضافه شد
const router = useRouter()
const phone_number = ref('')

const submitForm = async () => {
  if (!phone_number.value.trim()) {
    alert('لطفا این قسمت را خالی نگذارید')
    return
  }

  try {
    // ارسال درخواست برای تولید OTP

    await api.post('auth/login', { phone_number: phone_number.value })

    // هدایت به صفحه وارد کردن OTP
    router.push({ name: 'VerifyOtp', query: { phone_number: phone_number.value } })
  } catch (err) {
    console.error(err)
    alert('خطا در ارسال کد تایید')
  }
}
</script>

<template>
  <div class="auth-wrapper">
    <div class="logo-container">
      <a href="/">
        <img :src="logo" alt="لوگو" />
      </a>
    </div>

    <div class="auth-content">
      <h1>ورود | ثبت‌نام</h1>
      <p>سلام!</p>
      <p>لطفا شماره موبایل خود را وارد کنید</p>

      <form @submit.prevent="submitForm">
        <label>
          <input type="text" v-model="phone_number" placeholder="  شماره موبایل" />
        </label>
        <button type="submit">ورود</button>
      </form>

      <p class="terms">
        ورود شما به معنای پذیرش
        <a href="/page/terms/"> اسکل بودن خود </a>
        و
        <a href="/page/privacy/">دیوانه بودن خود</a>
        است
      </p>
    </div>
  </div>
</template>

<style scoped>
.auth-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 400px;
  padding: 50px 35px;
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  direction: rtl;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
}

.logo-container img {
  width: 140px;
}

.auth-content h1 {
  font-size: 1.4rem;
  margin-bottom: 6px;
  text-align: right;
  color: #0f766e;
  font-weight: 600;
}

.auth-content p {
  margin: 4px 0;
  color: #4b5563;
  text-align: right;
  font-size: 0.9rem;
}

form {
  margin-top: 15px;
}

input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  margin-bottom: 12px;
  font-size: 14px;
  outline: none;
  background-color: #f9fafb;
  transition:
    border-color 0.2s,
    background-color 0.2s;
}

input:focus {
  border-color: #0d9488;
  background-color: #fff;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #0d9488;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.25s ease;
}

button:hover {
  background-color: #0f766e;
}

.terms {
  margin-top: 15px;
  font-size: 12px;
  text-align: right;
  color: #6b7280;
}

.terms a {
  color: #0d9488;
  text-decoration: none;
}

.terms a:hover {
  text-decoration: underline;
}
</style>
