import { defineStore } from 'pinia'
import Cartservice from '@/services/Cartservice'
import { toast } from 'vue3-toastify'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    totalCount : 0,
    loading: false,
  }),
  actions: {
    async addToCart(product) {
      try {
        const data = {
          "product_id": product.id,
          "quantity": 1,
         "price": product.price
        }
        const res = await Cartservice.addcartitem(data)
        this.items = res.data.data.cart_items
        this.totalCount = this.items.length
        toast.success('محصول با موفقیت به سبد اضافه شد!')
      } catch (error) {
        console.error('Error adding to cart:', error)
        toast.error('خطایی در افزودن محصول رخ داد!')
      }
    },

    async removeFromCart(id) {
      try {
        const res = await Cartservice.deletecartitem(id)
  
        toast.success('محصول با موفقیت حذف شد!')
      } catch (error) {
        console.error('Error removing from cart:', error)
        toast.error('خطا در حذف محصول!')
      }
    },

    async getusercart() {
      try {
        this.loading = true
        const res = await Cartservice.getcartforuser()
        this.items = res.data.data.cart_items
        this.totalCount = this.items.length
        this.loading = false
      } catch (error) {
        console.error('Error fetching user cart:', error)
      }
    },
  },
})
