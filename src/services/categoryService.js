import api from './api'

export default {
  async fetchAllCategories() {
    return await api.get('/categories')
  },

  async addCategory(category) {
    const formData = new FormData()
    formData.append('name', category.name)
    if (category.image) formData.append('image', category.image)
    if (category.parent_id) formData.append('parent_id', category.parent_id)
    return await api.post('/categories', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },

  async updateCategory(id, updatedData) {
    const formData = new FormData()
    if (updatedData.name) formData.append('name', updatedData.name)
    if (updatedData.image) formData.append('image', updatedData.image)

    return await api.post(`/categories/${id}?_method=PUT`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },

  async deleteCategory(id) {
    return await api.delete(`/categories/${id}`)
  },
}
