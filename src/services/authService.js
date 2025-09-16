// src/services/authService.js
import api from '@/services/api'

export default {
  // ارسال OTP به شماره موبایل یا ایمیل کاربر
  async sendOtp(phone_number) {
    return api.post('auth/login', { phone_number })
  },

  // تأیید OTP و دریافت توکن
  async verifyOtp(phone_number, otp) {
    return api.post('auth/verify-otp', { phone_number, otp })
  },

  async user() {
    return api.get('auth/user')
  },
}
