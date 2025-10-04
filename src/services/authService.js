import api from '@/services/api'

export default {
  async sendOtp(phone_number) {
    return api.post('auth/login', { phone_number })
  },

  async verifyOtp(phone_number, otp) {
    return api.post('auth/verify-otp', { phone_number, otp })
  },

  async user() {
    return api.get('auth/user')
  },
}
