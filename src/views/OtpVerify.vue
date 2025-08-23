<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '@/services/api'
import logo from '/img/logo.svg'

const route = useRoute()
const router = useRouter()
const otp = ref('')
const phone_number = route.query.phone_number || ''

const verifyOtp = async () => {
  if (!otp.value.trim()) {
    alert('کد تایید را وارد کنید')
    return
  }

  try {
    const res = await api.post('auth/verify-otp', {
      phone_number,
      otp: otp.value,
    })

    localStorage.setItem('token', res.data.token)
    router.push('/admin')
  } catch (err) {
    console.error(err)
    alert('کد تایید اشتباه است')
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
      <h1>کد تایید</h1>
      <p>کد ارسال شده به {{ phone_number }} را وارد کنید</p>

      <form @submit.prevent="verifyOtp">
        <label>
          <input type="text" v-model="otp" placeholder="کد تایید" />
        </label>
        <button type="submit">تایید</button>
      </form>

      <p class="terms">
        اگر کد را دریافت نکردید،
        <a href="/auth"> دوباره تلاش کنید </a>
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
