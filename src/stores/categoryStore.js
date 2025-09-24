import { defineStore } from 'pinia'
import categoryService from '@/services/categoryService'



function buildCategoryTree(categories) {
  const map = []
  const roots = []

  categories.forEach(category => {
    map[category.id] = {...category, children: []}
  })
  categories.forEach(category => {
    if (category.parent) {
      if (map[category.parent.id]) {
        map[category.parent.id].children.push(map[category.id])
      }
    } else {
      roots.push(map[category.id])
    }
  })
  return roots

}


export const useCategoryStore = defineStore('category', {
  state: () => ({
    nested_categories: [],
    categories: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchCategories() {
      this.loading = true
      this.error = null
      try {
        const res = await categoryService.fetchAllCategories()
        this.categories = res.data.data
        this.nested_categories = buildCategoryTree(res.data.data)
      } catch (err) {
        this.error = err.response?.data?.message || 'خطا در دریافت دسته‌بندی‌ها'
      } finally {
        this.loading = false
      }
    },

    async addCategory({ name, image, parent_id }) {
      this.loading = true
      this.error = null

      try {
        const category = {
          name,
          image,
          parent_id,
        }
        const res = await categoryService.addCategory(category)
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
        const res = await categoryService.updateCategory(id, updatedData)
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
        await categoryService.deleteCategory(id)
        this.categories = this.categories.filter((cat) => cat.id !== id)
      } catch (err) {
        this.error = err.response?.data?.message || 'خطا در حذف دسته‌بندی'
      } finally {
        this.loading = false
      }
    },
  },
})
