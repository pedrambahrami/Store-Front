import api from './api'

export default {
  getAll() {
    return api.get('brands')
  },
  getOne(id) {
    return api.get(`brands/${id}`)
  },
  create(data) {
    return api.post('brands', data)
  },
  update(id, data) {
    return api.put(`brands/${id}`, data)
  },
  delete(id) {
    return api.delete(`brands/${id}`)
  },
}
