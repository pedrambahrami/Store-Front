import api from './api' // فرض بر این که api.js تنظیم شده

export default {
  getAll() {
    return api.get('/categories')
  },

  create(category) {
    const formData = new FormData()
    formData.append('name', category.name)
    formData.append(
      'slug',
      category.slug || category.name.trim().replace(/\s+/g, '-').toLowerCase(),
    )
    if (category.image) formData.append('image', category.image)
    console.log(category.image)
    return api.post('/categories', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },

  update(id, updatedData) {
    const formData = new FormData()
    if (updatedData.name) formData.append('name', updatedData.name)
    if (updatedData.slug) formData.append('slug', updatedData.slug)
    if (updatedData.image) formData.append('image', updatedData.image)

    return api.post(`/categories/${id}?_method=PUT`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },

  delete(id) {
    return api.delete(`/categories/${id}`)
  },
}
