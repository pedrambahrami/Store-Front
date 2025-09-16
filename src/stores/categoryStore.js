import { defineStore } from 'pinia'
import categoryService from '@/services/categoryService'

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchCategories() {
      this.loading = true
      this.error = null
      try {
        const res = await categoryService.getAll()
        this.categories = res.data.data.data
      } catch (err) {
        this.error = err.response?.data?.message || 'خطا در دریافت دسته‌بندی‌ها'
      } finally {
        this.loading = false
      }
    },

    async addCategory({ name, image }) {
      this.loading = true
      this.error = null

      try {
        const category = {
          name,
          slug: name.trim().replace(/\s+/g, '-').toLowerCase(),
          image, // فرض بر این که رشته هست، مثل URL یا base64
        }
        const res = await categoryService.create(category)
        this.categories.push(res.data.data)
      } catch (err) {
        this.error = err.response?.data?.message || 'خطا در افزودن دسته‌بندی'
      } finally {
        this.loading = false
      }
    },
    async updateCategory(id, updatedData) {
      this.loading = true
      this.error = null
      try {
        const res = await categoryService.update(id, updatedData)
        const index = this.categories.findIndex((cat) => cat.id === id)
        if (index !== -1) this.categories[index] = res.data.data
      } catch (err) {
        this.error = err.response?.data?.message || 'خطا در ویرایش دسته‌بندی'
      } finally {
        this.loading = false
      }
    },

    async deleteCategory(id) {
      this.loading = true
      this.error = null
      try {
        await categoryService.delete(id)
        this.categories = this.categories.filter((cat) => cat.id !== id)
      } catch (err) {
        this.error = err.response?.data?.message || 'خطا در حذف دسته‌بندی'
      } finally {
        this.loading = false
      }
    },
  },
})
