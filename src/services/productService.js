
import api from "@/services/api"



export const productService = {
  get(){
    return api.get('products')
  },

  create(formData){
    return api.post('products', formData, {
       headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },

  delete(productId){
    return api.delete(`products/${productId}`)
  },

  update(productId, formData){
    return api.put(`products/${productId}`, formData)
  },
  bestsellers() {
    return api.get(`products/bestsellers`)
  }
}