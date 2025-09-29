import { defineStore } from 'pinia'
import axios from 'axios'

export const useBannerStore = defineStore('banner', {
  state: () => ({
    banners: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchBanners() {
      try {
        this.loading = true
        const { data } = await axios.get('/api/banners') // مسیر API
        this.banners = data
      } catch (err) {
        console.error(err)
        this.error = 'خطا در بارگذاری بنرها'
      } finally {
        this.loading = false
      }
    }
  }
})
